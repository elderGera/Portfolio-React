import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTittle from '../../assets/images/logo-s.svg'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'r', 'a', 's', 'y', 'm', 'e', 'n', 'k', 'o']
  const jobArray = [
    'f',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>y</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <img src={LogoTittle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>
            "Choose a job you love and you'll never have to work a day in your
            life"
            <br />- Confucius
          </h2>
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
