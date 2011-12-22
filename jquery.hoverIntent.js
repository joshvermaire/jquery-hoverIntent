/**
* This fork of hoverIntent is building on Brian Cherne's original work.
* Find out more about his work at:
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* current usage only takes one callback into consideration. In order to 
* create a method that takes into consideration the previous onMouseOver
* and onMouseOut functions, use event.originalEvent.type in the callback
* and listen for mouseover and mouseout events.
* 
* $("ul li").bind('hoverIntent', callback);
* You can extend the default configuration by modifying the object
* $.event.special.hoverIntent.
* 
*/
$(document).ready(function() {
      var cX, cY, pX, pY;
      return $.event.special.hoverIntent = {
        cfg: {
          sensitivity: 7,
          interval: 100,
          timeout: 0
        },
        setup: function() {
          var handler;
          handler = function(event) {
            var applyCallback, args, cfg, compare, delay, ob, track;
            ob = this;
            cfg = jQuery.event.special.hoverIntent.cfg;
            args = arguments;
            applyCallback = function() {
              event.type = 'hoverIntent';
              return jQuery.event.handle.apply(ob, args);
            };
            delay = function() {
              ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
              ob.hoverIntent_s = 0;
              return applyCallback();
            };
            track = function(event) {
              cX = event.pageX;
              return cY = event.pageY;
            };
            compare = function() {
              ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
              if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                ob.hoverIntent_s = 1;
                return applyCallback();
              } else {
                pX = cX;
                pY = cY;
                return ob.hoverIntent_t = setTimeout(compare, cfg.interval);
              }
            };
            if (ob.hoverIntent_t) {
              ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }
            if (event.type === "mouseenter") {
              pX = event.pageX;
              pY = event.pageY;
              $(ob).bind("mousemove", track);
              if (ob.hoverIntent_s !== 1) {
                return ob.hoverIntent_t = setTimeout(compare, cfg.interval);
              }
            } else {
              $(ob).unbind("mousemove", track);
              if (ob.hoverIntent_s === 1) {
                return ob.hoverIntent_t = setTimeout(delay, cfg.timeout);
              }
            }
          };
          return $(this).bind('mouseenter', handler).bind("mouseleave", handler);
        },
        teardown: function(namespaces) {
          return $(this).unbind('mouseenter', $(this)).unbind("mouseleave", $(this));
        }
      };
    });