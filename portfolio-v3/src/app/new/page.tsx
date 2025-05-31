'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Preload the video as soon as the component mounts
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.volume = 0.6; // Set default volume to 60%
    }
  }, []);

  // Add effect to handle autoplay when video is shown
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.volume = 0.6; // Ensure volume is set when video is shown
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
            //   muted // Adding muted to ensure autoplay works in most browsers
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
