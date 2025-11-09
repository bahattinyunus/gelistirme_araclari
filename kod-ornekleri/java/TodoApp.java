/**
 * Java Örnek: Todo Uygulaması
 * Yazılım Geliştirme Araçları Eğitimi - Java Örneği
 * 
 * Bu örnek şunları gösterir:
 * - Java class yapısı
 * - ArrayList kullanımı
 * - Exception handling
 * - JavaDoc yorumları
 */

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class TodoApp {
    private List<Todo> todos;
    private int nextId;

    /**
     * Constructor - TodoApp nesnesini başlatır
     */
    public TodoApp() {
        this.todos = new ArrayList<>();
        this.nextId = 1;
    }

    /**
     * Yeni görev ekler
     * 
     * @param title Görev başlığı
     * @return Eklenen Todo nesnesi
     * @throws IllegalArgumentException Başlık boş ise
     */
    public Todo addTodo(String title) {
        if (title == null || title.trim().isEmpty()) {
            throw new IllegalArgumentException("Görev başlığı boş olamaz");
        }

        Todo newTodo = new Todo(nextId++, title.trim());
        todos.add(newTodo);
        return newTodo;
    }

    /**
     * Görevi tamamlandı olarak işaretler
     * 
     * @param id Görev ID
     * @return İşlem başarılı ise true
     */
    public boolean toggleTodo(int id) {
        Todo todo = findTodoById(id);
        if (todo != null) {
            todo.setCompleted(!todo.isCompleted());
            return true;
        }
        return false;
    }

    /**
     * Görevi siler
     * 
     * @param id Görev ID
     * @return İşlem başarılı ise true
     */
    public boolean deleteTodo(int id) {
        return todos.removeIf(todo -> todo.getId() == id);
    }

    /**
     * Tüm görevleri getirir
     * 
     * @return Görev listesi
     */
    public List<Todo> getTodos() {
        return new ArrayList<>(todos);
    }

    /**
     * Tamamlanan görevleri getirir
     * 
     * @return Tamamlanan görev listesi
     */
    public List<Todo> getCompletedTodos() {
        return todos.stream()
                .filter(Todo::isCompleted)
                .collect(Collectors.toList());
    }

    /**
     * Aktif görevleri getirir
     * 
     * @return Aktif görev listesi
     */
    public List<Todo> getActiveTodos() {
        return todos.stream()
                .filter(todo -> !todo.isCompleted())
                .collect(Collectors.toList());
    }

    /**
     * ID'ye göre görev bulur
     * 
     * @param id Görev ID
     * @return Bulunan Todo nesnesi veya null
     */
    private Todo findTodoById(int id) {
        return todos.stream()
                .filter(todo -> todo.getId() == id)
                .findFirst()
                .orElse(null);
    }

    /**
     * Tüm görevleri temizler
     */
    public void clearAll() {
        todos.clear();
        nextId = 1;
    }

    /**
     * Ana metod - Örnek kullanım
     */
    public static void main(String[] args) {
        TodoApp app = new TodoApp();
        
        // Örnek görevler ekle
        app.addTodo("Java öğren");
        app.addTodo("Test yaz");
        
        // Görevleri listele
        System.out.println("Tüm görevler:");
        app.getTodos().forEach(System.out::println);
        
        // İlk görevi tamamla
        app.toggleTodo(1);
        
        System.out.println("\nTamamlanan görevler:");
        app.getCompletedTodos().forEach(System.out::println);
    }
}

/**
 * Todo sınıfı - Görev bilgilerini tutar
 */
class Todo {
    private int id;
    private String title;
    private boolean completed;
    private String createdAt;

    public Todo(int id, String title) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.createdAt = java.time.LocalDateTime.now().toString();
    }

    // Getter ve Setter metodları
    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    @Override
    public String toString() {
        return String.format("Todo{id=%d, title='%s', completed=%s}", 
                id, title, completed);
    }
}

