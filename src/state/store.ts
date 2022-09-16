import create, { StateCreator } from 'zustand';

interface LangState {
  lang: 'spa' | 'eng';
  setLang: (lang: 'spa' | 'eng') => void;
}

interface ViewState {
  aboutView: boolean;
  puzzleView: boolean;
  tipView: boolean;
  openAbout: (doOpen: boolean) => void;
  openPuzzle: (doOpen: boolean) => void;
  openTip: (doOpen: boolean) => void;
  closeWin: () => void;
}

interface GameState {
  keysPlayed: Array<string>;
  won: boolean;
  streak: number;
  playKey: (key: string) => void;
  resetStreak: () => void;
  increaseStreak: () => void;
}

const createLangStore: StateCreator<
  LangState & ViewState & GameState,
  [],
  [],
  LangState
> = (set) => ({
  lang: 'eng',
  setLang: (lang) => set(() => ({ lang: lang })),
});

const createViewStore: StateCreator<
  LangState & ViewState & GameState,
  [],
  [],
  ViewState
> = (set) => ({
  aboutView: false,
  puzzleView: false,
  tipView: false,
  openAbout: (doOpen: boolean) => set(() => ({ aboutView: doOpen })),
  openPuzzle: (doOpen: boolean) => set(() => ({ puzzleView: doOpen })),
  openTip: (doOpen: boolean) => set(() => ({ tipView: doOpen })),
  closeWin: () => set(() => ({ won: false })),
});

const createGameState: StateCreator<
  LangState & ViewState & GameState,
  [],
  [],
  GameState
> = (set) => ({
  keysPlayed: [],
  streak: 0,
  won: false,
  playKey: (key: string) =>
    set((state) => ({
      keysPlayed: [...state.keysPlayed, key],
    })),
  increaseStreak: () =>
    set((state) => ({
      streak: state.streak + 1,
      won: state.streak + 1 === 5 ? true : false,
    })),
  resetStreak: () => set(() => ({ streak: 0 })),
});

const useGeneralStore = create<LangState & ViewState & GameState>()((...a) => ({
  ...createLangStore(...a),
  ...createViewStore(...a),
  ...createGameState(...a),
}));

export default useGeneralStore;
