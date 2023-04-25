function decorateHtmlResponse(page_title) {
  return function (req, res, next) {
    res.locals.html = true;
    req.locals.title = `${page_title} - ${process.env.APP_NAME}`;
    console.log(req.locals.title);
    next();
  };
}

module.exports = decorateHtmlResponse;
