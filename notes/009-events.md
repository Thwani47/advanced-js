### Event capturing and bubbling
- `Event capturing`: the event starts from the top element (window) and goes down to the target element.
- `Event bubbling`: the event starts from the target element and goes up to the top element (window).
- We can add an event lister and specify the phase in which we want to listen to the event. (default is bubbling)
```js
addEventListener(type, listener, useCapture); --> useCapture is false by default
```

### `stopPropagation()` and `preventDefault()`
- `stopPropagation()` stops the event from propagating down the capturing phase and up the bubbling phase.
- `preventDefault()` prevents the default action of the event from happening. For example, if we have a link, it prevents the link from being followed.
- `preventDefault()` does not stop the event from propagating.