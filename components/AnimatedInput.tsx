import React from 'react'
import { motion } from "framer-motion";

const labelVariants = {
    initial: {
      top: 10,
      left: 16,
      opacity: .5
    },
    animated: {
      top: -24,
      left: 0,
      scale: 0.8,
      fontWeight: 500,
      opacity: 1
    },
  };

interface Props {
    type: React.HTMLInputTypeAttribute,
    value: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    name: string
}

export const AnimatedInput: React.FC<Props> = ({ 
    type, value, handleChange, name
 }) => {
    return (<div className="w-full relative">
    <motion.label
      className="absolute text"
      htmlFor={name}
      variants={labelVariants}
      initial="initial"
      animate={value.length > 0 ? "animated" : "initial"}
      transition={{
        duration: 0.15,
        ease: "easeIn",
      }}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </motion.label>
    <input
      id={name}
      className="w-full px-4 py-2"
      name={name}
      type={type}
      onChange={handleChange}
      value={value}
    />
  </div>);
}

export default AnimatedInput;