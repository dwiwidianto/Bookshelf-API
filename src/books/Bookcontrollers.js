const { nanoid } = require('nanoid');
const books = require('./books');

/* Tambah Buku */
const addBookController = (request, h) => {
  // eslint-disable-next-line object-curly-newline
  const { name, year, author, summary, pageCount, readPage, reading } = request.payload;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (name === undefined) {
    return h
      .response({
        status: 'fail',
        message: 'gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
  }

  if (request.payload.readPage > request.payload.pageCount) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  }

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

/* End Tambah Buku  */

/* Tampilkan Semua Buku  */
const getAllBookControllers = () => ({
  status: 'success',
  data: {
    books,
  },
});

/* End Tampilkan Semua Buku */

const getBookByIdControllers = (request, h) => {
  const { id } = request.params;

  const book = books.filter((n) => n.id === id)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { addBookController, getAllBookControllers, getBookByIdControllers };
