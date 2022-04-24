const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.like]: "%@mail.com%",
        },
      },
      include: [
        {
          association: "addresses",
          where: { street: { [Op.like]: "%Caratuba%" } },

          association: "techs",
          required: false,
          where: { name: { [Op.like]: "%React%" } },
        },
      ],
    });

    return res.json(users);
  },
};
