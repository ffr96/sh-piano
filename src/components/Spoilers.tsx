import { useState } from 'react';
import './spoiler.css';

const hide = (n: number) => '*'.repeat(n);

const Spoilers = ({ tips }: { tips: Array<string> }) => {
  const [showTips, setShowTips] = useState<Array<boolean>>(
    tips.map(() => false)
  );

  const handleClick = (index: number) => {
    const newTips = [...showTips];
    newTips[index] = !showTips[index];
    setShowTips(newTips);
  };

  return (
    <div>
      {tips &&
        tips.map((tip, i) => {
          return (
            <div className='spoiler-content' key={i}>
              <span onClick={() => handleClick(i)}>
                {showTips[i] ? tip : hide(tip.length)}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Spoilers;
