import Header from "../Header/Header";
import "./Home.css"
import { useRef } from 'react';

function Home() {

    const tileOneRef = useRef(null)

    const sectionOne = tileOneRef.current;
    console.log(sectionOne)
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
                <div id ='ss'> 
                  <h2>SPACEX TO LAUNCH VAST’S COMMERCIAL SPACE STATION</h2>
                  <span id='learn-button'> LEARN MORE </span>
                </div>
            </span>
        </div>
        <div id="tile-3"> 
            <span className='background3'>
                <div id ='content'></div>
            </span>
        </div>
      </div>
    );
  }
  
  export default Home;
  