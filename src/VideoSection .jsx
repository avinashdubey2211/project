import React from 'react'

const VideoSection = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="rounded-2xl overflow-hidden shadow-lg w-[80%] md:w-[70%] aspect-video">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://video.wixstatic.com/video/343a2a_36912eb795e84ffda61243d603153b2d/360p/mp4/file.mp4"
          title="Dove Real Beauty Sketches"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        
        ></iframe>
      </div>
    </div>
  )
}

export default VideoSection
