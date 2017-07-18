var contactsDAO = require('../models/DAO/contactsDAO');

module.exports.list = (req, res, next) => {
  req.getConnection((err, conn) => {
    if (err) return next(err);
    
    contactsDAO.select(conn, (err, results) => {
      if (err) return next(err);
      res.send(results); 
    });
  });
}

module.exports.addContact = (req, res, next) => {
  reqValidate(req, function(result) {
    if (!result.isEmpty()) {
      res.status(422).send(result.mapped());
      return;
    }
  });
  
  data = getAttr(req); 

  req.getConnection((err, conn) => {
    if (err) return next(err);
   
    contactsDAO.insert(data, conn, (err, results) => {
      if (err) return next(err);
      res.send(results); 
    });
  });
}

module.exports.getContact = (req, res, next) => {
  contactId = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return next(err);
    
    contactsDAO.findById(contactId, conn, (err, results) => {
      if (err) return next(err);
      res.send(results); 
    });
  });
}

module.exports.updateContact = (req, res, next) => {
  contactId = req.params.id;

  reqValidate(req, function(result) {
    if (!result.isEmpty()) {
      res.status(422).send(result.mapped());
      return;
    }
  });
  
  data = getAttr(req);

  req.getConnection((err, conn) => {
    if (err) return next(err);
    
    contactsDAO.update(contactId, data, conn, (err, results) => {
      if (err) return next(err);
      res.send('OK\n'); 
    });
  });
}

module.exports.deleteContact = (req, res, next) => {
  contactId = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return next(err);
    
    contactsDAO.delete(contactId, conn, (err, results) => {
      if (err) return next(err);
      res.send('OK\n'); 
    });
  });
}

function reqValidate(req, callback) {
  //validation
  req.assert('nome', 'Nome precisa ser informado').notEmpty();
  req.assert('endereco', 'Endereco precisa ser informado').notEmpty();
  req.assert('telefone', 'Telefone precisa ser informado').notEmpty();

  req.getValidationResult().then(callback);
} 

function getAttr(req) {
  //get attr
  data = {
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone
  };

  return data;
}
