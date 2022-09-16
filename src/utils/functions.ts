import doNote from '@/assets/sound/do.wav';
import faNote from '@/assets/sound/fa.wav';
import laBNote from '@/assets/sound/laB.mp3';
import miNote from '@/assets/sound/mi.wav';
import miBNote from '@/assets/sound/miB.mp3';
import siNote from '@/assets/sound/si.mp3';
import solBNote from '@/assets/sound/solB.mp3';
import wood from '@/assets/sound/wood.mp3';

import { solution } from './constants';

export const getMediaWidth = () => {
  const width = document.documentElement.clientWidth;
  return width > 1250;
};

export const matchNotesToAudioObject = (note: string) => {
  if (note == 'do') return new Audio(doNote);
  if (note == 'fa') return new Audio(faNote);
  if (note == 'laB') return new Audio(laBNote);
  if (note == 'mi') return new Audio(miNote);
  if (note == 'miB') return new Audio(miBNote);
  if (note == 'si') return new Audio(siNote);
  if (note == 'solB') return new Audio(solBNote);
  else return new Audio(wood);
};

export const checkCurrentSolution = (proposedSolution: Array<string>) => {
  for (let i = 0; i < proposedSolution.length; i++) {
    if (solution[i] !== proposedSolution[i]) return false;
  }
  return true;
};
