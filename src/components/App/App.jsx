import { useState, useRef, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import * as validateField from '../../utils/validateField';
import { AppLayout } from './AppLayout';

const sendFormData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const { getState, updateValue, updateError, resetState } = useStore();
	const state = getState();
	const { email, password, passwordRpt } = state;
	const [isFormValid, setIsFormValid] = useState(false);
	const submitButtonRef = useRef(null);

	const onChange = ({ target: { name, value } }) => {
		updateValue(name, value);

		let error = null;
		if (name === 'email') {
			error = validateField.validateEmailOnChange(value);
		} else if (name === 'password') {
			error = validateField.validatePasswordOnChange(value);
		} else if (name === 'passwordRpt') {
			error = validateField.validatePasswordRptOnChange(value);
		}
		updateError(name, error);
	};

	const onBlur = ({ target: { name, value } }) => {
		if (state[name].error) return;

		let error = null;
		if (name === 'email') {
			error = validateField.validateEmailOnBlur(value);
		} else if (name === 'password') {
			error = validateField.validatePasswordOnBlur(value);
		} else if (name === 'passwordRpt') {
			error = validateField.validatePasswordRptOnBlur(value, password.value);
		}
		updateError(name, error);
	};

	const validateAllFields = () => {
		if (!email.value) {
			updateError('email', validateField.validateEmailOnBlur(''));
		}
		if (!password.value) {
			updateError('password', validateField.validatePasswordOnBlur(''));
		}
		if (!passwordRpt.value) {
			updateError('passwordRpt', validateField.validatePasswordRptOnBlur(''));
		}

		const hasErrors = Object.values(state).some((field) => field.error);
		setIsFormValid(!hasErrors);
	};

	const sendForm = (event) => {
		event.preventDefault();

		validateAllFields();
		if (!isFormValid) return;

		sendFormData(state);
		resetState();
	};

	useEffect(() => {
		if (isFormValid) {
			submitButtonRef.current?.focus();
		}
	}, [isFormValid]);

	return (
		<AppLayout
			sendForm={sendForm}
			state={state}
			onChange={onChange}
			onBlur={onBlur}
			submitButtonRef={submitButtonRef}
		/>
	);
};
