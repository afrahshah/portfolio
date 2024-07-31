import React, { useEffect, useState } from 'react';
import TextShpere from '../Skills';
import Resume from '../Resume';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G', 'e', 't', ' ', 't', 'o', ' ', 'k', 'n', 'o', 'w', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Turning tech problems into solutions and having fun while <s>saving the world</s> doing it.
          </p>
          <p align="LEFT">
            A Computer Science girlie doing my undergraduation from National Institute of Technology, Srinagar.
            I've worked with ReactJs, Flask, Streamlit, Vanilla Javascript, SQL, CSS, C/C++ and used a lot of Libraries and Frameworks: Scikit-learn, TensorFlow, Keras, PyTorch and XGBoost being a few.
          </p>
          <p>
            <Resume />
          </p>
          
        </div>
        
        <div className="stage-cube-cont">
        <p><TextShpere/></p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
