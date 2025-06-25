import * as React from "react";

interface FooterProps {
  copyright?: string;
}

export const Footer: React.SFC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="footer mt-auto">
      <div className="container pt-3">
        <p className="text-center">
          &copy;{new Date().getFullYear()} {copyright}
        </p>
      </div>
    </footer>
  );
};
