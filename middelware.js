module.exports =  middleware = (req, res, next) => {
  console.log("MiddleWare is running");
  if (!req.query.age) {
    res.send("You must add age for login");
  } else if (req.query.age < 18) {
    res.send("You are not an aduit to use this website");
  } else {
    next();
  }
};
