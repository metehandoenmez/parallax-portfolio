import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from './assets/Components/Footer'
import { useEffect, useState } from 'react'
import Loading from './assets/Components/Loading'
import {useRef} from 'react'
import NavButton from './assets/Components/NavButton'

function App() {
  const pageRef = useRef<any>(null)

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
          <div className='wipbanner'><i>Work in Progress</i></div>
          <NavButton pageRef={pageRef} />
          <Parallax pages={4.2} ref={pageRef}>
          <ParallaxLayer sticky={{start: 0.4, end: 1.5}}>
            <img className='balloon' src="/cactus.png" alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.5} factor={8} style={{
            // backgroundImage: `url(${bg})`,
            // backgroundSize: `cover`
            background: "#eee7e1",
          }}>
          </ParallaxLayer>
          <ParallaxLayer offset={0.15} speed={0.05}>
            <div className='header'>Metehan Dönmez
            <h4><span className='blinking'>_</span>Full Stack Developer</h4></div>
            {/* <div className='explorecont'><button className='explore'>Explore</button>
            </div> */}
          
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={0.4}>
          <i className='socialsHeader'>WORKS</i>
          </ParallaxLayer>
  
          <ParallaxLayer offset={3.4} speed={1}>
          <i className='socialsHeader'>SOCIALS</i>
          </ParallaxLayer>
  
          <ParallaxLayer offset={3.5} speed={2}>
          <Footer></Footer>
          </ParallaxLayer>
        </Parallax>
        </div>
      )}
    </>

  )
}

export default App
