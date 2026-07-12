import { NavLink } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded font-semibold transition-colors duration-300 cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    light: "bg-white text-primary hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <NavLink to={to} className={classes}>
        {children}
      </NavLink>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;