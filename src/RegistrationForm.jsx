import { Input, Radio, DatePicker, Button } from 'antd'

import { useForm } from 'react-hook-form'
import ControllerForm from './ControllerForm'
import { useState } from 'react'

const RegistrationForm = () => {
	const [visible, setVisible] = useState(false)
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		alert(JSON.stringify(data))
		setVisible(!visible)
	}

	const password = watch('password')

	const RadioGender = {
		male: 'Мужской',
		female: 'Женский',
	}

	return (
		<form
			style={{
				textAlign: 'left',
				border: '3px solid black',
				padding: 15,
				borderRadius: '20px',
			}}
			onSubmit={handleSubmit(onSubmit)}
		>
			<ControllerForm
				label='Имя пользователя'
				name='username'
				control={control}
				errors={errors}
				required='Поле обязательно для заполнения'
				pattern={{
					value:
						/^(?=[a-zA-Z0-9._-]{3,20}$)(?!.*[._-]{2})[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]$/,
					message: 'Введите корректный никнейм',
				}}
				placeholder='Никнейм'
				InputName={Input}
			/>
			<ControllerForm
				label='Электронная почта'
				name='email'
				control={control}
				errors={errors}
				required='Поле обязательно для заполнения'
				pattern={{
					value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
					message: 'Введите корректный email',
				}}
				placeholder='Почта'
				InputName={Input}
			/>
			<ControllerForm
				label='Пароль'
				name='password'
				control={control}
				errors={errors}
				required='Поле обязательно для заполнения'
				minLength={{
					value: 6,
					message: 'Пароль должен быть от 6 символов',
				}}
				validate={value =>
					value
						.split('')
						.some(
							item =>
								isNaN(item) &&
								item.toLowerCase() !== item &&
								item === item.toUpperCase()
						) || 'Добавьте хотя бы одну заглавную букву'
				}
				placeholder='Пароль'
				InputName={Input.Password}
			/>
			<ControllerForm
				label='Подтверждение пароля'
				name='confirmedPassword'
				control={control}
				errors={errors}
				required='Поле обязательно для заполнения'
				validate={value => value == password || 'Пароли не совпадают'}
				placeholder='Пароль'
				InputName={Input.Password}
			/>
			<ControllerForm
				label='Дата рождения: '
				name='date'
				control={control}
				errors={errors}
				required='Поле обязательно для заполнения'
				placeholder='Дата рождения'
				InputName={DatePicker}
			/>
			<ControllerForm
				label='Выберите пол: '
				name='gender'
				control={control}
				errors={errors}
				required='Поле обязательно для заполнения'
				placeholder='Пол'
				InputName={Radio}
				RadioValues={RadioGender}
			/>
			<ControllerForm
				label='Номер телефона'
				name='phoneNumber'
				control={control}
				errors={errors}
				required='Поле обязательно для заполнения'
				validate={value =>
					value.split('').every(num => !isNaN(num)) || 'Допустимы только цифры'
				}
				placeholder='Номер телефона'
				InputName={Input}
			/>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Button type='primary' htmlType='submit'>
					Зарегистрироваться
				</Button>
				<p style={{ color: 'green' }}>
					{visible ? 'Успешная регистрация!' : ''}
				</p>
			</div>
		</form>
	)
}

export default RegistrationForm
