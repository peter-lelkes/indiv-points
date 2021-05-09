import React from 'react';

const PoinstPerPlayer = ({players}) => {
  const sortedPlayers = [...players].sort((a, b) => {
    /* let keyA = parseInt(a.text(), 10);
    let keyB = parseInt(b.text(), 10);
    return keyA - keyB; */

    if (a.nummer > b.nummer) {
      return 1;
    }
    if (a.nummer < b.nummer) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="grocery-list">
      {sortedPlayers.map((player) => {
        const {id, nummer} = player;
        return (
          <article key={id} className="grocery-item">
            <p className="title">Player number: {nummer} scored 3p</p>
          </article>
        );
      })}
    </div>
  );
};
export default PoinstPerPlayer;
