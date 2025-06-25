import * as React from "react";

interface ContactProps {
  contact?: string;
}

export const Contact: React.SFC<ContactProps> = ({ contact }) => {
  return (
    <div className="mx-auto mt-5">
      <p className="h5">Contact</p>
      <p>{contact}</p>
    </div>
  );
};
