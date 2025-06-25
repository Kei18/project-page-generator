import * as React from "react";

interface AbstractProps {
  abstract?: string;
}

export const Abstract: React.SFC<AbstractProps> = ({ abstract }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">Overview</p>
      <div
        className="text-secondary"
        dangerouslySetInnerHTML={{ __html: abstract }}
      ></div>
    </div>
  );
};
