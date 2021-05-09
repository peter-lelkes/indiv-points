import PoinstPerPlayer from './PoinstPerPlayer';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';

const getLocalStorage = () => {
  let list = localStorage.getItem('players');
  if (list) {
    return JSON.parse(localStorage.getItem('players'));
  } else {
    return [];
  }
};

function App() {
  const [number, setNumber] = useState('');
  const [players, setPlayers] = useState(getLocalStorage());

  const submitHandler = (e) => {
    e.preventDefault();
    const newScorer = e.target.value;
    const existingScorer = players.includes(newScorer);

    if (existingScorer) {
      console.log('already on list!');
      return;
    } else {
      const newPlayer = {id: nanoid(4), nummer: number};
      setPlayers([...players, newPlayer]);
      setNumber('');
    }
  };
  const onAdd = (e) => {
    const newPlayer = {id: nanoid(4), nummer: number};
    setPlayers([...players, newPlayer]);
    setNumber('');
  };

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
    /*  return () => {
    cleanup
  } */
  }, [players]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
        {/* {alreadyInList && <h1>number is in list</h1>} */}
        <h3>Points per player</h3>
        <div className="form-control">
          <input
            type="number"
            className="grocery"
            value={number}
            placeholder="enter shoter number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button onClick={onAdd} type="button" className="submit-btn">
            Add
          </button>
        </div>
      </form>
      {players.length > 0 && (
        <div className="grocery-container">
          <h4>Output</h4>
          <PoinstPerPlayer players={players} />
          <button className="clear-btn" onClick={() => setPlayers([])}>
            new Team
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
