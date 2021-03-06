const express = require("express");
const connection = require("../config");
const router = express.Router();

const bodyParser = require("body-parser");
// Support JSON-encoded bodies
router.use(bodyParser.json());
// Support URL-encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));

// get all users
router.get("/", (req, res) => {
  connection.query(
    "SELECT * from users ORDER BY date_resa DESC",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving users");
      } else {
        res.json(results);
      }
    }
  );
});

//post a reservation
router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO users SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error saving");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
