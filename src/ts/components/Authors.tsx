import * as React from "react";

interface Author {
  name: string;
  url?: string;
  affiliation?: string;
}

interface AuthorsProps {
  authors?: Author[];
}

export const Authors: React.SFC<AuthorsProps> = ({ authors }) => {
  return (
    <div className="text-center row authors mt-3">
      {authors?.map((item, i) => {
        if (item.url) {
          return (
            <div key={i} className="col-sm">
              <a href={item.url} className="h5">
                {item.name}
              </a>
              {item.affiliation ? (
                <small>
                  <br />
                  <span className="text-secondary">{item.affiliation}</span>
                </small>
              ) : (
                ""
              )}
            </div>
          );
        } else {
          return (
            <div key={i} className="col-sm">
              <span className="h5">{item.name}</span>
              {item.affiliation ? (
                <small>
                  <br />
                  <span className="text-secondary">{item.affiliation}</span>
                </small>
              ) : (
                ""
              )}
            </div>
          );
        }
      })}
    </div>
  );
};
