import React from "react";

interface Types {
  className: string;
}
export const DeleteIcon: React.FC<Types> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
      <path
        d="M4 0V1.33333H0V2.66667H12V1.33333H8V0H4ZM1.33333 4V16H10.6667V4H1.33333ZM2.66667 5.33333H4V14.6667H2.66667V5.33333ZM5.33333 5.33333H6.66667V14.6667H5.33333V5.33333ZM8 5.33333H9.33333V14.6667H8V5.33333Z"
        fill="#EE4C45"
      />
    </svg>
  );
};
