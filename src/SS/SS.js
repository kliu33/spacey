import { useInView } from "react-intersection-observer";

function SS({p, h2, button}) {

  const { ref: ss, inView: visible } = useInView({
    triggerOnce: true
  }
  );
  
  return (
    <div id={`${visible ? 'ss-v' : 'ss-nv'}`}> 
      {p ? <span id='ache3'>{p}</span> : null}
      <h2>{h2}</h2>
      <span id='learn-button' ref={ss}> {button}</span>
    </div>
  );
}

export default SS;
