import React from 'react';
import './main.scss';

const Main = () => {
    return (
        <div className="Main">
            <div className="Main__aside"></div>
            <div className="Main__row">
                <h2 className="Main__title">Welcome to Discord!</h2>
                <span className="Main__subtitle">Make friends and start conversations now.</span>
            </div>
        </div>
    );
};

export default Main;
