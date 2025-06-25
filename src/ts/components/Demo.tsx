import * as React from "react";
import images_gif from "../../images/*.gif";

interface DemoItem {
  image?: string;
  description?: string;
}

interface DemoProps {
  demo?: DemoItem[];
}

export const Demo: React.SFC<DemoProps> = ({ demo }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">Demo</p>
      <div className="row">
        {demo?.map((item, i) => {
          return (
            <div key={i} className="col-md text-center">
              {item.image ? (
                <img src={images_gif[item.image]} className="img-fluid" />
              ) : (
                ""
              )}
              {item.description ? <p>{item.description}</p> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};
