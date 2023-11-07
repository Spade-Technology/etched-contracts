import React from "react";

interface Types {
  className: string;
}
export const GoodIcon: React.FC<Types> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
      <path d="M0 4.34032L3.76688 8L11 0.993029L9.96157 0L3.76688 5.99998L1.02406 3.34029L0 4.34032Z" fill="#097B45" />
    </svg>
  );
};
