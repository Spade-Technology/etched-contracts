import React from "react";

interface Types {
  className: string;
}
export const BarIcon: React.FC<Types> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
      <path
        d="M2.5 13C3.88071 13 5 11.8807 5 10.5C5 9.11929 3.88071 8 2.5 8C1.11929 8 0 9.11929 0 10.5C0 11.8807 1.11929 13 2.5 13Z"
        fill="#097B45"
      />
      <path
        d="M2.5 21C3.88071 21 5 19.8807 5 18.5C5 17.1193 3.88071 16 2.5 16C1.11929 16 0 17.1193 0 18.5C0 19.8807 1.11929 21 2.5 21Z"
        fill="#097B45"
      />
      <path
        d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"
        fill="#097B45"
      />
    </svg>
  );
};
