import { getMediaWidth, matchNotesToAudioObject } from '@/utils/functions';
import { whiteKeys, blackKeys } from '@/utils/constants';
import { PianoBackground } from '@/components/Piano/PianoBackground';
import { correctKeyPlayed } from '@/utils/functions';
import useGeneralStore from '@/state/store';

import './piano.css';

/**
 * Render a 'overlay' for each key to check for clicks.
 * Then, each click is handled: if it's a correct note we add +1 to streak,
 * if it's not, we reset the streak.
 *
 * isWide (>600px) is used to decide the size of the keys and the background image.
 * A more sound solution could be to get the Width and Height of the client directly
 * and then calculate the size based on a percentage.
 */

const PianoWithKeys = () => {
  const isWide = getMediaWidth();
  const playKey = useGeneralStore((state) => state.playKey);
  const streak = useGeneralStore((state) => state.streak);
  const increaseStreak = useGeneralStore((state) => state.increaseStreak);
  const resetStreak = useGeneralStore((state) => state.resetStreak);

  const handleClick = (pKey: string) => {
    const audio = matchNotesToAudioObject(pKey);
    audio.play();
    playKey(pKey);
    if (correctKeyPlayed(streak, pKey)) return increaseStreak();
    else return resetStreak();
  };

  return (
    <div className='piano'>
      <PianoBackground isWide={isWide} />
      <div className='whites' id='white-keys'>
        {whiteKeys.map((pKey, i) => {
          return (
            <img
              loading='eager'
              key={i}
              width={isWide ? 100 : 31.5}
              height={isWide ? 155 : 51.6}
              className='individual-key'
              id={`white-key-${i}`}
              onClick={() => handleClick(pKey)}
            ></img>
          );
        })}
      </div>
      <div className='blacks' id='black-keys'>
        {blackKeys.map((pKey, i) => {
          return (
            <img
              loading='eager'
              key={i}
              width={isWide ? 55 : 17.5}
              height={isWide ? 280 : 92}
              className='individual-key'
              id={`black-key-${i}`}
              onClick={() => handleClick(pKey)}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default PianoWithKeys;
