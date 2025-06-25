import * as React from "react";

interface HeaderProps {
  title?: string;
}

export const Header: React.SFC<HeaderProps> = ({ title }) => {
  return (
    <div className="container">
      {title ? <p className="h1 text-center">{title}</p> : ""}
    </div>
  );
};
