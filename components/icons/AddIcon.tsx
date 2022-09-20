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
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 5C43.8075 5 55 16.1925 55 30C55 43.8075 43.8075 55 30 55C16.1925 55 5 43.8075 5 30C5 16.1925 16.1925 5 30 5ZM30 17.5C29.5469 17.5 29.1092 17.6641 28.7677 17.9619C28.4262 18.2597 28.2041 18.6711 28.1425 19.12L28.125 19.375V28.125H19.375C18.8999 28.1252 18.4427 28.3056 18.0955 28.6299C17.7484 28.9543 17.5373 29.3983 17.5049 29.8722C17.4726 30.3462 17.6213 30.8147 17.9211 31.1833C18.2209 31.5518 18.6494 31.7928 19.12 31.8575L19.375 31.875H28.125V40.625C28.1252 41.1001 28.3056 41.5574 28.6299 41.9045C28.9543 42.2516 29.3983 42.4627 29.8722 42.4951C30.3462 42.5275 30.8147 42.3787 31.1833 42.0789C31.5518 41.7791 31.7928 41.3506 31.8575 40.88L31.875 40.625V31.875H40.625C41.1001 31.8749 41.5574 31.6944 41.9045 31.3701C42.2516 31.0458 42.4627 30.6018 42.4951 30.1278C42.5275 29.6539 42.3787 29.1853 42.0789 28.8168C41.7791 28.4482 41.3506 28.2073 40.88 28.1425L40.625 28.125H31.875V19.375C31.875 18.8777 31.6775 18.4008 31.3258 18.0492C30.9742 17.6975 30.4973 17.5 30 17.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;