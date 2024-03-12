import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['a', 'l', 'e', 'h']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}> </span>
            <span className={`${letterClass} _14`}> i'</span>
            <span className={`${letterClass} _15`}>m</span>
            <br />
            <span className={`${letterClass} _16`}>A</span>
            <span className={`${letterClass} _17`}>b</span>
            <span className={`${letterClass} _18`}>d</span>
            <span className={`${letterClass} _19`}>u</span>
            <span className={`${letterClass} _20`}>l</span>
            <span className={`${letterClass} _21`}>r</span>
            <span className={`${letterClass} _22`}>a</span>
            <span className={`${letterClass} _23`}>h</span>
            <span className={`${letterClass} _24`}>m</span>
            <span className={`${letterClass} _25`}>a</span>
            <span className={`${letterClass} _26`}>n</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Developer / AI Enthusiast / Purdue Boilermaker</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
