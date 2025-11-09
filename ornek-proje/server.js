/**
 * Todo Uygulaması - Backend API
 * 
 * Bu dosya, yazılım geliştirme araçlarının kullanımını
 * göstermek için oluşturulmuş örnek bir Express.js API'sidir.
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static dosyaları serve et (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Basit in-memory veritabanı (gerçek projede veritabanı kullanılır)
let todos = [
  { id: 1, title: 'Örnek görev 1', completed: false, createdAt: new Date() },
  { id: 2, title: 'Örnek görev 2', completed: true, createdAt: new Date() }
];
let nextId = 3;

// Tüm görevleri getir
app.get('/api/todos', (req, res) => {
  res.json({
    success: true,
    data: todos,
    count: todos.length
  });
});

// Tek bir görevi getir
app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: 'Görev bulunamadı'
    });
  }
  
  res.json({
    success: true,
    data: todo
  });
});

// Yeni görev ekle
app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Görev başlığı gereklidir'
    });
  }
  
  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date()
  };
  
  todos.push(newTodo);
  
  res.status(201).json({
    success: true,
    message: 'Görev başarıyla eklendi',
    data: newTodo
  });
});

// Görevi güncelle
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Görev bulunamadı'
    });
  }
  
  if (title !== undefined) {
    todos[todoIndex].title = title.trim();
  }
  
  if (completed !== undefined) {
    todos[todoIndex].completed = Boolean(completed);
  }
  
  res.json({
    success: true,
    message: 'Görev başarıyla güncellendi',
    data: todos[todoIndex]
  });
});

// Görevi sil
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Görev bulunamadı'
    });
  }
  
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  
  res.json({
    success: true,
    message: 'Görev başarıyla silindi',
    data: deletedTodo
  });
});

// Tüm tamamlanmış görevleri sil
app.delete('/api/todos', (req, res) => {
  const initialCount = todos.length;
  todos = todos.filter(t => !t.completed);
  const deletedCount = initialCount - todos.length;
  
  res.json({
    success: true,
    message: `${deletedCount} tamamlanmış görev silindi`,
    deletedCount
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint bulunamadı'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Hata:', err);
  res.status(500).json({
    success: false,
    message: 'Sunucu hatası',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 Todo API sunucusu ${PORT} portunda çalışıyor`);
  console.log(`📍 http://localhost:${PORT}/api/todos`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;

