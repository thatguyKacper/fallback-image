## Loading an Image with a Fallback

This solution provides a robust mechanism to display images by programmatically creating an Image element wrapped within a Promise. It actively monitors load and error events to manage availability.

The logic attempts to load a primary URL first. If the image loads successfully, the Promise resolves with the element ready for DOM insertion. However, if the error event triggers, the system automatically substitutes the src attribute with a predefined fallback URL.

Crucially, the error handler includes specific checks to distinguish between the primary and fallback sources. If the fallback image also fails to load, the Promise is rejected. This validation is essential to prevent infinite loops where the browser might otherwise repeatedly attempt to request an invalid fallback resource.