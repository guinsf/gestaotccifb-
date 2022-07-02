var mongoose = require("mongoose");

module.exports = function (app) {
  var api = {};

  var model = mongoose.model("Prof");

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

//   api.buscaPorId = function (req, res) {
//     model.findById(req.params.id).then(
//       function (prof) {
//         if (!prof) {
//           res.sendStatus(404);
//         }
//         // if (!prof) throw new Error("prof não encontrada");
//         res.json(prof);
//       },
//       function (error) {
//         console.log(error);
//         res.sendStatus(500);
//       }
//     );
//   };

  return api;
};