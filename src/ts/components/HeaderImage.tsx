import * as React from "react";
import images_gif from "../../images/*.gif";
import images_png from "../../images/*.png";

interface HeaderImageProps {
  headerImage?: string;
}

export const HeaderImage: React.SFC<HeaderImageProps> = ({ headerImage }) => {
  return (
    <div className="row mt-3">
      {images_gif[headerImage] ? (
        <img src={images_gif[headerImage]} className="img-fluid" />
      ) : (
        ""
      )}
      {images_png[headerImage] ? (
        <img src={images_png[headerImage]} className="img-fluid" />
      ) : (
        ""
      )}
    </div>
  );
};
