import * as yup from "yup";

export const ValidateSchema = yup.object().shape({
  username: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^(?=[a-zA-Z0-9._-]{3,20}$)(?!.*[._-]{2})[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]$/,
      "Введите корректный никнейм"
    ),
  email: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      "Введите корректный email"
    ),
  password: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(6, "Минимум 8 символов")
    .max(20, "Максимум 20 символов")
    .test(
      "has-uppercase",
      "Пароль должен содержать хотя бы одну заглавную букву",
      (value) => {
        if (!value) return false;
        return value
          .split("")
          .some(
            (char) => char === char.toUpperCase() && char !== char.toLowerCase()
          );
      }
    ),
  confirmedPassword: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
  date: yup.date().required("Поле обязательно для заполнения"),
  gender: yup.string().required("Поле обязательно для заполнения"),
  phoneNumber: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^\+?\d{10,15}$/,
      "Номер телефона должен содержать от 10 до 15 цифр, можно с ' + '"
    ),
});
