import Header from "../Header/Header";
import "./Home.css"
import { useInView } from "react-intersection-observer";
import SS from "../SS/SS";

function Home() {
    const {ref: tileOneRef, inView: tile1Visible} = useInView({triggerOnce: true})

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
              <SS />
            </span>
        </div>
        <div id="tile-3"> 
            <span className='background3'>
                <div id ='content'>
                </div>
            </span>
        </div>
      </div>
    );
  }
  
  export default Home;
  