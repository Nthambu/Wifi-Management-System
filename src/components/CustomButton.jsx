function CustomButton({ text, ...props }) {
  return (
    <button className="button" {...props}>
      {text}
    </button>
  );
}
export default CustomButton;
