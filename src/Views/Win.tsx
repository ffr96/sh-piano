import { Modal } from '@/components/Modal';
import useGeneralStore from '@/state/store';
import { win as wininfo } from '@/utils/constants';

import './win.css';

const WinModal = () => {
  const lang = useGeneralStore((state) => state.lang);
  const win = useGeneralStore((state) => state.won);
  const closeWin = useGeneralStore((state) => state.closeWin);
  const keysPlayed = useGeneralStore((state) => state.keysPlayed);

  return (
    <Modal opened={win} onClose={closeWin}>
      <h1>{wininfo[lang].title}</h1>
      <div className='container'>
        <h2>
          {wininfo[lang].time}: {Math.floor(performance.now() / 1000)} sec
        </h2>
        <h2>{wininfo[lang].keys} </h2>
        {keysPlayed.map((key, i) => {
          return <li key={i}>{key}</li>;
        })}
      </div>
    </Modal>
  );
};

export default WinModal;
