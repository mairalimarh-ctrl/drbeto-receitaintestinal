
import React from 'react';

interface LiteVideoPlayerProps {
  videoId: string;
  aspectRatio?: string;
  params?: string;
  baseUrl?: string;
}

const LiteVideoPlayer: React.FC<LiteVideoPlayerProps> = ({ 
  videoId, 
  aspectRatio = "9:16", 
  params = "", 
  baseUrl = "https://app.litevideo.net" 
}) => {
  return (
    <div className="w-full max-w-[350px] md:max-w-[380px] mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-white aspect-[9/16] bg-black relative">
      {/* 
        Garantimos que o player ocupe 100% do container que já está na proporção correta.
      */}
      {React.createElement('lite-video-player', {
        'video-id': videoId,
        'aspect-ratio': aspectRatio,
        'base-url': baseUrl,
        'params': params,
        'style': { 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%' 
        }
      } as any)}
    </div>
  );
};

export default LiteVideoPlayer;
