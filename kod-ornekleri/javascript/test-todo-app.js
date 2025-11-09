/**
 * JavaScript Test Örneği - Jest kullanımı
 * Test çalıştırmak için: npm test
 */

// Node.js ortamı için localStorage mock'u
class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = String(value);
    }

    removeItem(key) {
        delete this.store[key];
    }
}

global.localStorage = new LocalStorageMock();

const TodoApp = require('./todo-app.js');

describe('TodoApp', () => {
    let app;

    beforeEach(() => {
        localStorage.clear();
        app = new TodoApp();
    });

    test('Yeni görev eklenebilmeli', () => {
        const todo = app.addTodo('Test görevi');
        expect(todo.title).toBe('Test görevi');
        expect(todo.completed).toBe(false);
        expect(todo.id).toBeDefined();
    });

    test('Boş başlık ile görev eklenmemeli', () => {
        expect(() => app.addTodo('')).toThrow('Görev başlığı boş olamaz');
        expect(() => app.addTodo('   ')).toThrow('Görev başlığı boş olamaz');
    });

    test('Görev tamamlandı olarak işaretlenebilmeli', () => {
        const todo = app.addTodo('Test görevi');
        app.toggleTodo(todo.id);
        
        const updatedTodo = app.getTodos().find(t => t.id === todo.id);
        expect(updatedTodo.completed).toBe(true);
    });

    test('Görev silinebilmeli', () => {
        const todo = app.addTodo('Test görevi');
        app.deleteTodo(todo.id);
        
        expect(app.getTodos().length).toBe(0);
    });

    test('Tamamlanan görevler filtrelenebilmeli', () => {
        app.addTodo('Görev 1');
        app.addTodo('Görev 2');
        
        const todo1 = app.getTodos()[0];
        app.toggleTodo(todo1.id);
        
        const completed = app.getTodos(true);
        expect(completed.length).toBe(1);
        expect(completed[0].completed).toBe(true);
    });

    test('LocalStorage\'a kaydedilmeli', () => {
        app.addTodo('Test görevi');
        const stored = JSON.parse(localStorage.getItem('todos'));
        expect(stored.length).toBe(1);
        expect(stored[0].title).toBe('Test görevi');
    });
});

