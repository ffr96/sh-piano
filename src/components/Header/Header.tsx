import './header.css';
import { useState } from 'react';
import useStore from '@/state/store';
import { headerInfo } from '@/utils/constants';

const Header = () => {
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);
  const openAbout = useStore((state) => state.openAbout);
  const openPuzzle = useStore((state) => state.openPuzzle);
  const openTip = useStore((state) => state.openTip);

  const handleLang = () => {
    if (lang === 'spa') return setLang('eng');
    else return setLang('spa');
  };

  const handleClick = (to: string) => {
    if (to === 'about') return openAbout(true);
    if (to === 'puzzle') return openPuzzle(true);
    if (to === 'tip') return openTip(true);
  };

  return (
    <div className='header'>
      <h3 onClick={() => handleClick('about')}>{headerInfo[lang].about}</h3>
      <h3 onClick={() => handleClick('puzzle')}>{headerInfo[lang].puzzle}</h3>
      <h3 onClick={() => handleClick('tip')}>{headerInfo[lang].tips}</h3>
      <h3 onClick={() => handleLang()}>
        {headerInfo[lang].language}: {lang}
      </h3>
    </div>
  );
};

export default Header;
