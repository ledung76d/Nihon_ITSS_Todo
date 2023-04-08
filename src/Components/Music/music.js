import React, { useEffect, useRef } from 'react';
import './music.css';
import avatar from './holo.jpg';
import { AiFillPlayCircle, } from 'react-icons/ai';
import { IoIosInfinite, IoIosSkipBackward, IoIosSkipForward, IoIosRepeat, IoIosPause } from "react-icons/io";
import Holo from './albums/holo.mp3';
import Home from './albums/home.mp3';
import Spark from './albums/spark.mp3';
import Summer from './albums/summer.mp3';
import HoloAvatar from './image/holo.jpg';
import HomeAvatar from './image/home.jpg';
import SparkAvatar from './image/spark.jpg';
import SummerAvatar from './image/summer.jpg';

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#f3f4f6] to-[#224f76]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
}

const Music = () => {
    const [isPlaying, setIsPlaying] = React.useState(true);
    const audioRef = useRef(null);
    const [indexSong, setIndexSong] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);

    const musics = [
        {
            id: 1,
            title: "Holo",
            file: "holo.mp3",
            image: "./image/holo.jpg",
        },
        {
            id: 2,
            title: "Home",
            file: "home.mp3",
            image: "./image/home.jpg",
        },
        {
            id: 3,
            title: "Summer",
            file: "summer.mp3",
            image: "./image/summer.jpg",
        },
        {
            id: 4,
            title: "Spark",
            file: "spark.mp3",
            image: "./image/spark.jpg",
        }
    ]
    const changeSong = (index) => {
        // console.log(index);
        switch (index) {
            case 0:
                audioRef.current.src = Holo;
                break;
            case 1:
                audioRef.current.src = Home;
                break;
            case 2:
                audioRef.current.src = Summer;
                break;
            case 3:
                audioRef.current.src = Spark;
                break;
            default:
                break;
        }
        // audioRef.current.play();
    }
    const nextSong = () => {
        if (indexSong < musics.length - 1) {
            setIndexSong(indexSong + 1);
            changeSong(indexSong);
        } else {
            setIndexSong(0);
            changeSong(indexSong);
        }
    }
    const prevSong = () => {
        if (indexSong > 0) {
            setIndexSong(indexSong - 1);
            changeSong(indexSong);
        } else {
            setIndexSong(musics.length - 1);
            changeSong(indexSong);
        }
    }
    const changeImg = (index) => {
        switch (index) {
            case 0:
                return HoloAvatar;
            case 1:
                return HomeAvatar;
            case 2:
                return SparkAvatar;
            case 3:
                return SummerAvatar;
            default:
                break;
        }
    }
    const changeTitle = (index) => {
        switch (index) {
            case 0:
                return "Holo";
            case 1:
                return "Home";
            case 2:
                return "Summer";
            case 3:
                return "Spark";
            default:
                break;
        }
    }

    function formatTimer(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
            }`;
    }


    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);
    useEffect(() => {
        const interval = setInterval(() => {
            setDuration(audioRef.current.duration ? audioRef.current.duration : 0);
            setCurrentTime(audioRef.current.currentTime ? audioRef.current.currentTime : 0);
            if (audioRef.current.currentTime === audioRef.current.duration) {
                nextSong();
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={style.bg}>
            <div className="music">
                <div className="music-thumb">
                    <img src={changeImg(indexSong)} alt="" />
                </div>
                <h3 className="music-name">{changeTitle(indexSong)}</h3>
                <input type="range" name="range" id="range" className="range"
                    value={currentTime}
                    max={duration}
                />
                <audio ref={audioRef} src={Holo} id="song" controls
                    autoPlay
                    style={{ display: 'none' }}
                />
                <div className="timer">
                    <div className="remaining">{formatTimer(currentTime)}</div>
                    <div className="duration">{formatTimer(duration)}</div>
                </div>
                <div className="controls">
                    <IoIosInfinite className="play-infinite" />
                    <IoIosSkipBackward className="play-back"
                        onClick={() => {
                            prevSong();
                        }}
                    />
                    <div className="play">
                        <div
                            className="player-inner"
                            onClick={() => {
                                setIsPlaying(!isPlaying);
                                console.log('click')
                                // audioRef.current.play()
                            }}
                        >
                            {isPlaying ?
                                <IoIosPause className="play-icon" />
                                :
                                <AiFillPlayCircle className="play-icon" />
                            }
                        </div>
                    </div>
                    <IoIosSkipForward className="play-forward"
                        onClick={() => {
                            nextSong();
                        }}
                    />
                    <IoIosRepeat className="play-repeat" />
                </div>
            </div>
        </div>

    );
}

export default Music;