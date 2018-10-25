import iconv from 'iconv-lite';

import encodings from 'iconv-lite/encodings';

const request = require('supertest');
const server = require('../server/index');

iconv.encodings = encodings;

describe('Testing whether or not path is connecting', () => {
  it('should GET response request 200', async () => {
    const response = await request(server).get('/shoedidas/product/details');
    expect(response.statusCode).toBe(200);
  });
});
