hoverIntent jQuery Plug-in
==========================
Refactored hoverIntent jQuery Plugin-in

I will be changing hoverIntent to take advantage of some of the more sophisticated, recent abilities of jQuery. This will include binding, multiple or single callbacks, and delegation.

If you're interested in helping with thoughts or ideas, please let me know.

Josh Vermaire


Original hoverIntent jQuery Plugin-in

hoverIntent is a plug-in that attempts to determine the user's intent... like a crystal ball, only with mouse movement! It works like (and was derived from) [jQuery](http://jquery.com/)'s built-in [hover](http://api.jquery.com/hover/). However, instead of immediately calling the onMouseOver function, it waits until the user's mouse slows down enough before making the call.

Why? To delay or prevent the accidental firing of animations or ajax calls. Simple timeouts work for small areas, but if your target area is large it may execute regardless of intent.

For more information, visit [http://cherne.net/brian/resources/jquery.hoverIntent.html](http://cherne.net/brian/resources/jquery.hoverIntent.html)
