export default function Button({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`transition-colors px-6 py-2 rounded border border-white/40 font-normal text-sm sm:text-base ${className}`}
      {...rest}
    >
      {rest.children}
    </button>
  );
}
