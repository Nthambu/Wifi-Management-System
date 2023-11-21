function Button() {
  const handleClick = () => {
    alert("button clicked");
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
export default Button;
