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
                <div id ='content'></div>
            </span>
        </div>
        <div id="tile-2"> 
            <span className='background2'>
                <div id ='content'></div>
            </span>
        </div>
      </div>
    );
  }
  
  export default Home;
  