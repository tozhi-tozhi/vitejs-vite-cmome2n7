import { useGame } from '../app/store';
import type { Screen } from '../app/types';

const ALLOWED: Record<Screen, Screen[]> = {
  boot:      ['home'],
  home:      ['gigBoard', 'endOfDay', 'gameOver', 'gameWin'],
  gigBoard:  ['home', 'gigDetail'],
  gigDetail: ['gigBoard', 'activeGig'],
  activeGig: ['home', 'endOfDay', 'gameOver', 'gameWin'],
  endOfDay:  ['home', 'gameOver', 'gameWin'],
  gameOver:  [],
  gameWin:   [],
};

export function goTo(next: Screen): void {
  const cur = useGame.getState().screen;
  if (!ALLOWED[cur].includes(next)) {
    if (import.meta.env.DEV) console.warn(`[FSM] illegal ${cur} → ${next}`);
    return;
  }
  useGame.setState({ screen: next });
}