/**
 * @group consumer
 */

const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('Book API Consumer Tests', () => {
  describe('Contract for /books', () => {
    it('should return a list of books with the expected properties', async () => {
      const response = await request(baseURL).get('/books');
      expect(response.statusCode).toEqual(200);
      expect(response.body).toBeInstanceOf(Array);
      if (response.body.length > 0) {
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('title');
        expect(response.body[0]).toHaveProperty('author');
      }
    });

    it('should create a book and return the created book with expected properties', async () => {
      const bookData = { title: "Consumer Test Book", author: "Author Test" };
      const response = await request(baseURL)
          .post('/books')
          .send(bookData);
      expect(response.statusCode).toEqual(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('title', bookData.title);
      expect(response.body).toHaveProperty('author', bookData.author);
    });
  });

  describe('Contract for /books/:bookId', () => {
    it('should retrieve a book by ID and return the correct fields', async () => {
      const postResponse = await request(baseURL)
          .post('/books')
          .send({ title: "New Book", author: "New Author" });
      const bookId = postResponse.body.id;
      const getResponse = await request(baseURL).get(`/books/${bookId}`);
      expect(getResponse.statusCode).toEqual(200);
      expect(getResponse.body).toHaveProperty('id', bookId);
      expect(getResponse.body).toHaveProperty('title');
      expect(getResponse.body).toHaveProperty('author');
    });

    it('should correctly handle a request for a non-existent book', async () => {
      const response = await request(baseURL).get('/books/9999'); // Assuming 9999 does not exist
      expect(response.statusCode).toEqual(404);
    });
  });
});

