import Link from 'next/link'


const Navbar = () => {
  return (
    <>
    <ul className='flex gap-4'>
     <Link href="/"><li>Home</li></Link>
       
        <Link href="/about"> <li>About</li></Link>

        
    </ul>
</>
  )
}

export default Navbar