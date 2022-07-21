/* eslint-disable linebreak-style */
const {
  addBookHandlers,
  getAllBooksHandlers,
  getBookByIdHandlers,
  editBookByIdHandlers,
  deleteBookByIdHandlers,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandlers,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandlers,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandlers,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandlers,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandlers,
  },
];

module.exports = routes;
