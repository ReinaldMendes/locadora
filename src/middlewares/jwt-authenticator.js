import jwtServices from "../services/jwt-services";

const jwtAuthenticator = (req, res, next) => {
  try {
    const token = req.headers.authorization.splite("")[1];

    if (jwtServices.verifyAcessToken(token)) {
      next();
    } else {
      throw new Error("");
    }
  } catch (error) {
    res.sendStatus(401);
  }
};

export default jwtAuthenticator;
