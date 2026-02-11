module.exports = (req, res, next) => {
  res.success = (message = "Success", content = null) => {
    return res.status(200).json({ code: 200, message, content });
  };

  res.created = (message = "Created", content = null) => {
    return res.status(201).json({ code: 201, message, content });
  };

  res.badRequest = (message = "Bad request", content = null) => {
    return res.status(400).json({ code: 400, message, content });
  };

  res.unauthorized = (message = "Unauthorized", content = null) => {
    return res.status(401).json({ code: 401, message, content });
  };

  res.forbidden = (message = "Forbidden", content = null) => {
    return res.status(403).json({ code: 403, message, content });
  };

  res.notFound = (message = "Not found", content = null) => {
    return res.status(404).json({ code: 404, message, content });
  };

  res.error = (message = "Internal server error", content = null) => {
    return res.status(500).json({ code: 500, message, content });
  };

  next();
};
