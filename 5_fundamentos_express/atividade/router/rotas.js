const express = require("express");
const router = express.Router();
const path = require("path");

//ler o body
router.use(
  express.urlencoded({
    extended: true,
  })
);

router.use(express.json());

const basePath = path.join(__dirname, "../html");

router.get("/about", (req, res) => {
  res.sendFile(`${basePath}/about.html`);
});

module.exports = router;
