import * as React from "react";

interface VideoProps {
  video?: string;
}

export const Video: React.SFC<VideoProps> = ({ video }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">Video</p>
      <div className="text-center video-wrapper">
        <iframe
          src={video}
          width="854"
          height="480"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
