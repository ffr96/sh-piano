import { Modal } from '@/components/Modal';
import { useEffect, useState } from 'react';
import background from '@/assets/puzzle-bg.png';
import { getMediaWidth } from '@/utils/functions';
import { puzzle as puzzles } from '@/utils/constants';
import useGeneralStore from '@/state/store';

import './puzzle.css';

const PuzzleModal = () => {
  const lang = useGeneralStore((state) => state.lang);
  const opened = useGeneralStore((state) => state.puzzleView);
  const openPuzzle = useGeneralStore((state) => state.openPuzzle);
  const [puzzle, setPuzzle] = useState(puzzles.spa);
  const [page, setPage] = useState(0);
  const isWide = getMediaWidth();

  useEffect(() => {
    setPuzzle(puzzles[lang]);
  }, [lang]);

  const handlePage = () => {
    if (page + 1 > Math.floor(puzzle.stranzas.length / 2)) return setPage(0);
    setPage((prev) => prev + 1);
  };

  const handleClose = () => {
    openPuzzle(false);
  };

  return (
    <Modal opened={opened} onClose={handleClose} transparent>
      <div className='puzzle-container' onClick={handlePage}>
        {page === 0 && puzzle.title && <h1>{puzzle.title}</h1>}
        {puzzle.stranzas.slice(page, page + 3).map((text, i) => {
          return <h2 key={i}>{text}</h2>;
        })}
      </div>
      <div className='image-container'>
        <img
          loading='eager'
          src={background}
          width={isWide ? 1000 : 400}
          height={isWide ? 800 : 400}
        />
      </div>
    </Modal>
  );
};

export default PuzzleModal;
