import React from "react";

interface Props {
  size: number;
  color: string;
}

export const Logo: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77381 2.83697C7.67437 2.76507 8.52928 2.41086 9.21681 1.82477C9.99333 1.1634 10.98 0.800171 12 0.800171C13.02 0.800171 14.0067 1.1634 14.7832 1.82477C15.4707 2.41086 16.3256 2.76507 17.2262 2.83697C18.2432 2.91825 19.198 3.35912 19.9194 4.08055C20.6409 4.80197 21.0817 5.75677 21.163 6.77378C21.2344 7.67398 21.5886 8.52938 22.1752 9.21677C22.8366 9.9933 23.1998 10.98 23.1998 12C23.1998 13.02 22.8366 14.0066 22.1752 14.7832C21.5891 15.4707 21.2349 16.3256 21.163 17.2262C21.0817 18.2432 20.6409 19.198 19.9194 19.9194C19.198 20.6408 18.2432 21.0817 17.2262 21.163C16.3256 21.2349 15.4707 21.5891 14.7832 22.1752C14.0067 22.8365 13.02 23.1998 12 23.1998C10.98 23.1998 9.99333 22.8365 9.21681 22.1752C8.52928 21.5891 7.67437 21.2349 6.77381 21.163C5.7568 21.0817 4.802 20.6408 4.08058 19.9194C3.35915 19.198 2.91828 18.2432 2.837 17.2262C2.7651 16.3256 2.41089 15.4707 1.82481 14.7832C1.16343 14.0066 0.800201 13.02 0.800201 12C0.800201 10.98 1.16343 9.9933 1.82481 9.21677C2.41089 8.52925 2.7651 7.67434 2.837 6.77378C2.91828 5.75677 3.35915 4.80197 4.08058 4.08055C4.802 3.35912 5.7568 2.91825 6.77381 2.83697ZM17.1898 10.1898C17.4448 9.92573 17.5859 9.57209 17.5828 9.20501C17.5796 8.83794 17.4323 8.4868 17.1728 8.22723C16.9132 7.96766 16.562 7.82042 16.195 7.81723C15.8279 7.81404 15.4742 7.95515 15.2102 8.21018L10.6 12.8204L8.78981 11.0102C8.52576 10.7552 8.17212 10.614 7.80504 10.6172C7.43797 10.6204 7.08683 10.7677 6.82726 11.0272C6.56769 11.2868 6.42045 11.6379 6.41726 12.005C6.41407 12.3721 6.55518 12.7257 6.81021 12.9898L9.61021 15.7898C9.87274 16.0522 10.2288 16.1997 10.6 16.1997C10.9712 16.1997 11.3273 16.0522 11.5898 15.7898L17.1898 10.1898Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;