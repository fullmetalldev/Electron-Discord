import React, {useRef, useState} from 'react';
import './channelDetails.scss';
import AudiWave from "../../../components/Audio/AudiWave";

const ChannelDetails = ({data}) => {

    const messageRow = useRef(null);
    const [state, setState] = useState(false)

    const submitMessage = (e) => {
        e.preventDefault();
        if (e.target[0].value) {
            data.messages.push(
                {
                    message: e.target[0].value,
                    time: String(new Date().getHours()) + ':' + String(new Date().getMinutes())
                }
            )
            e.target[0].value = ''
            setState((prev) => !prev)
        }
    }

    return (
        <>
            {data ?
                <div className="ChannelDetails">
                    <h2 className="ChannelDetails__title">{data.title}</h2>
                    <div className="ChannelDetails__main">
                        <div id="messageRow" ref={messageRow} className="ChannelDetails__row">
                            {data?.list && data.list.map((music, idx) => (
                                <div key={idx} className="audioSound">
                                    <AudiWave name={music.name} id={idx} url={music.file}></AudiWave>
                                </div>
                            ))
                            }
                            {
                                data.videos && data.videos.map((item, idx) => (
                                    <iframe className="video" key={idx} src={item}></iframe>
                                ))
                            }
                            {data.messages && data.messages.map((item, idx) => (
                                <div key={idx} className="ChannelDetails__message">
                                    <span>{item.message}</span>
                                    <span className="time">{item.time}</span>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={(e) => submitMessage(e)} className="ChannelDetails__messageForm">
                            <input type="text"/>
                        </form>
                    </div>
                </div>
                : ''
            }
        </>
    );
};

export default ChannelDetails;