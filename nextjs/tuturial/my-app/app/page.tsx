'use client'

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()

  const handleRouter = () => {
    //Using the router hook
    router.push('/about')
  }
  return (
    <>
    <h1> Hello thabang</h1>
    
    <button type="button" className="bg-blue-500 border rounded-lg border-blue-700 hover:bg-blue-800 p-4 px-2" onClick={handleRouter}> Go to about page </button>












    </>
          

  );
}
