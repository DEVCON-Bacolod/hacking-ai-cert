export default function Button({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`btn-glow ${className}`} {...rest}>
      {rest.children}
    </button>
  );
}
