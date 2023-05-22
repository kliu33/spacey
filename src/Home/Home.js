import Header from "../Header/Header";
import "./Home.css"
import { useInView } from "react-intersection-observer";
import SS from "../SS/SS";

function Home() {
    const {ref: tileOneRef} = useInView({triggerOnce: true})

    return (
      <div id="home">
        <Header />
        <div id="tile-1" ref={tileOneRef}>
            <span className='background'>
                <div id ='starlink'> 
                  <p>RECENT LAUNCH</p>
                  <h2>STARLINK MISSION</h2>
                  <span id='watch-button'> REWATCH </span>
                </div>
            </span>
        </div>
        <div id="tile-2"> 
            <span className='background2'>
              <SS h2={'SPACEX TO LAUNCH VAST’S COMMERCIAL SPACE STATION'} button={'LEARN MORE'}/>
            </span>
        </div>
        <div id="tile-3"> 
            <span className='background3'>
                <SS p={'RECENT'} h2={'STARSHIP FLIGHT TEST'} button={'REWATCH'}/>
            </span>
        </div>
        <div id="footer">
          <p>SPACEY © 2023</p>
          <a href="https://www.linkedin.com/in/kliu33/" target='_blank' rel="noreferrer">LINKEDIN</a>
          <a href="https://github.com/kliu33" target='_blank' rel="noreferrer">GITHUB</a>
          <a href="https://wellfound.com/u/kevin-liu-149" target='_blank' rel="noreferrer">ANGELLIST</a>
          <a href="https://kaiwen.dev" target='_blank' rel="noreferrer">PORTFOLIO</a>
          <a href="https://www.instagram.com/kliuuuu/" target='_blank' rel="noreferrer">INSTAGRAM</a>
        </div>
      </div>
    );
  }
  
  export default Home;
  