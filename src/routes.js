const { addBookController, getAllBookControllers, getBookByIdControllers } = require('./books/Bookcontrollers');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookController,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookControllers,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdControllers,
  },
];

module.exports = routes;
