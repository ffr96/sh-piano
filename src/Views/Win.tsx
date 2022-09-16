import { Modal } from '@/components/Modal';
import useGeneralStore from '@/state/store';

import './win.css';

const WinModal = () => {
  const win = useGeneralStore((state) => state.won);
  const closeWin = useGeneralStore((state) => state.closeWin);
  const keysPlayed = useGeneralStore((state) => state.keysPlayed);

  return (
    <Modal opened={win} onClose={closeWin}>
      <h1>Well done!</h1>
      <div className='container'>
        <h2>Time spent here: {Math.floor(performance.now() / 1000)} seconds</h2>
        <h2>Keys Played: </h2>
        {keysPlayed.map((key, i) => {
          return <li key={i}>{key}</li>;
        })}
      </div>
    </Modal>
  );
};

export default WinModal;
