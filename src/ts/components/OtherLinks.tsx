import * as React from "react";

interface OtherLink {
  name: string;
  url: string;
}

interface OtherLinksProps {
  otherLinks?: OtherLink[];
}

export const OtherLinks: React.SFC<OtherLinksProps> = ({ otherLinks }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">Other Links</p>
      <ul>
        {otherLinks?.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
