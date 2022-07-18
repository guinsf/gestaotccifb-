var mongoose = require("mongoose");

module.exports = function (app) {
  var api = {};

  var model = mongoose.model("Prof");

  api.lista = function (req, res) {
    
    model.find().then(
      function (profs) {
        res.json(profs);
      },
      function (error) {
        console.log(error);
        res.sendStatus(500);
      }
    );
  };

  api.buscaPorId = function (req, res) {
    model.findById(req.params.id).then(
      function (prof) {
        if (!prof) {
          res.sendStatus(404);
        }
        res.json(prof);
      },
      function (error) {
        console.log(error);
        res.sendStatus(500);
      }
    );
  };

  api.removePorId = function (req, res) {
    model.remove({ _id: req.params.id }).then(
      function () {
        res.sendStatus(200);
      },
      function (error) {
        console.log(error);
        res.sendStatus(500);
      }
    );
  };

  api.adiciona = function (req, res) {
    model.create(req.body).then(
      function (prof) {
        res.json(prof);
      },
      function (error) {
        console.log("não conseguiu");
        console.log(error);
        res.sendStatus(500);
      }
    );
  };

  api.atualiza = function (req, res) {
    model.findByIdAndUpdate(req.params.id, req.body).then(
      function (novoProf) {
        res.json(novoProf);
      },
      function (error) {
        console.log(error);
        res.sendStatus(500);
      }
    );
  };

  return api;
};
