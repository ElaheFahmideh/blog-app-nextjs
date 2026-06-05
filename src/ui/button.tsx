type TButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  className?: string;
};

const btnType = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  outline: 'btn--outline',
  danger: 'btn--danger',
};

function Button({ children, onClick, variant = 'primary', className, ...rest }: TButtonProps) {
  return (
    <button onClick={onClick} className={`btn ${btnType[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
