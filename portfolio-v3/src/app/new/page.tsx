'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start preloading the video immediately
    if (preloadRef.current) {
      preloadRef.current.load();
    }
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.6;
    }
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay failed:", error);
      });
    }
  }, [showVideo]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Hidden preloader video */}
      <video
        ref={preloadRef}
        muted
        autoPlay
        loop
        className="hidden"
        preload="auto"
      >
        <source src="/rick_roll.mp4" type="video/mp4" />
      </video>

      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-blue-500/30 animate-gradient-y" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x-reverse" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {!showVideo ? (
          <>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in">
              Anay Paraswani
            </h1>
            <button
              onClick={() => setShowVideo(true)}
              className="px-8 py-4 text-xl font-semibold text-white bg-white/10 backdrop-blur-lg rounded-full 
                       hover:bg-white/20 transition-all duration-300 transform hover:scale-105
                       border border-white/20 shadow-lg hover:shadow-xl"
            >
              View Portfolio
            </button>
          </>
        ) : (
          <div className="w-full max-w-4xl aspect-video animate-fade-in">
            <video
              ref={videoRef}
              className="w-full h-full rounded-lg shadow-2xl"
              onClick={handleVideoClick}
              controls
              preload="auto"
              autoPlay
            >
              <source src="/rick_roll.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
