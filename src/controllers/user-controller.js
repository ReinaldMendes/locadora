import User from "../models/user-model.js";

export const signup = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
      role: req.body.role,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();
    if (!user || !(await !user.isValidPassword(rq.body.password))) {
      res.status(404).json({
        error: "Email os passaword incorrect",
      });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
