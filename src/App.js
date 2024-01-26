import './App.css';
import React, { useState, useEffect } from 'react';
import CloudHosting from './components/CloudHosting';
import Footer from './components/Footer';
import Header from './components/Header';
import ServeWebsite from './components/ServeWebsite';
import WebsiteAwesome from './components/WebsiteAwesome';
import Realstories from './components/Realstories';
import GetStarted from './components/GetStarted';
import Backtotop from './assets/images/web.p/back-to-top.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Preloader from './components/Preloader';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (
   
     <div>
      {screenLoading ? (
       <Preloader/>
      ) : (
          <>
            <div className='overflow-hidden'>
              <Header />
              <CloudHosting />
              <GetStarted />
              <Realstories />
              <ServeWebsite />
              <WebsiteAwesome />
              <Footer />
            </div>
            <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(225,_225,_225,_1)] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-[#b00000] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
              <img src={Backtotop} alt='Backtotop'  />
            </div>
          </>
      )
}
    </div >
  );
}

export default App;
