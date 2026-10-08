import './toStyle.css';

import React from 'react';
import EachToDo from './EachToDo';

function ToDOList() {
  const [toDos, setToDos] = React.useState([
    {desc: 'Task 1', completed: false, id: crypto.randomUUID()},
    {desc: 'Task 2', completed: true, id: crypto.randomUUID()},
    {desc: 'Task 3', completed: false, id: crypto.randomUUID()},
  ]);

  const [newToDo, setNewToDo] = React.useState('');

  function addTheTodo() {
    if (newToDo.trim() === '') {
      console.log('empty');
      return;
    }
    //below one does not work as expected
    //setToDos([...toDos, { key: toDos.length + 1, desc: newToDo, completed: false, id: crypto.randomUUID }]);
    setToDos((currentToDos) => [
      ...currentToDos,
      {desc: newToDo, completed: false, id: crypto.randomUUID()},
    ]);
    setNewToDo('');
  }

  function deleteToDoFunction(id) {
    console.log('Delete function called for id:', id);
    setToDos((currentToDos) => currentToDos.filter((todo) => todo.id !== id));
  }

  function toggleToDo(id, status) {
    console.log('Todo toggle clicked', id, status);

    setToDos((allToDos) =>
      allToDos.map((eachToDo) =>
        eachToDo.id === id
          ? {...eachToDo, completed: !eachToDo.completed}
          : eachToDo,
      ),
    );
  }
  return (
    <section className="todo-app">
      <header className="todo-header">
        <p>Stay organized</p>
        <h2>My To-Do List</h2>
      </header>
      <ul id="list">
        {toDos.map((todo) => (
          <EachToDo
            key={todo.id}
            {...todo}
            status={todo.completed}
            deleteToDo={deleteToDoFunction}
            toggleToDo={toggleToDo}
          />
        ))}
        {toDos.length === 0 && <li className="empty-list">No tasks yet.</li>}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <div className="todo-input-row">
          <input
            type="text"
            id="todo-input"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
          />
          <button onClick={addTheTodo}>Add Todo</button>
        </div>
      </div>
    </section>
  );
}

export default ToDOList;
