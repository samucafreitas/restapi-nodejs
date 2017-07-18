module.exports.select = (conn, callback) => {
  conn.query('SELECT * FROM contatos', callback);
}

module.exports.findById = (id, conn, callback) => {
  conn.query('SELECT * FROM contatos WHERE id=?', [id], callback);
}

module.exports.insert = (data, conn, callback) => {
  conn.query('INSERT INTO contatos set ?', data, callback);
}

module.exports.update = (id, data, conn, callback) => {
  conn.query('UPDATE contatos set ? WHERE id=?', [data, id], callback);
}

module.exports.delete = (id, conn, callback) => {
  conn.query('DELETE FROM contatos WHERE id=?', [id], callback);
}
