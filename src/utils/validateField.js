export const validateEmailOnChange = (value) => {
	let error = null;
	if (!/^[a-z0-9._@]*$/.test(value)) {
		error =
			'Введен недопустимый символ. Почта может содержать латинские строчные буквы, цифры и знаки: ".", "_", "@"';
	} else if (value.length > 50) {
		error = 'Почта не должна быть больше 50 символов';
	}
	return error;
};

export const validateEmailOnBlur = (value) => {
	let error = null;
	if (value.length === 0) {
		error = 'Поле не должно быть пустым';
	} else if (!/^[a-z0-9._]+@[a-z]+\.[a-z]+$/.test(value)) {
		error = 'Неверно введена почта';
	} else if (value.length < 10) {
		error = 'Почта не должна быть меньше 10 символов';
	}
	return error;
};

export const validatePasswordOnChange = (value) => {
	let error = null;
	if (!/^[\w_]*$/.test(value)) {
		error =
			'Введен недопустимый символ. Пароль может содержать только латинские буквы, цифры и знак "_"';
	} else if (value.length > 20) {
		error = 'Пароль не должен превышать 20 символов';
	}
	return error;
};

export const validatePasswordOnBlur = (value) => {
	let error = null;
	if (value.length === 0) {
		error = 'Поле не должно быть пустым';
	} else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value)) {
		error =
			'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру';
	} else if (value.length < 8) {
		error = 'Пароль не должен быть меньше 8 символов';
	}
	return error;
};

export const validatePasswordRptOnChange = () => {
	let error = null;
	return error;
};

export const validatePasswordRptOnBlur = (value, password) => {
	let error = null;
	if (value.length === 0) {
		error = 'Поле не должно быть пустым';
	} else if (value !== password) {
		error = 'Пароли должны совпадать';
	}
	return error;
};
