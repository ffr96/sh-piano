import { useState } from 'react';

const hide = (n: number) => '*'.repeat(n);

const Spoilers = ({ tips }: { tips: Array<string> }) => {
  const [showTips, setShowTips] = useState<Array<boolean>>(
    tips.map(() => false)
  );
  console.log(showTips);
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
            <li key={i}>
              <span onClick={() => handleClick(i)}>
                {showTips[i] ? tip : hide(tip.length)}
              </span>
            </li>
          );
        })}
    </div>
  );
};

export default Spoilers;
