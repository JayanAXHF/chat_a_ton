import "./Button.css";
interface ButtonProps {
  primary: boolean;
  bgColor?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => any;
  styles?: string;
  children?: React.ReactNode;
}

const Button = ({
  primary,
  size = "medium",
  styles = "",

  children,
  onClick,
  ...props
}: ButtonProps) => {
  const secondaryStyles =
    "px-4 py-2 font-medium text-sm bg-white  rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500 dark:ring-offset-slate-900 dark:bg-slate-700 !text-slate-200 dark:border-transparent";
  const primaryStyles =
    "inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white text-slate-100";
  // "px-4 py-2 font-semibold dark:bg-blue-600 !text-slate-200 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500 dark:ring-offset-slate-900  dark:text-slate-200 dark:border-transparent bg-blue-600";
  return (
    <button
      className={`${size} ${
        primary ? primaryStyles : secondaryStyles
      } ${styles} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
