const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.get("/about.html", (req, res) =>
  res.sendFile("about.html", { root: __dirname })
);
app.get("/contact-me.html", (req, res) =>
  res.sendFile("contact-me.html", { root: __dirname })
);
app.get("*", (req, res) =>
  res.status(404).sendFile("404.html", { root: __dirname })
);

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
