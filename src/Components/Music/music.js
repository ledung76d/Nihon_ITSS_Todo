import React from 'react';
import './music.css';
import avatar from './holo.jpg';
import { AiFillPlayCircle, } from 'react-icons/ai';
import { IoIosInfinite, IoIosSkipBackward, IoIosSkipForward, IoIosRepeat } from "react-icons/io";
const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#f3f4f6] to-[#224f76]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
}

const Music = () => {
    return (
        <div className={style.bg}>
            <div className="music">
                <div className="music-thumb">
                    <img src={avatar} alt="" />
                </div>
                <h3 className="music-name">Beutiful in white</h3>
                <input type="range" name="range" id="range" className="range" />
                <audio src="./music/holo.mp3" id="song"></audio>
                <div className="timer">
                    <div className="remaining">3:10</div>
                    <div className="duration">2:10</div>
                </div>
                <div className="controls">
                    <IoIosInfinite className="play-infinite" />
                    <IoIosSkipBackward className="play-back" />
                    <div className="play">
                        <div className="player-inner">
                            <AiFillPlayCircle className="play-icon" />
                        </div>
                    </div>
                    <IoIosSkipForward className="play-forward" />
                    <IoIosRepeat className="play-repeat" />
                </div>
            </div>
        </div>

    );
}

export default Music;