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
  playKey: (key: string) => void;
  resetStreak: () => void;
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
  won: false,
  playKey: (key: string) =>
    set((state) => ({
      keysPlayed: [...state.keysPlayed, key],
      won: state.keysPlayed.length + 1 === 5 ? true : false,
    })),
  resetStreak: () => set(() => ({ keysPlayed: [] })),
});

const useGeneralStore = create<LangState & ViewState & GameState>()((...a) => ({
  ...createLangStore(...a),
  ...createViewStore(...a),
  ...createGameState(...a),
}));

export default useGeneralStore;
