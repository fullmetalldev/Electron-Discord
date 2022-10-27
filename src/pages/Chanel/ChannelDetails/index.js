import React from 'react';
import './channelDetails.scss';

const ChannelDetails = ({data}) => {

    return (
        <>
            {data ?
                <div className="ChannelDetails">
                    <h2 className="ChannelDetails__title">{data.title}</h2>

                </div>
                : ''
            }
        </>
    );
};

export default ChannelDetails;