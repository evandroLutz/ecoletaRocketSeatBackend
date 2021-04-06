import request from 'supertest';

import { app } from '../server.point.mock';

describe('POST /users', () => {
    it('should responds with json', (done) => {
      request(app)
        .post('/points')
        .send({ 
            name: 'teste',
            email: 'teste@teste.com.br',
            whatsapp: '5199999999',
            latitude: 0,
            longitude: 0,
            city: 'Porto Alegre',
            uf: 'RS',
            items: [1,2]
        })
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
        
    });
});

describe('POST /users', () => {
    it('should responds with status 200', (done) => {
      request(app)
        .post('/points')
        .send({ 
            name: 'teste',
            email: 'teste@teste.com.br',
            whatsapp: '5199999999',
            latitude: 0,
            longitude: 0,
            city: 'Porto Alegre',
            uf: 'RS',
            items: [1,2]
        })
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
        
    });
});

describe('POST /users', () => {
    it('should return message não registrado', (done) => {
      request(app)
        .post('/points')
        .send({ 
            name: 'teste',
        })
        .expect(200, {
           error: 'não registrado'
          }, done);        
    });
});

