import React from 'react';
import './aside.scss';
import DiscordIcon from '../../assets/icons/homeicon.svg';
import {channelsData} from "../../assets/data/chanels";
import ChanelCard from "../../components/ChanelCard";
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className="Aside">

            <NavLink to={'/'} className="discordIcon">
                <img src={DiscordIcon} alt=""/>
            </NavLink>

            <hr className="line"/>

            <nav className="Aside__navbar">
                {channelsData.map((item, idx) => (
                    <NavLink key={idx} to={`/${idx}`}>
                        <ChanelCard card={item}/>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Aside;