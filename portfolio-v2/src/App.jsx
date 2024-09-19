import "./App.css"
import TypeWriter from "./components/typingAnimation";
import CircularProgressBar from "./components/progressBar.tsx";
import { useEffect, useState } from "react";
import image from "./home_img.jpg"
function App() {
  const [hidden, setHidden] = useState(true)
  const [loaderHidden, setLoaderHidden] = useState(false)
  const [contentHidden, setContentHidden] = useState(true)
  const [loaderSpinnerHidden, setLoaderSpinnerHidden] = useState(false)
  const [typewriter, setTypewriter] = useState()
  let isMobile = false;
  const skills = [
    { name: "HTML", score: 75, key: 1 },
    { name: "CSS", score: 70, key: 2 },
    { name: "Javascript", score: 85, key: 3 },
    { name: "Python", score: 80, key: 4 },
  ]


  function onNavButtonClick() {
    const nav = document.querySelector('nav');
    nav.classList.remove("navbar-text-white");
    nav.classList.add('bg-light', 'shadow', 'navbar-text-black');
    isMobile = true

  }

  function onNavItemClick() {
    if (isMobile) {
      const navbarTogglerButton = document.querySelector(".navbar-toggler")
      navbarTogglerButton.click()
    }
  }


  useEffect(() => {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow');
      } else {
        nav.classList.remove('bg-light', 'shadow');
      }
    });

    function load(src) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
      });
    }

    const loader = document.querySelector('.loading')

    load(image).then(() => {
      setContentHidden(false)
      setLoaderSpinnerHidden(true)
      loader.classList.add('fadeOut')
      setTimeout(() => {
        setLoaderHidden(true)
        setTypewriter(<TypeWriter />)
      }, 500  )
    });

  }, [])

  return (
    <div className="App ">
      <div hidden={loaderHidden} style={{
        opacity: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
      }} className="loading">

        <div className="d-flex justify-content-center">
          <div hidden={loaderSpinnerHidden} className="spinner-border text-success" role="status" style={{
            width: "75px",
            height: "75px",
            marginTop: window.innerHeight / 2.5
          }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div hidden={contentHidden} className="content">
        <nav className="navbar fixed-top navbar-expand-lg p-md-3">
          <div className="container">
            <a className="navbar-brand" href="#about">Anay</a>
            <button
              onClick={onNavButtonClick}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto"></div>
              <ul className="navbar-nav">
                <li onClick={onNavItemClick} className="nav-item">
                  {/* eslint-disable-next-line  */}
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li onClick={onNavItemClick} className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li onClick={onNavItemClick} className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="introduction">
          <div style={{
            backgroundImage: `url(${image})`,
            filter: "brightness(100%) ",
            backgroundSize: 'cover',
            backgroundPosition: "right",
            textShadow: "0 0 2px #FFFF, 0 0 2px #FFFF"
          }}
            className="w-100 vh-100 d-flex justify-content-center align-items-center"
          >
            <div className="text-center text-black">
              <h1><strong>Hi, I m Anay</strong></h1>
              <br />
              <h2>a<span> {typewriter}</span></h2>
            </div>
          </div>
        </div>





        <div
           style={{
            paddingTop: "40px",
            marginTop: "10%"
           }} className=" bg-white text-center container container-padding-bottom" id="about">
          <div className="row align-items-start">
            <div className="col col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 col-12">
              <br />
              <h1>About me</h1>
              <hr className="text-center aboutHr" width="20%" />


              <p>Hello, My name is Anay, I m a full stack web developer.
                I have a strong passion for programming and web development and I'd love to help you make your website.
                My proficiency in programming languages like javascript with React.js framework has enabled me to create full stack web applications.
                <br /> If you are interested in learning more about my services or would like to discuss a project, Feel free to contact me!</p>
              <br />
            </div>
            <div className="col col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 col-12">
              <br />
              <h1>Skills</h1>
              <hr className="text-center skillsHr" width="10%" />
              <br />
              <div className="container text-center container-padding-bottom">
                <div className="row align-items-start">
                  {skills.map(skill => {
                    return (
                      <div key={skill.key} className="col col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6 col-xs-12 skill">
                        <CircularProgressBar radius={75} maxValue={100} selectedValue={skill.score} activeStrokeColor="#0f4fff" withGradient />
                        <br />
                        <p className="skillName">{skill.name}</p>

                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="contact" className="text-center bg-white container container-padding-bottom">
          <br />
          <h1>Get in touch</h1>
          <hr className="text-center contactHr" width="15%" />
          <p>Feel free to contact me via Email by clicking the button below!</p>
          <a href="mailto:smog_snag.0s@icloud.com"><button onClick={() => setTimeout(() => setHidden(false), 2500)} className="btn btn-primary">Email me!</button></a>
          <div hidden={hidden}>
            <br />
            <a href="https://www.google.com/search?q=how+to+set+up+default+program+for+email" target="_blank" rel="noreferrer">Button not working?</a>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
