import React, { useState } from 'react';
export const SearchUser: React.FunctionComponent = () => {

    const userList = [
        { id: 1, name: 'fazeel', age: 30 },
        { id: 2, name: 'london', age: 40 },
        { id: 3, name: 'paris', age: 50 },
        { id: 4, name: 'berlin', age: 55 },
        { id: 5, name: 'delhi', age: 60 }
    ];

    const [name, setName] = useState('');
    const [user, setUser] = useState<{ id: number, name: string, age: number | undefined }>();
    const [isFound, setFound] = useState('');

    const handleInput = (event: any) => {
        setName(event?.target.value);
    }

    const findUser = () => {
        const foundUser = userList.find((ele) => ele.name === name);
        if (foundUser) {
            setUser(foundUser);
            setFound('');
        } else {
            setUser(foundUser);
            setFound('Not found');
        }
    }

    return (
        <React.Fragment>
            {userList.map((item, index) => {
                return <div key={index}>{index + 1}. {item.name} {item.age}</div>
            })}
            <input value={name} onChange={handleInput} />
            <button onClick={findUser}>Find User</button>
            <div>{user && 'Name: ' + user.name}</div>
            <div>{user && 'Age: ' + user.age}</div>
            <div>{isFound}</div>
        </React.Fragment>
    );
}

export default SearchUser;