const express = require("express");
const router = new express.Router();

router.get("", (req, res) => {
  res.render("index", {});
});
router.get("/photos", (req, res) => {
  //eventually work database and JS to dynamically render photo stream
  res.render("photos", {});
});
router.get("/about", (req, res) => {
  res.render("about", {});
});
router.get("/contact", (req, res) => {
  res.render("contact", {});
});
router.get("*", (req, res) => {
  res.render("404", {});
});

module.exports = router;
