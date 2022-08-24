import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import { Response } from 'superagent';
import Sinon = require('sinon');

chai.use(chaiHttp);

const { expect } = chai;


describe('Teams', () => {
  describe('getAll', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).get('/teams');
      expect(response.status).to.equal(200);
    });
    it('should return object', async () => {
      const response = await chai.request(app).get('/teams');
      expect(response.body).to.be.equal({ });
    });
  });
  describe('getById', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).get('/teams/:id');
      expect(response.status).to.equal(200);
    });
    it('should return object', async () => {
      const response = await chai.request(app).get('/teams/:id');
      expect(response.body).to.be.equal({ });
    });
  });
  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
