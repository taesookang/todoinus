import React from "react";

interface Props {
  title: string;
  style?: "outline" | "fill";
  callback?: () => void
}

export const CTA: React.FC<Props> = ({ title, style = "fill", callback = () => {} }) => {
  return (
    <button
      className={`flex items-center justify-center capitalize min-w-[92px] px-4 py-2 ${
        style === "outline" ? "bg-transparent text-brand-300 border-brand-300 border" : "bg-brand-300 text-white"
      } rounded-sm font-medium text-sm`}

      onClick={callback}
    >
      {title}
    </button>
  );
};

export default CTA;
