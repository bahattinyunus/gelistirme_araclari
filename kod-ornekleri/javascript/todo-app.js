/**
 * JavaScript Örnek: Todo Uygulaması
 * Yazılım Geliştirme Araçları Eğitimi - JavaScript Örneği
 * 
 * Bu örnek şunları gösterir:
 * - ES6+ özellikleri (arrow functions, destructuring, modules)
 * - Class yapısı
 * - LocalStorage kullanımı
 * - Event handling
 */

class TodoApp {
    constructor() {
        this.todos = this.loadFromStorage();
        this.nextId = this.todos.length > 0 
            ? Math.max(...this.todos.map(t => t.id)) + 1 
            : 1;
    }

    /**
     * Yeni görev ekler
     * @param {string} title - Görev başlığı
     * @returns {Object} Eklenen görev
     */
    addTodo(title) {
        if (!title || title.trim() === '') {
            throw new Error('Görev başlığı boş olamaz');
        }

        const newTodo = {
            id: this.nextId++,
            title: title.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.push(newTodo);
        this.saveToStorage();
        return newTodo;
    }

    /**
     * Görevi tamamlandı olarak işaretler
     * @param {number} id - Görev ID
     */
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
        }
    }

    /**
     * Görevi siler
     * @param {number} id - Görev ID
     */
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
    }

    /**
     * Tüm görevleri getirir
     * @param {boolean} filterCompleted - Sadece tamamlananları getir
     * @returns {Array} Görev listesi
     */
    getTodos(filterCompleted = null) {
        if (filterCompleted === null) {
            return this.todos;
        }
        return this.todos.filter(t => t.completed === filterCompleted);
    }

    /**
     * LocalStorage'a kaydeder
     */
    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    /**
     * LocalStorage'dan yükler
     * @returns {Array} Görev listesi
     */
    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    }

    /**
     * Tüm görevleri temizler
     */
    clearAll() {
        this.todos = [];
        this.nextId = 1;
        this.saveToStorage();
    }
}

// Kullanım örneği
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TodoApp;
} else {
    // Browser ortamında
    window.TodoApp = TodoApp;
}

