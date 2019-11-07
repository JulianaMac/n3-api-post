const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {

  let contato = request.body
  let verificaContato = model.agenda.contatos
  
  verificaContato.forEach(novoContato => {

  if (novoContato.nome !== contato.nome){

  contato.id = Math.random().toString(36).substr(-8)

  model.agenda.contatos.push(contato);
  response.status(200).send(request.body)

  } else {
 console.log("Já existe esse nome")
  response.status(400).send(request.body)
  }
  })
};


module.exports = {
  getAll,
  add
}

