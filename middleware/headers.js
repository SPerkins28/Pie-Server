module.exports = (req, res, next) => {
  res.header("access-control-allow-origin", "*"); // tells browser to allow code from any origin
  res.header("access-control-allow-methods", "GET, POST, PUT, DELETE"); // specifing the methods allowd when accessing the resource in the response to a preflight request.
  res.header(
    "access-control-allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // is used in the response to a preflight request to indicate which HTTP headers can be used during the actual request

  next();
};

// CORS --> Cross Origin Resource Sharing: Mechanism that uses addition HTTP Headers to tell browsers to give a web application that is running at one origin, access to selected resources from a differnt origin.
