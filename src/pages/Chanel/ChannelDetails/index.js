import React, {useRef} from 'react';
import './channelDetails.scss';
import AudiWave from "../../../components/Audio/AudiWave";

const ChannelDetails = ({data}) => {

    const messageRow = useRef();

    const submitMessage = (e) => {
        e.preventDefault();
        const htmlNode = document.createElement('div')
        htmlNode.classList.add('ChannelDetails__message')
        htmlNode.innerHTML = `
            <span>${e.target[0].value}</span>
            <span class="time">${String(new Date().getHours()) + ':' + String(new Date().getMinutes())}</span>
        `
        console.log(e.target[0].value)
        console.log(htmlNode)
        messageRow.current.append(htmlNode)
        e.target[0].value = ''
    }

    return (
        <>
            {data ?
                <div className="ChannelDetails">
                    <h2 className="ChannelDetails__title">{data.title}</h2>
                    <div className="ChannelDetails__main">
                        <div ref={messageRow} className="ChannelDetails__row">
                            {data?.list ?
                                data.list.map((music, idx) => (
                                    <div key={idx} className="audioSound">
                                        <AudiWave name={music.name} id={idx} url={music.file}></AudiWave>
                                    </div>
                                ))
                                : ''
                            }
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