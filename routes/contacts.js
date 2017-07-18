module.exports = (router, cc) => {
  router.route('/contacts')
    .get(cc.list)
    .post(cc.addContact);

  router.route('/contacts/:id')
    .get(cc.getContact)
    .put(cc.updateContact)
    .delete(cc.deleteContact);
}
