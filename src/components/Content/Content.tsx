import React, { useEffect, useState } from 'react';
import Video from '../Info';
import Carousel from '../Carousel';
import type { IContentProps } from './types';


const Content: React.FC<IContentProps> = ({ featured, trending, handleSelectMovie }) => {
    const [imagePaths, setImagePaths] = useState<string[]>([]);
    const [showVideo, setShowVideo] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [featured]);
    
    useEffect(() => {
        let isMounted = true;
      
        const loadImage = async () => {
          try {
            const imagePath = `/assets/${featured.CoverImage}`;
            if (isMounted) {
              setImagePaths([imagePath]);
            }
          } catch (error) {
            console.error('Error loading image:', error);
          }
        };
      
        if (featured?.CoverImage) {
          loadImage();
        }
      
        return () => {
          isMounted = false;
        };
      }, [featured]);
      
      

    return (
   <main className=" flex-1  flex flex-col justify-between  overflow-hidden ml-[80px] w-full bg-cover bg-center text-white rounded-xl  shadow-lg"
   style={{ backgroundImage: `url("${imagePaths[0]}")` }}
   >   
     {showVideo && (
        <video
          src={featured.VideoUrl}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
       {!videoLoaded && featured.VideoUrl && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

    <div>
    {featured && (
       <Video
         movie={featured}
       />
      )}
    </div>
      <section className="px-6 mt-8 z-10">
        <h2 className="text-xl font-bold text-white mb-4">Trending Now</h2>
        <Carousel movies={trending} onSelectMovie={handleSelectMovie} />
      </section>
    </main>
  );
};

export default Content;
