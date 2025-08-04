import { Controller, useForm } from "react-hook-form";

const ControllerForm = ({
 label,
  name,
  control,
  errors,
  required,
  pattern,
  minLength,
  placeholder,
  InputName,
}) => {
 ;
  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required,
          pattern,
          minLength,
        }}
        render={({ field }) => (
          <InputName {...field} placeholder={placeholder} />
        )}
      ></Controller>
      <p style={{ color: "red" }}>{errors[name]?.message}</p>
    </div>
  );
};

export default ControllerForm;
