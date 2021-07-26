//Required External modules
const express = require("express");
const path = require("path");
require("dotenv").config();
const paginate = require("express-paginate");

//Required code files
const services = require("./service/services.js");

//Application Variables
const app = express();
const port = 8000;

//Server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

//Configuration
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(paginate.middleware(10, 50));

//Routes
app.get("/", (req, res) => {
  //console.log("Calling services");
  const limit = req.query.limit || 10;
  const offset = req.offset;

  services.findRecords({ offset: offset, limit: limit }).then((results) => {
    console.log(results);

    const pageCount = Math.ceil(results.count / limit);
    res.render("paginatedTable", {
      data: results.rows,
      pageCount,
      pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),
    });
  });
});
