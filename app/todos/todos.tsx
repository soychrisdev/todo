import React from 'react'
import sleep from 'sleep-promise';

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { next: { revalidate: 10 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  // const data = await res.json()
  // console.log(data)
  await sleep(4000);

  return res.json()
}

export default async function TodoList() {
  // console.log(fetchTodos)
  const todos = await fetchTodos()
  console.log(todos)
  return (
    <div>
      {todos?.map((todo: any) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </div>
  )
}
