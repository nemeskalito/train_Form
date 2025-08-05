import { Input, Radio, DatePicker, Button } from "antd";

import { useForm } from "react-hook-form";
import ControllerForm from "./ControllerForm";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidateSchema } from "./ValidateYup";

const RegistrationForm = () => {
  const [visible, setVisible] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidateSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setVisible(!visible);
  };

  const RadioGender = {
    male: "Мужской",
    female: "Женский",
  };

  return (
    <form
      style={{
        textAlign: "left",
        border: "3px solid black",
        padding: 15,
        borderRadius: "20px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ControllerForm
        label="Имя пользователя"
        name="username"
        control={control}
        errors={errors}
        placeholder="Никнейм"
        InputName={Input}
      />
      <ControllerForm
        label="Электронная почта"
        name="email"
        control={control}
        errors={errors}
        placeholder="Почта"
        InputName={Input}
      />
      <ControllerForm
        label="Пароль"
        name="password"
        control={control}
        errors={errors}
        placeholder="Пароль"
        InputName={Input.Password}
      />
      <ControllerForm
        label="Подтверждение пароля"
        name="confirmedPassword"
        control={control}
        errors={errors}
        placeholder="Пароль"
        InputName={Input.Password}
      />
      <ControllerForm
        label="Дата рождения: "
        name="date"
        control={control}
        errors={errors}
        placeholder="Дата рождения"
        InputName={DatePicker}
      />
      <ControllerForm
        label="Выберите пол: "
        name="gender"
        control={control}
        errors={errors}
        placeholder="Пол"
        InputName={Radio}
        RadioValues={RadioGender}
      />
      <ControllerForm
        label="Номер телефона"
        name="phoneNumber"
        control={control}
        errors={errors}
        placeholder="Номер телефона"
        InputName={Input}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
        <p style={{ color: "green" }}>
          {visible ? "Успешная регистрация!" : ""}
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
