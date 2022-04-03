import type { NextPage } from 'next'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home
