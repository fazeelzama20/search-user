import React from 'react';
import ReactDOM from 'react-dom';
import SearchUser from './SearchUser';

const App = () => {
    return (
        <React.Fragment>
            <h3>Hi, I am in react typescript application</h3>
            <h5>Search the user nam from the mentioned list</h5>
            <SearchUser />
        </React.Fragment>);
};

ReactDOM.render(<App />, document.querySelector('#root'));