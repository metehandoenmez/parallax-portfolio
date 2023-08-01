import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from './assets/Components/Footer'
import { useEffect, useState } from 'react'
import Loading from './assets/Components/Loading'

function App() {
  const bg = '/bg2.png'

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div id="content">
          <Parallax pages={4.2}>
          <ParallaxLayer sticky={{start: 0.4, end: 2.4}}>
            <img className='balloon' src="/balloon.png" alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.5} factor={7} style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: `cover`
          }}>
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={0.05}>
            <div className='text2'>Metehan Dönmez
            <h4>Full Stack Developer<span className='blinking'>_</span></h4></div>
            {/* <div className='explorecont'><button className='explore'>Explore</button>
            </div> */}
          
          </ParallaxLayer>
  
          <ParallaxLayer offset={3.5} speed={1}>
          <i className='socialsHeader'>SOCIALS</i>
          </ParallaxLayer>
  
          <ParallaxLayer offset={3.8} speed={2}>
          <Footer></Footer>
          </ParallaxLayer>
        </Parallax>
        </div>
      )}
    </>

  )
}

export default App
