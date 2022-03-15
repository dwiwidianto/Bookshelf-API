const {
  // eslint-disable-next-line max-len
  addBookController, getAllBookControllers, getBookByIdControllers, editBookByIdControllers, deleteBookByIdController,
} = require('./books/Bookcontrollers');

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
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdControllers,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdController,
  },
];

module.exports = routes;
