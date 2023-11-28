import { useField } from "formik";

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <>
      <input
        {...props}
        {...field}
        className={
          meta.touched && meta.error
            ? "form_control input-error"
            : "form_control"
        }
      />
      {meta.touched && meta.error ? (
        <p className="text_error">{meta.error}</p>
      ) : null}
    </>
  );
};
export default CustomInput;
