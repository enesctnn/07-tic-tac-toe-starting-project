import { useRef, useState } from 'react';
import classes from './Player.module.css';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const inputRef = useRef();

  const buttonClickHandler = () => {
    setIsEditing((prevStat) => {
      return !prevStat;
    });
    if (isEditing) {
      setPlayerName(inputRef.current.value);
    }
  };
  return (
    <li>
      <span className={classes['player-info']}>
        {!isEditing && (
          <span className={classes['player-name']}>{playerName}</span>
        )}
        {isEditing && <input type="text" ref={inputRef} />}
        <span className={classes['player-symbol']}>{symbol}</span>
      </span>
      {!isEditing && <button onClick={buttonClickHandler}>Edit</button>}
      {isEditing && <button onClick={buttonClickHandler}>Save</button>}
    </li>
  );
};

export default Player;
