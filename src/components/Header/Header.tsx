import './header.css';
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
      <h2 onClick={() => handleClick('about')}>{headerInfo[lang].about}</h2>
      <h2 onClick={() => handleClick('puzzle')}>{headerInfo[lang].puzzle}</h2>
      <h2 onClick={() => handleClick('tip')}>{headerInfo[lang].tips}</h2>
      <h2 onClick={() => handleLang()}>
        {headerInfo[lang].language}: {lang}
      </h2>
    </div>
  );
};

export default Header;
