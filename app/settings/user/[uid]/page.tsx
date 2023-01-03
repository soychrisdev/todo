
import React, { Suspense } from 'react'
// const getInfoOfUserId = async (uid : any) => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/users/${uid}`)

//   if (!res.ok ){
//     console.log('error')
//   }

//   return res.json()
// }

// export async function generateStaticParams() {
//   const user = await getPosts();

//   return ({
//     slug: post.slug,
//   });
// }

async function Settings({ params }: any) {
  const { uid } = params

  return (

    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>{uid}</h1>
      </Suspense>
    </div>


  )
}


export default Settings