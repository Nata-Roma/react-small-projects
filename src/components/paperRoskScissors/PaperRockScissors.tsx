import { useEffect, useState } from 'react';
import './paperRockScissors.css';
import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

export const choices = [rock, paper, scissors];
export const sounds = [
  {
    name: 'draw',
    path: './audio/draw.mp3',
  },
  {
    name: 'win',
    path: './audio/win.mp3',
  },
  {
    name: 'loss',
    path: './audio/loss.mp3',
  },
];

export const PaperRockScissors = () => {
  const [compChoice, setCompChoice] = useState('');
  const [result, setResult] = useState({ win: 0, loss: 0, draw: 0 });
  const [audio, setAudio] = useState<HTMLAudioElement>();

  const playSound = (choice: string) => {
    const sound = sounds.find((s) => s.name === choice);
    if (sound && audio) {
      audio.src = sound.path;
      audio.volume = 0.3;
      audio.play();
    }
  };

  const onPlayerChoice = (playerChoice: string) => {
    const choice = Math.floor(Math.random() * 3);
    setCompChoice(choices[choice]);
    const playerChoiceIndex = choices.indexOf(playerChoice);
    if (playerChoiceIndex === choice) {
      playSound('draw');
      setResult((prev) => ({ ...prev, draw: prev.draw + 1 }));
    } else if (playerChoiceIndex === (choice + 1) % choices.length) {
      playSound('win');
      setResult((prev) => ({ ...prev, win: prev.win + 1 }));
    } else if (choice === (playerChoiceIndex + 1) % choices.length) {
      playSound('loss');
      setResult((prev) => ({ ...prev, loss: prev.loss + 1 }));
    } else if (playerChoiceIndex === 0 && choice === choices.length - 1) {
      playSound('loss');
      setResult((prev) => ({ ...prev, loss: prev.loss + 1 }));
    } else if (choice === 0 && playerChoiceIndex === choices.length - 1) {
      playSound('win');
      setResult((prev) => ({ ...prev, win: prev.win + 1 }));
    }
  };

  useEffect(() => {
    setAudio(new Audio());
    return () => {
      setAudio(undefined);
    }
  }, []);

  return (
    <div className='prs-container'>
      <div className='prs-title-container'>
        <div className='prs-title'>Paper, Rock, Scissors.</div>
        <div className='prs-title'>
          Wins: <span className='prs-count-win'>{result.win}</span>
        </div>
        <div className='prs-title'>
          Losses: <span className='prs-count-loss'>{result.loss}</span>
        </div>
      </div>
      <div className='prs-choice-container'>
        <div className='prs-choice-title'>Make your choice</div>
        <div className='prs-choices'>
          <div
            className='prs-choice prs-choice-player'
            onClick={() => onPlayerChoice(paper)}
          >
            <div
              className='prs-choice-img'
              style={{ backgroundImage: `url(${paper})` }}
            />
          </div>
          <div
            className='prs-choice prs-choice-player'
            onClick={() => onPlayerChoice(rock)}
          >
            <div
              className='prs-choice-img'
              style={{ backgroundImage: `url(${rock})` }}
            />
          </div>
          <div
            className='prs-choice prs-choice-player'
            onClick={() => onPlayerChoice(scissors)}
          >
            <div
              className='prs-choice-img'
              style={{ backgroundImage: `url(${scissors})` }}
            />
          </div>
        </div>
      </div>

      <div className='prs-choice-container'>
        <div className='prs-choice-title'>Computer choice</div>
        <div className='prs-choices'>
          <div className='prs-choice'>
            <div
              className='prs-choice-img'
              style={{ backgroundImage: `url(${compChoice})` }}
            >
              {compChoice ? '' : '?'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
