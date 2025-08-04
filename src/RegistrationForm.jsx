import { Input, Radio, Checkbox, DatePicker, Button, message } from "antd";

import { useForm } from "react-hook-form";
import ControllerForm from "./ControllerForm";
import Password from "antd/es/input/Password";

const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("Успешно зарегистрировано");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControllerForm
        label="Имя пользователя"
        name="username"
        control={control}
        errors={errors}
        required="Поле обязательно для заполнения"
        pattern={{
          value:
            /^(?=[a-zA-Z0-9._-]{3,20}$)(?!.*[._-]{2})[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]$/,
          message: "Введите корректный никнейм",
        }}
        placeholder="Никнейм"
        InputName={Input}
      />
      <ControllerForm
        label="Электронная почта"
        name="email"
        control={control}
        errors={errors}
        required="Поле обязательно для заполнения"
        pattern={{
          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
          message: "Введите корректный email",
        }}
        placeholder="Почта"
        InputName={Input}
      />
      <ControllerForm
        label="Пароль"
        name="password"
        control={control}
        errors={errors}
        required="Поле обязательно для заполнения"
        minLength={{
          value: 6,
          message: "Пароль должен быть от 6 символов",
        }}
        placeholder="Пароль"
        InputName={Password}
      />
      <Button type="primary" htmlType="submit">
        Отправить
      </Button>
    </form>
  );
};

export default RegistrationForm;
