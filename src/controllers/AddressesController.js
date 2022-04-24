const Addresses = require("../models/Addresses");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      res.json({ error: "User not Found" });
    }

    const address = await Addresses.create({
      zipcode,
      street,
      number,
      user_id,
    });
    return res.json(address);
  },
};
