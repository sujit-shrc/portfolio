import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styleType?: "normal" | "bordered" | "selected";
  width?: string;
}

const index: React.FC<ButtonProps> = ({
  text,
  onClick,
  styleType = "normal",
  width,
  ...props
}) => {
  const styleClasses = {
    normal: "bg-blue-500 text-white hover:bg-blue-600",
    bordered: "border border-blue-500 text-blue-500 hover:bg-blue-100",
    selected: "bg-green-500 text-white hover:bg-green-600",
  };

  return (
    <button
      className={`px-4 py-2 rounded ${styleClasses[styleType] || styleClasses.normal}`}
      style={{ width }}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default index;
