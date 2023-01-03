import Link from "next/link"
import { Inter } from '@next/font/google'
import { randomInt } from "crypto"
import { Suspense } from "react"


const inter = Inter({ subsets: ['latin'] })

const getUser = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
  if (!res.ok) {
    console.log('error')
  }
  const data: any = await res.json()
  const user = data[randomInt(1, 10)]
  return user

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getUser()

  console.log(user.id)
  return (

    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <nav>
          <Suspense>

            {` main layout / userlogged: ${user.id} - ${user.name} `}
          </Suspense>


          <ul>
            <li>
              <Link href={`/settings/user/${user.id}`}>Settings</Link>
            </li>

            <li>

              <Link href='/'>Home</Link>
            </li>
            <li>

              <Link href='/todos'>Todos</Link>
            </li>

          </ul>
        </nav>
        {children}
        <footer>
          <h1>footer section</h1>
        </footer>
      </body>
    </html>
  )
}
