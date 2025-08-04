import { Radio } from 'antd'
import { Controller } from 'react-hook-form'

const ControllerForm = ({
	label,
	name,
	control,
	errors,
	required,
	validate,
	pattern,
	minLength,
	placeholder,
	InputName,
	RadioValues,
}) => {
	let render = ({ field }) => <InputName {...field} placeholder={placeholder} />

	if (InputName === Radio) {
		render = ({ field }) => (
			<Radio.Group {...field} placeholder={placeholder}>
				{Object.keys(RadioValues).map((item, index) => (
					<Radio key={item} value={item}>
						{Object.values(RadioValues)[index]}
					</Radio>
				))}
			</Radio.Group>
		)
	}
	return (
		<div>
			<label>{label}</label>
			<Controller
				name={name}
				control={control}
				rules={{
					required,
					validate,
					pattern,
					minLength,
				}}
				render={render}
			></Controller>
			<p style={{ color: 'red' }}>{errors[name]?.message}</p>
		</div>
	)
}

export default ControllerForm
