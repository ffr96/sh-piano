import { useState } from 'react';

import Piano from './Views/Piano';
import { Header } from './components/Header';
import AboutModal from './Views/About';
import PuzzleModal from './Views/Puzzle';
import TipsModal from './Views/Tips';
import WinModal from './Views/Win';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Piano />
      <AboutModal />
      <PuzzleModal />
      <TipsModal />
      <WinModal />
    </div>
  );
};

export default App;
