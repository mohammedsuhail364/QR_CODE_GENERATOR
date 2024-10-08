import React, { useState } from 'react';

export const Example = () => {
    const [user, setUser] = useState({ name: '', age: 20 });

    function changeHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <>
            <h1>{user.name}, {user.age}</h1>
            <input type='text' placeholder='Enter Your Name' name='name' onChange={changeHandler} />
            <input type='text' placeholder='Enter Your age' name='age' onChange={changeHandler} />
        </>
    );
};
