import React, {useCallback} from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import backgroundImg from '../../images/home-bg.jpeg'
import logoImg from '../../images/logo.png'
import useEmblaCarousel from 'embla-carousel-react'
import arrowRight from '../../images/arrow-right.png'
// import arrowLeft from '../../images/arrow-left.png'
import todoImg from '../../images/todo.png'
import todoDoneImg from '../../images/todo-done.png'
import searchImg from '../../images/searchDoc.png'
import spotifyImg from '../../images/spotify.png'
import mediaImg from '../../images/medias.png'
import Newsletter from '../../components/Newsletter/Newsletter'


const Home = () => {

  //slider settings
  const [emblaRef, emblaApi] = useEmblaCarousel()
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

  return (
    <div className='home'>
      <Navbar />
      <div className="home__container">
        <img src={backgroundImg} alt="home background img" />
        <div className="home__container-info">
          <img src={logoImg} alt="logo img" />
          <h2>La Capanna Della Conoscenza</h2>
          <h1 className='logo-big'>HUT</h1>
        </div>
      </div>

      <div className="home__slider">
        <h1>Argomenti più ricercati</h1>
        {/*SLIDER*/}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__slide-item">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
              <div className="embla__slide-item important">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
              <div className="embla__slide-item">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide-item">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
              <div className="embla__slide-item important">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
              <div className="embla__slide-item">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
              
            </div>
            <div className="embla__slide">
              <div className="embla__slide-item">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
              <div className="embla__slide-item important">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
              <div className="embla__slide-item">
                <img src="https://www.storicang.it/medio/2020/12/22/carlo-magno-attraversa-le-alpi-di-eugene-roger-1837-museo-del-castello-versailles_12f5764b_800x626.jpg" alt="" />
                <h3>Carlo Magno</h3>
                <p>la vita e la morte, e nel dubbio anche i miracoli di carlo magno uno dei più grandi uomini della storia</p>
                <a href="/post">LEGGI DI PIÙ</a>
              </div>
            </div>
          </div>
          <button className="embla__prev" onClick={scrollPrev}>
            <img src={arrowRight} alt="swipe slide to right" />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <img src={arrowRight} alt="swipe slide to right" />
          </button>
        </div>       
      </div>

      {/*KIT E RISORSE*/}
      <div className="home__resources">
        <div className="wrapper">
          <h1>Kit di risorse e documenti</h1>
          <div className="home__resources-container">
            <div className="home__resources-item">
              <img src={todoImg} alt="" />
              <h3>Consulta la lista degli argomenti che potrai visualizzare</h3>
            </div>
            <div className="home__resources-item">
              <img src={todoDoneImg} alt="" />
              <h3>Fai dei quiz per argomento per testare il tuo livello di preparazione</h3>
            </div>
            <div className="home__resources-item">
              <img src={searchImg} alt="" />
              <h3>Ricerca le parole o i documenti che possono esserti utili</h3>
            </div>
          </div>
          <p><b>SUGGERIMENTI: </b> RICORDA DI LEGGERE L'ARGOMENTO PRIMA DI <br /> SVOLGERE I QUIZ</p>
        </div>
      </div>

      {/*MEDIA*/}
      <div className="home__resources">
        <div className="wrapper">
          <h1>Media esterni</h1>
          <div className="home__resources-container">
            <div className="home__resources-item">
              <img src={spotifyImg} alt="" />
              <h3>La tua playlist per lo studio pronta per te su spotify</h3>
            </div>
            <div className="home__resources-item">
              <img src={mediaImg} alt="" />
              <h3>La lettura non fa per te? Nessun problema, nei nostri testi troverarei anche dei link per video-spiegazione</h3>
            </div>
            <div className="home__resources-item">
              <img src={searchImg} alt="" />
              <h3>Portale Gruppi di risorse per dipendenti (GRD)</h3>
            </div>
          </div>
          <p><b>ATTENZIONE: </b> I TESTI E I VIDEO CHE TROVERAI SU QEUSTO SITO<br /> POTREBBERO NON ESSERE SUFFICIENTI PER UN APPRENDIMENTO <br /> PERFETTO DEL PROGRAMMA.</p>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home