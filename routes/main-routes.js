const express = require("express");
const router = express.Router();
const db = require("../database.json");

router.get("/", (req, res) => {
  //se obtienen los parametros de filtrado y se guardan en la constante filter

  const filter = req.query;

  //se aplica el filtro de los datos que se encuentran en la constante db

  let result = db.filter((item) => {
    for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key]) return false;
    }
    return true;
  });

  //se produce a realizar respuesta de la petición http
  res.status(200).json(result);
});

module.exports = router;
