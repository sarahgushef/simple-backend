import User from "../models/UserModel.js";

export const signupUser = async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
    });

    res.status(201).json({ msg: "User created" });
  } catch (error) {
    res.send(error);
  }
};

export const getAllUsersDdata = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.send(error);
  }
};
