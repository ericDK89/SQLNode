const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const AdressesController = require("../controllers/AddressesController");
const TechController = require("../controllers/TechController");
const ReportController = require("../controllers/ReportController");

router.get("/users", UserController.index);
router.post("/users", UserController.store);

router.get("/users/:user_id/addresses", AdressesController.index);
router.post("/users/:user_id/addresses", AdressesController.store);

router.get("/users/:user_id/techs", TechController.index);
router.post("/users/:user_id/techs", TechController.store);
router.delete("/users/:user_id/techs", TechController.delete);

router.get('/report', ReportController.show)

module.exports = router;
