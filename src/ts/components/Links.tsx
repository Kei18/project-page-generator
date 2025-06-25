import * as React from "react";

interface Link {
  name: string;
  url: string;
}

interface LinksProps {
  links?: Link[];
  className?: string;
  badgeClassName?: string;
}

export const Links: React.SFC<LinksProps> = ({
  links,
  className,
  badgeClassName,
}) => {
  return (
    <div className={`text-center mt-3 ${className}`}>
      {links?.map((item, i) => (
        <a key={i} href={item.url} className={`badge ${badgeClassName}`}>
          {item.name}
        </a>
      ))}
    </div>
  );
};
