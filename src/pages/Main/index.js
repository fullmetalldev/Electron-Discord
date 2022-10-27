import React from 'react';
import './main.scss';

const Main = () => {
    return (
        <div className="Main">
            <div className="Main__aside"></div>
            <div className="Main__row">
                <h2 className="Main__title">Добро пожаловать в Discord!</h2>
                <span className="Main__subtitle">Заведите друзей и начните общение прямо сейчас!</span>
            </div>
        </div>
    );
};

export default Main;