var mongoose = require("mongoose");

module.exports = function (app) {
  var api = {};

  var model = mongoose.model("Foto");
  var modelProf = mongoose.model("Prof");
  /*Listando alunos cadastrados */
  api.lista = function (req, res) {
    model.find({}).then(
      function (fotos) {
        res.json(fotos);
      },
      function (error) {
        console.log(error);
        res.sendStatus(500);
      }
    );
  };
/*Realizando a busca de alunos cadastrados por id */
  api.buscaPorId = function (req, res) {
    model.findById(req.params.id).then(
      function (foto) {
        if (!foto) throw new Error("Foto não encontrada");
        res.json(foto);
      },
      function (error) {
        console.log(error);
        res.sendStatus(500);
      }
    );
  };
/*Removendo alunos cadastrados por id */
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
/*Adicionando todas infos de alunos cadastrados por id */
  api.adiciona = function (req, res) {
    const promise = async () => {
      const response = await modelProf.findById(req.body.orientador);
      try {
        await model.create({
          titulo: req.body.titulo,
          nome: req.body.nome,
          email: req.body.email,
          telefone: req.body.telefone,
          url: req.body.url,
          descricao: req.body.descricao,
          grupo: req.body.grupo,
          orientador: response._doc,
        });
        res.sendStatus(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    };
    promise();
  };
/*Editando todas infos de alunos cadastrados por id */
  api.atualiza = function (req, res) {
    const promise = async () => {
      const response = await modelProf.findById(req.body.orientador);
      try {
        await model.findByIdAndUpdate(req.params.id, {
          titulo: req.body.titulo,
          nome: req.body.nome,
          email: req.body.email,
          telefone: req.body.telefone,
          url: req.body.url,
          descricao: req.body.descricao,
          grupo: req.body.grupo,
          orientador: response._doc,
        });
        res.sendStatus(200);
      } catch (error) {
        console.log(e);
        res.sendStatus(500);
      }
    };
    promise();
  };

  return api;
};
