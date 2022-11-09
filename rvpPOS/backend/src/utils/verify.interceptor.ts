const verify1 = (req, res, next) => {
  if (req.query.token1 == "leklek") {
    next();
  } else {
    res.end("No token1");
  }
};

const verify2 = (req, res, next) => {
  if (req.query.token2 == "5555") {
    next();
  } else {
    res.end("No token2");
  }
};

export default { verify1, verify2 };
