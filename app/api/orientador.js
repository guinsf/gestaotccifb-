var mongoose = require("mongoose");

module.exports = function (app) {
  var api = {};

  var model = mongoose.model("Prof");
/*Realizando a requisição de pesquisa de orientadores */
  api.lista = function (req, res) {
    
    model.find().then(
      function (orientadores) {
        res.json(orientadores);
      },
      function (error) {
        console.log(error);
        res.sendStatus(500);
      }
    );
  };

  return api;
};
