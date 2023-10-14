### CORS
- Cross-Origin Resource Sharing
- CORS allows us to break the same-origin policy of the browser
- CORS is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin
- The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin
- It helps isolate potentially malicious documents, reducing possible attack vectors
- The origin is the domain name, application layer protocol, and port of a URL of the document
- With a `GET` request, the request is not blocked. The response gets blocked if the response has the `Access-Control-Allow-Origin` header set to a different origin
- For requests that change some data on the server side (`PUT`, `POST`, `DELETE`, etc), the browser first sends a preflight request (`OPTIONS`) to the server to check if the server allows the request. If the server allows the request, the browser sends the actual request. The preflight request is blocked if the response has the `Access-Control-Allow-Origin` header set to a different origin. 
- With the preflight response, the server must also return a `Access-Control-Allow-Methods` header that lists the allowed methods
- If the allowed origin and allowed methods are different from the actual origin and method, the browser will block the request
- [test-cors.org](https://test-cors.org/)

### JSONP
- JSONP is a way to get around the same-origin policy
- JSONP solves the same-origin policy just as CORS but it has some limitations
- JSONP only supports `GET` requests
-  A script tag does not need to follow the same-origin policy