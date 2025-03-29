const Button = ({ onClick, label, disabled, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="btn"
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
