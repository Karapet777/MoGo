import React from 'react'
import './App.css';
import Layout from "./Component/Layout/Layout";

import Header from './Container/Header/Header'
import MainWelcome from './Container/MainWelcome/MainWelcome'
import StoryAbout from './Container/StoryAbout/StoryAbout'
import Numbers from './Container/Numbers/Numbers'
import AmazingSection from './Container/AmazingSection/AmazingSection'
import Unique from './Container/UniqueBlock/Unique'
import WhatWeDo from './Container/What-We-Do/What-we-do'
import MeetOurTeam from './Container/MeetOurTeam/MeetOurTeam'
import Partner from  './Container/partners/Partners'
import Some from './Container/Some/Some'
import HappyBlock from './Container/HappyBlock/HappyBlock'
import Latest from './Container/Latest/Latest'
import Maps from './Container/maps/maps'
import Footer from './Container/Footer/Footer'

//


function App() {
  





  return (
    <div className="App">
     
          <Layout>
              <main>
                <Header />
                <MainWelcome/>
                <StoryAbout />
                <Numbers />
                <AmazingSection />
                <Unique />
                <WhatWeDo />
                <MeetOurTeam />
                <Partner />
                <Some />
                <HappyBlock />
                <Latest />
                <Maps />
                <Footer />
              </main>
          </Layout>

          

          

    </div>
  );
}

export default App;
