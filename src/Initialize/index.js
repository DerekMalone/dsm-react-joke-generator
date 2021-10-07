import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Need a Laugh?');
  const [joke, setJoke] = useState({});

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      setBtnText('Get the Punchline');
    });
  };

  return (
    <div className="App">
      <h1>{joke.setup}</h1>
      <h3>{btnText !== 'Get the Punchline' ? joke.punchline : ''}</h3>
      {btnText === 'Get Another Joke' || btnText === 'Need a Laugh?' ? (
        <button onClick={getAJoke} type="button" className="btn btn-success">
          {btnText}
        </button>
      ) : (
        <button
          onClick={() => setBtnText('Get Another Joke')}
          className="btn btn-success"
          type="button"
        >
          {btnText}
        </button>
      )}
    </div>
  );
}

export default Initialize;
