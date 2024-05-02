const express = require("express");

const hotelController = require("../controllers/hotel");

const router = express.Router();

router.post("/signup", hotelController.postSignUp);

router.post("/login", hotelController.postLogin);

router.get("/", hotelController.getHotelsData);

router.get("/detail/:hotelId", hotelController.getDetailHotel);

router.post("/transaction", hotelController.postTransaction);

// router.get("/transaction/:hotelId", hotelController.getTransaction);

module.exports = router;
