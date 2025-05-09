/**
 * @group component
 */

const request = require('supertest');
const app = require('../src/server.js');  // Adjust the path to where your Express app is exported

describe('Book API', () => {
  describe('GET /books', () => {
    it('should list all books', async () => {
      const res = await request(app).get('/books');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /books/:bookId', () => {
    it('should retrieve a book by ID', async () => {
      const res = await request(app).get('/books/1');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('id', 1);
    });

    it('should return 404 for non-existing book', async () => {
      const res = await request(app).get('/books/999');
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('POST /books', () => {
    it('should create a new book', async () => {
      const newBook = {
        title: "New Book",
        author: "Author Test"
      };
      const res = await request(app)
          .post('/books')
          .send(newBook);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
    });
  });

  describe('PUT /books/:bookId', () => {
    it('should update an existing book', async () => {
      const updatedData = {
        title: "Updated Book",
        author: "Updated Author"
      };
      const res = await request(app)
          .put('/books/1')
          .send(updatedData);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('title', "Updated Book");
    });

    it('should return 404 for updating non-existing book', async () => {
      const res = await request(app)
          .put('/books/999')
          .send({title: "Test"});
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('DELETE /books/:bookId', () => {
    it('should delete a book', async () => {
      const res = await request(app).delete('/books/1');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('id', 1);
    });

    it('should return 404 when deleting non-existing book', async () => {
      const res = await request(app).delete('/books/999');
      expect(res.statusCode).toEqual(404);
    });
  });
});
