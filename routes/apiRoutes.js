const db = require("../db/db.json");
const path = require("path");
const { send } = require("process");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    res.json(db);
  });
  app.post("/api/notes", (req, res) => {
    // adding a note
    // parse then push
    // return added
  });
  app.delete("/api/notes", (req, res) => {
    // deleting a note
    // send notes
    // identify note by id
    // remove from note array
    // return deleted
  });
};
