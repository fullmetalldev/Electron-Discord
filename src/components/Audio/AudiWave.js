import Wavesurfer from "wavesurfer.js";
import {useEffect, useRef, useState} from "react";


const Waveform = ({url, id, name}) => {

    const [playing, setPlaying] = useState(false);

    const waveform = useRef(null);

    useEffect(() => {
        if (!waveform.current) {
            waveform.current = Wavesurfer.create({
                barWidth: 3,
                cursorWidth: 1,
                container: `#waveform${id}`,
                backend: 'WebAudio',
                height: 32,
                progressColor: '#E7B672',
                responsive: true,
                waveColor: 'rgba(6, 2, 13, 0.2)',
                cursorColor: 'transparent',
                mediaControls: true,
                pixelRatio: 1
            });
            waveform.current.load(url);
        }
    }, []);

    const playAudio = () => {
        if (!playing) {
            waveform.current.pause();

        } else {
            waveform.current.play();
        }
    };

    useEffect(() => {
        if (waveform.current) {
            playAudio()
        }
    }, [playing]);

    useEffect(() => {
        console.log(waveform.current.isPlaying())
    }, [waveform.current]);

    return (
        <div style={{width: "100%"}}>
            <div id={`waveform${id}`}/>
            <div className="waveformButtons">
                <span className="waveformButtons__songName">{name}</span>
                <button onClick={() => setPlaying(!playing)}>
                    {
                        playing ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 20L20 4C20 3.44772 19.5523 3 19 3L16 3C15.4477 3 15 3.44772 15 4L15 20C15 20.5523 15.4477 21 16 21H19C19.5523 21 20 20.5523 20 20Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M9 20L9 4C9 3.44772 8.55228 3 8 3L5 3C4.44772 3 4 3.44772 4 4L4 20C4 20.5523 4.44772 21 5 21H8C8.55228 21 9 20.5523 9 20Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12L5 4V20L20 12Z" stroke="white" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                    }

                </button>
            </div>
        </div>
    );
};

export default Waveform;