import React, {useState} from 'react';
import './chanel.scss';
import {useParams} from "react-router-dom";
import {channelsData} from "../../assets/data/chanels";
import TextChannelIcon from '../../assets/icons/textChanel.svg';
import VoiceChannelIcon from '../../assets/icons/voiceChanel.svg';
import ChannelDetails from "./ChannelDetails";

const Chanel = () => {

    const {id} = useParams();

    const [channelState, setChannelState] = useState('');

    return (
        <div className="Channel">
            <aside className="Channel__aside">
                <div className="Channel__aside_channelName">
                    {channelsData[id]?.title}
                </div>
                <div className="Channel__aside_channels">

                    {
                        channelsData[id].chatChanels ?
                            <div className="Channel__aside_channelRow">
                                <div className="Channel__aside_channelType">
                                    <h2>TEXT CHANNELS</h2>
                                </div>
                                <div className="Channel__aside_channelRow-list">
                                    {
                                        channelsData[id].chatChanels.map((item, idx) => (
                                            <button key={idx} onClick={() => setChannelState(item)} className="chanel">
                                                <img src={TextChannelIcon} alt=""/>
                                                <span>{item.title}</span>
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            : ''
                    }

                    {
                        channelsData[id].voiceChanels ?
                            <div className="Channel__aside_channelRow">
                                <div className="Channel__aside_channelType">
                                    <h2>VOICE CHANNELS</h2>
                                </div>
                                <div className="Channel__aside_channelRow-list">
                                    {
                                        channelsData[id].voiceChanels.map((item, idx) => (
                                            <button key={idx} onClick={() => setChannelState(item)} className="chanel">
                                                <img src={VoiceChannelIcon} alt=""/>
                                                <span>{item.title}</span>
                                            </button>
                                        ))
                                    }

                                </div>
                            </div>
                            : ''
                    }

                </div>
            </aside>

            <ChannelDetails data={channelState}/>

        </div>
    );
};

export default Chanel;