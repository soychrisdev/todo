import React from 'react'

const fetchTodos = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/todos', { next: { revalidate: 10 } })
    if (!res.ok) {
      console.log('error')
    }
    const todos = await res.json()
    const fetched = todos.slice(0,6)
    return fetched
  }

export default async function TodoList() {
    const todos = await fetchTodos()
  return (
    <div>
        {todos?.map( (todo : any) => (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
            </div>
          ))}
    </div>
  )
}
