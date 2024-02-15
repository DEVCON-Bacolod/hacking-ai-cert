export default function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="textInputWrapper w-full">
      <input className="textInput" {...rest} />
    </div>
  );
}
