export default function Log({ turns, scoreTable, players }) {
  return (
    <ol id="log">
      <li>
        {players.X.toUpperCase()} : {scoreTable.playerX}
      </li>
      <li>
        {players.O.toUpperCase()} : {scoreTable.playerO}
      </li>
      <li>Draws : {scoreTable.draws}</li>
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row + 1},{turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
