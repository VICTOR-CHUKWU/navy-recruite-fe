'use client'
import React, { memo, useRef } from 'react';

interface VideoPlayerProps {
    videoSrc: string;
}

const _VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="video-player-container">
            <video ref={videoRef} loop={false} className="video-player" >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button className="play-button" onClick={handlePlay}>
                <span className="material-icons text-slate-400">
                    play_circle
                </span>
            </button>
        </div>
    );
};

export const VideoPlayer = memo(_VideoPlayer);