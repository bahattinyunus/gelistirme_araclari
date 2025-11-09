/**
 * C# Örnek: Todo Uygulaması
 * Yazılım Geliştirme Araçları Eğitimi - C# Örneği
 * 
 * Bu örnek şunları gösterir:
 * - C# class yapısı
 * - List<T> kullanımı
 * - LINQ sorguları
 * - Properties
 * - Exception handling
 */

using System;
using System.Collections.Generic;
using System.Linq;

namespace TodoAppExample
{
    /// <summary>
    /// Todo sınıfı - Görev bilgilerini tutar
    /// </summary>
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool Completed { get; set; }
        public DateTime CreatedAt { get; set; }

        public Todo(int id, string title)
        {
            Id = id;
            Title = title;
            Completed = false;
            CreatedAt = DateTime.Now;
        }

        public override string ToString()
        {
            return $"Todo{{Id={Id}, Title='{Title}', Completed={Completed}}}";
        }
    }

    /// <summary>
    /// TodoApp sınıfı - Görev yönetimi işlemlerini yapar
    /// </summary>
    public class TodoApp
    {
        private List<Todo> todos;
        private int nextId;

        /// <summary>
        /// Constructor - TodoApp nesnesini başlatır
        /// </summary>
        public TodoApp()
        {
            todos = new List<Todo>();
            nextId = 1;
        }

        /// <summary>
        /// Yeni görev ekler
        /// </summary>
        /// <param name="title">Görev başlığı</param>
        /// <returns>Eklenen Todo nesnesi</returns>
        /// <exception cref="ArgumentException">Başlık boş ise</exception>
        public Todo AddTodo(string title)
        {
            if (string.IsNullOrWhiteSpace(title))
            {
                throw new ArgumentException("Görev başlığı boş olamaz", nameof(title));
            }

            var newTodo = new Todo(nextId++, title.Trim());
            todos.Add(newTodo);
            return newTodo;
        }

        /// <summary>
        /// Görevi tamamlandı olarak işaretler
        /// </summary>
        /// <param name="id">Görev ID</param>
        /// <returns>İşlem başarılı ise true</returns>
        public bool ToggleTodo(int id)
        {
            var todo = FindTodoById(id);
            if (todo != null)
            {
                todo.Completed = !todo.Completed;
                return true;
            }
            return false;
        }

        /// <summary>
        /// Görevi siler
        /// </summary>
        /// <param name="id">Görev ID</param>
        /// <returns>İşlem başarılı ise true</returns>
        public bool DeleteTodo(int id)
        {
            var todo = FindTodoById(id);
            if (todo != null)
            {
                todos.Remove(todo);
                return true;
            }
            return false;
        }

        /// <summary>
        /// Tüm görevleri getirir
        /// </summary>
        /// <returns>Görev listesi</returns>
        public List<Todo> GetTodos()
        {
            return new List<Todo>(todos);
        }

        /// <summary>
        /// Tamamlanan görevleri getirir
        /// </summary>
        /// <returns>Tamamlanan görev listesi</returns>
        public List<Todo> GetCompletedTodos()
        {
            return todos.Where(t => t.Completed).ToList();
        }

        /// <summary>
        /// Aktif görevleri getirir
        /// </summary>
        /// <returns>Aktif görev listesi</returns>
        public List<Todo> GetActiveTodos()
        {
            return todos.Where(t => !t.Completed).ToList();
        }

        /// <summary>
        /// ID'ye göre görev bulur
        /// </summary>
        /// <param name="id">Görev ID</param>
        /// <returns>Bulunan Todo nesnesi veya null</returns>
        private Todo FindTodoById(int id)
        {
            return todos.FirstOrDefault(t => t.Id == id);
        }

        /// <summary>
        /// Tüm görevleri temizler
        /// </summary>
        public void ClearAll()
        {
            todos.Clear();
            nextId = 1;
        }

        /// <summary>
        /// Ana metod - Örnek kullanım
        /// </summary>
        public static void Main(string[] args)
        {
            var app = new TodoApp();

            // Örnek görevler ekle
            app.AddTodo("C# öğren");
            app.AddTodo("Test yaz");

            // Görevleri listele
            Console.WriteLine("Tüm görevler:");
            foreach (var todo in app.GetTodos())
            {
                Console.WriteLine(todo);
            }

            // İlk görevi tamamla
            app.ToggleTodo(1);

            Console.WriteLine("\nTamamlanan görevler:");
            foreach (var todo in app.GetCompletedTodos())
            {
                Console.WriteLine(todo);
            }
        }
    }
}

