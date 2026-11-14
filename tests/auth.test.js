const request = require('supertest');
const app = require('../src/server');
describe('Auth API - .edu Email Verification', () => {
  it('should successfully register a valid .edu email', async () => {
    const res = await request(app).post('/api/auth/register').send({ email: 'student@university.edu', name: 'Colin Bleile' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.user.verified).toBe(true);
  });
  it('should reject non-.edu emails', async () => {
    const res = await request(app).post('/api/auth/register').send({ email: 'student@gmail.com', name: 'Hacker' });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toContain('Only .edu');
  });
});
