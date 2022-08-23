import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import IUser from '../interfaces/IUser';
import { Response } from 'superagent';
import Sinon = require('sinon');
import Users from '../database/models/user.Model';

chai.use(chaiHttp);

const { expect } = chai;


describe('User', () => {
  describe('login', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app).post('/login');
      expect(response.status).to.equal(200);
    });
    it('should return token', async () => {
      const response = await chai.request(app).post('/login');
      expect(response.body).to.be.equal({ });
    });
  });
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
