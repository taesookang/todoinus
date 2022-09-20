import React, { useRef } from "react";
import { useClickOutside } from "../../hooks";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const layoutVariants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const ModalLayout: React.FC<Props> = ({
  children,
  title,
  setIsOpen,
}) => {
  const windowRef = useRef(null);
  useClickOutside(windowRef, () => setIsOpen(false));

  return (
    <motion.div
      className="fixed bottom-0 left-0 w-screen h-[calc(100vh-50px)] z-30 bg-brand-black/30 flex justify-center items-center"
      variants={layoutVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
    >
      <button className="absolute top-3 right-3">
        <Image src="/icons/close.svg" width={52} height={52} />
      </button>
      <div
        ref={windowRef}
        className="w-full max-w-[500px] bg-white px-4 p-4 rounded-sm shadow-md"
      >
        <div className="w-full pb-4 px-4 border-b border-brand-border flex items-center justify-center text-brand-black font-medium">
          {title}
        </div>
        <div className="w-full p-4 flex flex-col justify-center ">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default ModalLayout;
