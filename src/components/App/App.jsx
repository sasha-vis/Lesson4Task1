import { useEffect, useRef } from 'react';
import { AppLayout } from './AppLayout';
import { useStore } from '../../store/useStore';

export const App = () => {
	const { register, handleSubmit, errors, isValid, reset } = useStore();
	const submitButtonRef = useRef(null);

	const sendFormData = (formData) => {
		console.log(formData);
		reset();
	};

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current?.focus();
		}
	}, [isValid]);

	return (
		<AppLayout
			onSubmit={handleSubmit(sendFormData)}
			register={register}
			errors={errors}
			submitButtonRef={submitButtonRef}
			isValid={isValid}
		/>
	);
};
