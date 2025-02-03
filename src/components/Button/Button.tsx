

const Button = ({ className, onRemove, title, ariaLabel, buttonIcon }: { onRemove: (e: React.MouseEvent) => void, className: string, title: string, ariaLabel: string, buttonIcon: string }) => (
    <button 
      className={className} 
      onClick={onRemove}
      title={title}
      aria-label={ariaLabel}
    >
      <img src={buttonIcon} alt="" />
    </button>
  );

  export default Button;