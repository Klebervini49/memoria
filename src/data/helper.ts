import jinx from '../assets/jinx.jpg';
import caitlyn from '../assets/caitlyn.jpg';
import jayce from '../assets/jayce.jpg';
import heimer from '../assets/heimer.jpg';
import viktor from '../assets/viktor.jpg';
import vi from '../assets/vi.jpg';

export const helper = [
  { name: 'jinx', icon: jinx },
  { name: 'caitlyn', icon: caitlyn },
  { name: 'jayce', icon: jayce },
  { name: 'heimer', icon: heimer },
  { name: 'viktor', icon: viktor },
  { name: 'vi', icon: vi },
];

export const FormatTimerElapsed = (seconds: number) => {
  let minutos = Math.floor(seconds / 60);
  seconds -= minutos * 60;

  let secString = `${seconds < 10 ? '0' + seconds : seconds}`;
  let minString = `${minutos < 10 ? '0' + minutos : minutos}`;

  return `${minString}:${secString}`;
};
