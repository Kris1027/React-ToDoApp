import { useRef, useState } from "react";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleAddTask = () => {
    const newTasks = [...tasks];
    newTasks.push({
      title: <h1>{titleRef.current.value}</h1>,
      description: <p>{descriptionRef.current.value}</p>,
      completed: false,
    });
    setTasks(newTasks);
  };

  const handleToggleTaskState = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const buttonStyle = {
    background: "black",
    color: "white",
    height: "2rem",
  };

  const inputStyle = {
    background: "gray",
    height: "5rem",
    width: "50%",
    margin: "0 auto",
    border: "none",
    fontSize: "2rem",
  };

  return (
    <div
      style={{
        background: "gray",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        width: "1024px",
        margin: "0 auto",
      }}
    >
      <h1>ToDo app by React</h1>
      <input
        style={inputStyle}
        type="text"
        id="title"
        placeholder="Add task"
        ref={titleRef}
      />
      <input
        style={inputStyle}
        type="text"
        id="title"
        placeholder="Task description"
        ref={descriptionRef}
      />
      <button style={buttonStyle} onClick={handleAddTask}>
        Add New Task
      </button>

      {tasks.length === 0 ? (
        <div>
          <h1>Empty Tasks List</h1>
        </div>
      ) : (
        <main>
          {tasks.map(({ title, description, completed }, index) => {
            return (
              <div
                key={index}
                style={{
                  border: ".1rem solid black",
                  margin: ".5rem",
                  textDecoration: completed ? "line-through" : "none",
                }}
              >
                {title}
                {description}
                <button
                  style={buttonStyle}
                  onClick={() => handleToggleTaskState(index)}
                >
                  {completed ? "Undo" : "Completed"}
                </button>
                <button
                  style={buttonStyle}
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </main>
      )}
    </div>
  );
}
