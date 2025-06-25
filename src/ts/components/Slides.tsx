import * as React from "react";

interface SlidesProps {
  slides?: string;
}

export const Slides: React.SFC<SlidesProps> = ({ slides }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">Slides</p>
      <div className="slide-wrapper">
        <iframe
          src={slides}
          allowFullScreen
          scrolling="no"
          allow="encrypted-media;"
        ></iframe>
      </div>
    </div>
  );
};
