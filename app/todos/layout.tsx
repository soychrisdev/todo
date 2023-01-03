import React from 'react'
import Link from 'next/link'
function TodosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href='/todos/all' >All</Link>
          </li>
          <li>

            <Link href='/todos/favorites'>Favorites</Link>
          </li>
          <li>
            <Link href='/todos/shared'>Shared</Link>
          </li>

          <li>
            <Link href='/todos/trash'>Trash</Link>
          </li>

        </ul>
      </nav>
      {children}
      <footer>
        <h1>Todo footer section</h1>
      </footer>
    </div>
  )
}

export default TodosLayout