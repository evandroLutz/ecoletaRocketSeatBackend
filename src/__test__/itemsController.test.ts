import request from 'supertest';

import express from 'express';
import routes from '../routes';
import cors from 'cors';

import path from 'path';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads' )));


let server = app.listen(3000);


describe('get items', ()=>{
    it('should be able to get all items', async ()=>{
        const response = await request(server).get('/items');
        expect(response.status).toBe(200);
        server.close();
    });

    it('shoud be have JSON type',  async ()=>{
        const response = await request(server).get('/items');
        expect(response.type).toBe('application/json'); 
        server.close();
    });

    it('should body response than 0',  async ()=>{
        const response = await request(server).get('/items');
        expect(response.body.length).toBeGreaterThan(0); 
        server.close();
    });
    
});  