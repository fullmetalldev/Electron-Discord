import React from 'react';
import './channelDetails.scss';
import AudiWave from "../../../components/Audio/AudiWave";

const ChannelDetails = ({data}) => {

    return (
        <>
            {data ?
                <div className="ChannelDetails">
                    <h2 className="ChannelDetails__title">{data.title}</h2>
                    <div className="ChannelDetails__row">
                        {data?.list ?
                            data.list.map((music, idx) => (
                                <div key={idx} className="audioSound">
                                    <AudiWave name={music.name} id={idx} url={music.file}></AudiWave>
                                </div>
                            ))
                            : ''
                        }
                    </div>
                </div>
                : ''
            }
        </>
    );
};

export default ChannelDetails;