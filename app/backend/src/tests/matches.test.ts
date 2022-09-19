import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;


describe('Matches', () => {
  describe('getAll', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).get('/matches');
      expect(response.status).to.equal(200);
    });
    it('should return object', async () => {
      const response = await chai.request(app).get('/matches');
      expect(response.body).to.be.equal({ });
    });
  });
  describe('finishMatche', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).patch('/matches/:id/finish');
      expect(response.status).to.equal(200);
    });
    it('should return object', async () => {
      const response = await chai.request(app).patch('/matches/:id/finish');
      expect(response.body).to.be.equal({ });
    });
  });
  describe('editMatche', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).patch('/matches/:id');
      expect(response.status).to.equal(200);
    });
    it('should return object', async () => {
      const response = await chai.request(app).patch('/matches/:id');
      expect(response.body).to.be.equal({ });
    });
  });
  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
