var mongoose = require("mongoose");

module.exports = function (app) {
  var api = {};

  var model = mongoose.model("Usuario");

  api.adiciona = function (req, res) {
    const promise = async () => {
      try {
        await model.create({
          login: req.body.login,
          senha: req.body.senha,
        });
        res.sendStatus(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    };
    promise();
  };

  return api;
};