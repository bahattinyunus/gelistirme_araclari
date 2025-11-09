/**
 * Java Test Örneği - JUnit kullanımı
 * Test çalıştırmak için: mvn test veya IDE'den çalıştır
 */

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

@DisplayName("TodoApp Test Sınıfı")
class TodoAppTest {
    private TodoApp app;

    @BeforeEach
    void setUp() {
        app = new TodoApp();
    }

    @Test
    @DisplayName("Yeni görev eklenebilmeli")
    void testAddTodo() {
        Todo todo = app.addTodo("Test görevi");
        
        assertNotNull(todo);
        assertEquals("Test görevi", todo.getTitle());
        assertFalse(todo.isCompleted());
    }

    @Test
    @DisplayName("Boş başlık ile görev eklenmemeli")
    void testAddTodoWithEmptyTitle() {
        assertThrows(IllegalArgumentException.class, () -> {
            app.addTodo("");
        });
        
        assertThrows(IllegalArgumentException.class, () -> {
            app.addTodo("   ");
        });
    }

    @Test
    @DisplayName("Görev tamamlandı olarak işaretlenebilmeli")
    void testToggleTodo() {
        Todo todo = app.addTodo("Test görevi");
        boolean result = app.toggleTodo(todo.getId());
        
        assertTrue(result);
        List<Todo> todos = app.getTodos();
        assertTrue(todos.get(0).isCompleted());
    }

    @Test
    @DisplayName("Görev silinebilmeli")
    void testDeleteTodo() {
        Todo todo = app.addTodo("Test görevi");
        boolean result = app.deleteTodo(todo.getId());
        
        assertTrue(result);
        assertEquals(0, app.getTodos().size());
    }

    @Test
    @DisplayName("Tamamlanan görevler filtrelenebilmeli")
    void testGetCompletedTodos() {
        app.addTodo("Görev 1");
        app.addTodo("Görev 2");
        
        app.toggleTodo(1);
        
        List<Todo> completed = app.getCompletedTodos();
        assertEquals(1, completed.size());
        assertTrue(completed.get(0).isCompleted());
    }

    @Test
    @DisplayName("Aktif görevler filtrelenebilmeli")
    void testGetActiveTodos() {
        app.addTodo("Görev 1");
        app.addTodo("Görev 2");
        
        app.toggleTodo(1);
        
        List<Todo> active = app.getActiveTodos();
        assertEquals(1, active.size());
        assertFalse(active.get(0).isCompleted());
    }

    @Test
    @DisplayName("Tüm görevler temizlenebilmeli")
    void testClearAll() {
        app.addTodo("Görev 1");
        app.addTodo("Görev 2");
        
        app.clearAll();
        
        assertEquals(0, app.getTodos().size());
    }
}

