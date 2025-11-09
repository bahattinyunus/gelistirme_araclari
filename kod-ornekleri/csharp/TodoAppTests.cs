/**
 * C# Test Örneği - xUnit kullanımı
 * Test çalıştırmak için: dotnet test
 */

using System;
using System.Collections.Generic;
using Xunit;

namespace TodoAppExample.Tests
{
    public class TodoAppTests
    {
        private TodoApp app;

        public TodoAppTests()
        {
            app = new TodoApp();
        }

        [Fact]
        public void AddTodo_ValidTitle_ReturnsTodo()
        {
            // Arrange & Act
            var todo = app.AddTodo("Test görevi");

            // Assert
            Assert.NotNull(todo);
            Assert.Equal("Test görevi", todo.Title);
            Assert.False(todo.Completed);
        }

        [Fact]
        public void AddTodo_EmptyTitle_ThrowsArgumentException()
        {
            // Arrange & Act & Assert
            Assert.Throws<ArgumentException>(() => app.AddTodo(""));
            Assert.Throws<ArgumentException>(() => app.AddTodo("   "));
        }

        [Fact]
        public void ToggleTodo_ValidId_TogglesCompleted()
        {
            // Arrange
            var todo = app.AddTodo("Test görevi");

            // Act
            var result = app.ToggleTodo(todo.Id);

            // Assert
            Assert.True(result);
            var todos = app.GetTodos();
            Assert.True(todos[0].Completed);
        }

        [Fact]
        public void DeleteTodo_ValidId_RemovesTodo()
        {
            // Arrange
            var todo = app.AddTodo("Test görevi");

            // Act
            var result = app.DeleteTodo(todo.Id);

            // Assert
            Assert.True(result);
            Assert.Equal(0, app.GetTodos().Count);
        }

        [Fact]
        public void GetCompletedTodos_ReturnsOnlyCompleted()
        {
            // Arrange
            app.AddTodo("Görev 1");
            app.AddTodo("Görev 2");
            app.ToggleTodo(1);

            // Act
            var completed = app.GetCompletedTodos();

            // Assert
            Assert.Single(completed);
            Assert.True(completed[0].Completed);
        }

        [Fact]
        public void GetActiveTodos_ReturnsOnlyActive()
        {
            // Arrange
            app.AddTodo("Görev 1");
            app.AddTodo("Görev 2");
            app.ToggleTodo(1);

            // Act
            var active = app.GetActiveTodos();

            // Assert
            Assert.Single(active);
            Assert.False(active[0].Completed);
        }

        [Fact]
        public void ClearAll_RemovesAllTodos()
        {
            // Arrange
            app.AddTodo("Görev 1");
            app.AddTodo("Görev 2");

            // Act
            app.ClearAll();

            // Assert
            Assert.Equal(0, app.GetTodos().Count);
        }
    }
}

