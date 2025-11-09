/**
 * Todo API Test Dosyası
 * 
 * Bu dosya, Jest kullanarak API endpoint'lerini test eder.
 * Test çalıştırmak için: npm test
 */

const request = require('supertest');
const app = require('../server');

describe('Todo API Testleri', () => {
    let testTodoId;

    // Tüm görevleri getir
    describe('GET /api/todos', () => {
        it('Tüm görevleri başarıyla getirmeli', async () => {
            const res = await request(app)
                .get('/api/todos')
                .expect(200);
            
            expect(res.body.success).toBe(true);
            expect(Array.isArray(res.body.data)).toBe(true);
        });
    });

    // Yeni görev ekle
    describe('POST /api/todos', () => {
        it('Yeni görev başarıyla eklenmeli', async () => {
            const newTodo = {
                title: 'Test görevi'
            };
            
            const res = await request(app)
                .post('/api/todos')
                .send(newTodo)
                .expect(201);
            
            expect(res.body.success).toBe(true);
            expect(res.body.data.title).toBe('Test görevi');
            expect(res.body.data.completed).toBe(false);
            
            testTodoId = res.body.data.id;
        });

        it('Boş başlık ile görev eklenmemeli', async () => {
            const res = await request(app)
                .post('/api/todos')
                .send({ title: '' })
                .expect(400);
            
            expect(res.body.success).toBe(false);
        });
    });

    // Tek görev getir
    describe('GET /api/todos/:id', () => {
        it('Var olan görevi başarıyla getirmeli', async () => {
            const res = await request(app)
                .get(`/api/todos/${testTodoId}`)
                .expect(200);
            
            expect(res.body.success).toBe(true);
            expect(res.body.data.id).toBe(testTodoId);
        });

        it('Var olmayan görev için 404 dönmeli', async () => {
            const res = await request(app)
                .get('/api/todos/99999')
                .expect(404);
            
            expect(res.body.success).toBe(false);
        });
    });

    // Görev güncelle
    describe('PUT /api/todos/:id', () => {
        it('Görev başlığını güncellemeli', async () => {
            const res = await request(app)
                .put(`/api/todos/${testTodoId}`)
                .send({ title: 'Güncellenmiş görev' })
                .expect(200);
            
            expect(res.body.success).toBe(true);
            expect(res.body.data.title).toBe('Güncellenmiş görev');
        });

        it('Görev durumunu tamamlandı olarak işaretlemeli', async () => {
            const res = await request(app)
                .put(`/api/todos/${testTodoId}`)
                .send({ completed: true })
                .expect(200);
            
            expect(res.body.success).toBe(true);
            expect(res.body.data.completed).toBe(true);
        });
    });

    // Görev sil
    describe('DELETE /api/todos/:id', () => {
        it('Görevi başarıyla silmeli', async () => {
            const res = await request(app)
                .delete(`/api/todos/${testTodoId}`)
                .expect(200);
            
            expect(res.body.success).toBe(true);
        });

        it('Var olmayan görev için 404 dönmeli', async () => {
            const res = await request(app)
                .delete('/api/todos/99999')
                .expect(404);
            
            expect(res.body.success).toBe(false);
        });
    });

    // Health check
    describe('GET /health', () => {
        it('Health check endpoint çalışmalı', async () => {
            const res = await request(app)
                .get('/health')
                .expect(200);
            
            expect(res.body.status).toBe('OK');
        });
    });
});

