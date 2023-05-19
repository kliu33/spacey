import { useInView } from "react-intersection-observer";

function SS() {

  const { ref: ss, inView: visible } = useInView({
    triggerOnce: true
  }
  );
  
  return (
    <div id={`${visible ? 'ss-v' : 'ss-nv'}`}> 
      <h2>SPACEX TO LAUNCH VAST’S COMMERCIAL SPACE STATION</h2>
      <span id='learn-button' ref={ss}> LEARN MORE</span>
    </div>
  );
}

export default SS;
