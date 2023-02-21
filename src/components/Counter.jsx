import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(0);
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={() => setLikes(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setLikes(prevState => prevState - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;