import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;


describe('Leaderboard', () => {
  describe('getHomeMatches', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).get('/leaderboard/home');
      expect(response.status).to.equal(200);
    });
    it('should return object', async () => {
      const response = await chai.request(app).get('/leaderboard/home');
      expect(response.body).to.be.equal({ });
    });
  });
  describe('getAwayMatches', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).get('/leaderboard/away');
      expect(response.status).to.equal(200);
    });
    it('should return object', async () => {
      const response = await chai.request(app).get('/leaderboard/away');
      expect(response.body).to.be.equal({ });
    });
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
