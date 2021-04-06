import request from 'supertest';

import { app } from '../../src/server';

describe('get items', ()=>{
    it('should be able to get all items', async ()=>{
        const response = await request(app).get('/items');
        expect(response.status).toBe(200);
    });

    it('shoud be have JSON type',  async ()=>{
        const response = await request(app).get('/items');
        expect(response.type).toBe('application/json'); 
    });

    it('should body response than 0',  async ()=>{
        const response = await request(app).get('/items');
        expect(response.body.length).toBeGreaterThan(0); 
    });
    
});  