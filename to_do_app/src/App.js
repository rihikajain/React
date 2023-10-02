// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [taskText, setTaskText] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleAddTask = () => {
//     if (taskText.trim() !== '') {
//       if (editingIndex !== null) {
//         const updatedTasks = [...tasks];
//         updatedTasks[editingIndex].text = taskText;
//         setTasks(updatedTasks);
//         setEditingIndex(null);
//       } else {
//         setTasks([...tasks, { text: taskText, done: false, cancelled: false }]);
//       }
//       setTaskText('');
//     }
//   };

//   const handleEditTask = (index) => {
//     setTaskText(tasks[index].text);
//     setEditingIndex(index);
//   };

//   const handleRemoveTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const handleToggleTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].done = !updatedTasks[index].done;
//     updatedTasks[index].cancelled = false; // Reset cancelled state
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <div className="background" />
//       <h1>To-Do List</h1>
//       <div className="task-input">
//         <input
//           type="text"
//           placeholder="Add a new task..."
//           value={taskText}
//           onChange={(e) => setTaskText(e.target.value)}
//         />
//         <button onClick={handleAddTask}>{editingIndex !== null ? 'Update' : 'Add'}</button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             className={task.done ? 'task-done' : task.cancelled ? 'task-cancelled' : ''}
//           >
//             <span
//               style={{
//                 textDecoration: task.done ? 'line-through' : 'none',
//                 color: task.cancelled ? 'white' : 'black',
//                 backgroundColor: task.cancelled ? 'red' : task.done ? 'transparent' : '',
//               }}
//             >
//               {task.text}
//             </span>
//             <div>
//               <button onClick={() => handleEditTask(index)}>Edit</button>
//               <button onClick={() => handleToggleTask(index)}>
//                 {task.done ? 'Cancel' : 'Done'}
//               </button>
//               <button onClick={() => handleRemoveTask(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [taskCount, setTaskCount] = useState(tasks.length);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      if (editingIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex].text = taskText;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, { text: taskText, done: false, cancelled: false }]);
      }
      setTaskText('');
      setTaskCount(taskCount + 1); // Increment task count on add
    }
  };

  const handleEditTask = (index) => {
    setTaskText(tasks[index].text);
    setEditingIndex(index);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setTaskCount(taskCount - 1); // Decrement task count on remove
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    updatedTasks[index].cancelled = false; // Reset cancelled state

    // Update the task count based on the number of tasks not marked as done
    const updatedTaskCount = updatedTasks.filter((task) => !task.done).length;
    setTasks(updatedTasks);
    setTaskCount(updatedTaskCount);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="App">
      <div className="background" />
      <div className="heading-container">
        <h1>To-Do List</h1>
        <div className="task-count">{taskCount} tasks</div>
      </div>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyPress={handleInputKeyPress}
        />
        <button onClick={handleAddTask}>{editingIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.done ? 'task-done' : task.cancelled ? 'task-cancelled' : ''}
          >
            <span
              style={{
                textDecoration: task.done ? 'line-through' : 'none',
                color: task.cancelled ? 'white' : 'black',
                backgroundColor: task.cancelled ? 'red' : task.done ? 'transparent' : '',
              }}
            >
              {task.text}
            </span>
            <div>
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleToggleTask(index)}>
                {task.done ? 'Cancel' : 'Done'}
              </button>
              <button onClick={() => handleRemoveTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
