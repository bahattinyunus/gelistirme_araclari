/**
 * Todo Uygulaması - Frontend JavaScript
 * 
 * Bu dosya, API ile iletişim kuran frontend kodunu içerir.
 */

const API_BASE_URL = 'http://localhost:3000/api';

// DOM elementleri
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const todoCount = document.getElementById('todoCount');
const errorMessage = document.getElementById('errorMessage');

// Sayfa yüklendiğinde görevleri getir
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    
    // Enter tuşu ile görev ekleme
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    addBtn.addEventListener('click', addTodo);
    clearCompletedBtn.addEventListener('click', clearCompleted);
});

// Tüm görevleri yükle
async function loadTodos() {
    try {
        const response = await fetch(`${API_BASE_URL}/todos`);
        const result = await response.json();
        
        if (result.success) {
            renderTodos(result.data);
            updateTodoCount(result.data);
        } else {
            showError('Görevler yüklenirken bir hata oluştu');
        }
    } catch (error) {
        showError('API bağlantı hatası: ' + error.message);
        console.error('Hata:', error);
    }
}

// Görevleri ekrana render et
function renderTodos(todos) {
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        todoList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Henüz görev eklenmemiş</p>';
        return;
    }
    
    todos.forEach(todo => {
        const todoItem = createTodoElement(todo);
        todoList.appendChild(todoItem);
    });
}

// Todo elementi oluştur
function createTodoElement(todo) {
    const div = document.createElement('div');
    div.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    div.dataset.id = todo.id;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));
    
    const title = document.createElement('span');
    title.className = 'todo-title';
    title.textContent = todo.title;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-delete';
    deleteBtn.textContent = 'Sil';
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
    
    div.appendChild(checkbox);
    div.appendChild(title);
    div.appendChild(deleteBtn);
    
    return div;
}

// Yeni görev ekle
async function addTodo() {
    const title = todoInput.value.trim();
    
    if (!title) {
        showError('Lütfen bir görev başlığı girin');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        
        const result = await response.json();
        
        if (result.success) {
            todoInput.value = '';
            hideError();
            loadTodos();
        } else {
            showError(result.message || 'Görev eklenirken bir hata oluştu');
        }
    } catch (error) {
        showError('API bağlantı hatası: ' + error.message);
        console.error('Hata:', error);
    }
}

// Görev durumunu değiştir (tamamlandı/tamamlanmadı)
async function toggleTodo(id) {
    try {
        const todoItem = document.querySelector(`[data-id="${id}"]`);
        const isCompleted = todoItem.classList.contains('completed');
        
        const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: !isCompleted })
        });
        
        const result = await response.json();
        
        if (result.success) {
            loadTodos();
        } else {
            showError(result.message || 'Görev güncellenirken bir hata oluştu');
        }
    } catch (error) {
        showError('API bağlantı hatası: ' + error.message);
        console.error('Hata:', error);
    }
}

// Görev sil
async function deleteTodo(id) {
    if (!confirm('Bu görevi silmek istediğinize emin misiniz?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
            method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
            loadTodos();
        } else {
            showError(result.message || 'Görev silinirken bir hata oluştu');
        }
    } catch (error) {
        showError('API bağlantı hatası: ' + error.message);
        console.error('Hata:', error);
    }
}

// Tamamlanan görevleri temizle
async function clearCompleted() {
    if (!confirm('Tüm tamamlanmış görevleri silmek istediğinize emin misiniz?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/todos`, {
            method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
            loadTodos();
        } else {
            showError(result.message || 'Görevler temizlenirken bir hata oluştu');
        }
    } catch (error) {
        showError('API bağlantı hatası: ' + error.message);
        console.error('Hata:', error);
    }
}

// Görev sayısını güncelle
function updateTodoCount(todos) {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const remaining = total - completed;
    
    todoCount.textContent = `${remaining} aktif, ${completed} tamamlanmış (Toplam: ${total})`;
}

// Hata mesajı göster
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Hata mesajını gizle
function hideError() {
    errorMessage.style.display = 'none';
}

