import * as React from "react";

interface CitationProps {
  citation?: string;
}

export const Citation: React.SFC<CitationProps> = ({ citation }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">Citation</p>
      <div className="citation mb-3 text-secondary">
        <pre>
          <code>{citation}</code>
        </pre>
      </div>
    </div>
  );
};
