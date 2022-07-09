import './intro.scss';
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <div className='intro' id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assests/pngegg.png" alt="man" />
            </div>
        </div>

        <div className="right">
            <div className="wrapper">
                <h2>Hello There, I'm</h2>
                <h1>Rithvik Jain</h1>
                <h3><Typewriter 
           
           options={{ 
           strings:["Freelance Developer"],
           backDelay:1500,
           autoStart:true,
           delay:75,
           loop:true
           }}

         /> </h3>
              
            </div>
            <a href="#portfolio">
                 <img src="assests/down.png" alt="down" /> 
            </a>
        </div>
    </div>
  )
}
