import React, { useState } from 'react';

import { AddThoughtForm } from '../components/AddThoughtForm';
import { Thought } from '../components/Thought';
import { generateId, getNewExpirationTime } from '../components/utilities';


function NotTweeter() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
    
  };
  const removeThought = (thoughtIdToRemove) => {
    
    setThoughts((thoughts) => thoughts.filter(thot => thot.id !== thoughtIdToRemove));
  };

  return (
    <div className='Tweet'>

      
        <h1>NOT-TWEETER</h1>
        <AddThoughtForm addThought={addThought} />
        <p>Your thoughts will disappear after 15s</p>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      
    </div>
  );
}

export default NotTweeter;
