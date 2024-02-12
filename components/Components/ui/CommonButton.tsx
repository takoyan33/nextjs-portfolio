import React from "react";

interface CommonButtonProps {
  text: string;
  className?: string;
  handleClick?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  className = "",
  handleClick,
}) => {
  return (
    <button onClick={handleClick} className={`main__btn ${className}`}>
      {text}
    </button>
  );
};

export default CommonButton;
