import fullpiano from '@/assets/piano.png';

export const PianoBackground = ({ isWide }: { isWide: boolean }) => {
  return (
    <img
      src={fullpiano}
      width={isWide ? 1270 : 400}
      height={isWide ? 435 : 145}
      id='piano-background'
    ></img>
  );
};
