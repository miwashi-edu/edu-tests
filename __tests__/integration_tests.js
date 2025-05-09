/**
 * @group integration
 */

const request = require('supertest');
const baseURL = 'http://localhost:3000'; // URL where your app is running

describe('Book API Integration Tests Over HTTP', () => {
  it('should list all books', async () => {
    const res = await request(baseURL).get('/books');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should retrieve a book by ID', async () => {
    const res = await request(baseURL).get('/books/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should create a new book', async () => {
    const bookData = { title: "New Book", author: "New Author" };
    const res = await request(baseURL)
        .post('/books')
        .send(bookData);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', bookData.title);
  });

  it('should update an existing book', async () => {
    const updatedData = { title: "Updated Title", author: "Updated Author" };
    const res = await request(baseURL)
        .put('/books/1')
        .send(updatedData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', updatedData.title);
  });

  it('should delete a book', async () => {
    const res = await request(baseURL).delete('/books/1');
    expect(res.statusCode).toEqual(200);
  });
});

