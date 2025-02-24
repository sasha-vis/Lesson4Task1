import { object, string, ref } from 'yup';

export const formValidationSchema = object().shape({
	email: string()
		.required('Поле не должно быть пустым')
		.matches(
			/^[a-z0-9._@]*$/,
			'Введен недопустимый символ. Почта может содержать латинские строчные буквы, цифры и знаки: ".", "_", "@"',
		)
		.min(10, 'Почта не должна быть меньше 10 символов')
		.max(50, 'Почта не должна быть больше 50 символов')
		.matches(/^[a-z0-9._]+@[a-z]+\.[a-z]+$/, 'Неверно введена почта'),
	password: string()
		.required('Поле не должно быть пустым')
		.matches(
			/^[\w_]*$/,
			'Введен недопустимый символ. Пароль может содержать только латинские буквы, цифры и знак "_"',
		)
		.min(8, 'Пароль не должен быть меньше 8 символов')
		.max(20, 'Пароль не должен превышать 20 символов')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
			'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру',
		),
	passwordRpt: string()
		.required('Поле не должно быть пустым')
		.oneOf([ref('password'), null], 'Пароли должны совпадать'),
});
