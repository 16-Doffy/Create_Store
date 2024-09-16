import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;

    onSubmit({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
