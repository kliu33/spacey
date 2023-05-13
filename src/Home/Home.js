import Header from "../Header/Header";
import "./Home.css"

function Home() {
    return (
      <div id="home">
        <Header />
        <div id="tile-1">
            <span class='background'>
                <div id ='content'></div>
            </span>
        </div>
        <div id="tile-2"> 
            <span class='background2'>
                <div id ='content'></div>
            </span>
        </div>
      </div>
    );
  }
  
  export default Home;
  