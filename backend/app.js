const langs = require("./db");
const express = require("express");
const { response } = require("express");
const app = express();

app.get("/api/langs", (req, res) => {
  res.json(langs);
});

//Fetching single item
app.get("api/langs/:id", (req, res) => {
  const id = Number(request.params.id);
  const singleLang = langs.find((lang) => lang.id === id);
  if (singleLang) {
    res.json(singleLang);
  } else {
    response.status(404).end();
  }
});

// Deleting single item

app.delete("api/langs/:id", (req, res) => {
  const id = request.params.id;
  langs = langs.filter((lang) => lang.id != id);
  response.status(204).end();
});

const PORT = 8000;
app.listen(PORT);
