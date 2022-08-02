/*Angular verifica se as funções retornam informações cadastras com mensagem de sucesso ou de erro na aplicação*/
angular
  .module("meusServicos", ["ngResource"])
  .factory("recursoFoto", function ($resource) {
    return $resource("/v1/fotos/:fotoId", null, {
      update: {
        method: "PUT",
      },
    });
  })
  .factory("cadastroDeFotos", function (recursoFoto, $q) {
    var service = {};
    service.cadastrar = function (foto) {
      return $q(function (resolve, reject) {
        if (foto._id) {
          recursoFoto.update(
            { fotoId: foto._id },
            foto,
            function () {
              resolve({
                mensagem:
                  "Formulário de " + foto.titulo + " atualizado com sucesso",
                inclusao: false,
              });
            },
            function (erro) {
              console.log(erro);
              reject({
                mensagem:
                  "Não foi possível atualizar o formulário " + foto.titulo,
              });
            }
          );
        } else {
          recursoFoto.save(
            foto,
            function () {
              resolve({
                mensagem:
                  "Formulário de" + foto.titulo + " incluído com sucesso",
                inclusao: true,
              });
            },
            function (erro) {
              alert("Não Resolveu");
              reject({
                mensagem:
                  "Não foi possível incluir as informações no formulário" +
                  foto.titulo,
              });
            }
          );
        }
      });
    };
    return service;
  })
  .factory("recursoProf", function ($resource) {
    return $resource("/v1/profs/:profId", null, {
      update: {
        method: "PUT",
      },
    });
  })
  .factory("cadastroDeProfs", function (recursoProf, $q) {
    var service = {};
    service.cadastrar = function (prof) {
      return $q(function (resolve, reject) {
        if (prof._id) {
          recursoProf.update(
            { profId: prof._id },
            prof,
            function () {
              resolve({
                mensagem: "Prof " + prof.titulo + " atualizada com sucesso",
                inclusao: false,
              });
            },
            function (erro) {
              console.log(erro);
              reject({
                mensagem: "Não foi possível atualizar a prof " + prof.titulo,
              });
            }
          );
        } else {
          recursoProf.save(
            prof,
            function () {
              resolve({
                mensagem: "prof " + prof.titulo + " incluída com sucesso",
                inclusao: true,
              });
            },
            function (erro) {
              alert("Não Resolveu");
              reject({
                mensagem: "Não foi possível incluir a prof " + prof.titulo,
              });
            }
          );
        }
      });
    };
    return service;
  })
  .factory("recursoUsuario", function ($resource) {
    return $resource("/v1/usuarios/:usuarioId", null, {
      update: {
        method: "PUT",
      },
    });
  })
  .factory("cadastroDeUsuarios", function (recursoUsuario, $q) {
    var service = {};
    service.cadastrar = function (usuario) {
      return $q(function (resolve, reject) {
        recursoUsuario.save(
          usuario,
          function () {
            resolve({
              mensagem: "Usuário " + usuario.login + " incluído com sucesso",
              inclusao: true,
            });
          },
          function (erro) {
            console.log(erro);
            alert(erro);
            reject({
              mensagem: "Não foi possível incluir o usuário " + usuario.login,
            });
          }
        );
      });
    };
    return service;
  });
