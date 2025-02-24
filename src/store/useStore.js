import { formValidationSchema } from './../utils/validateField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const initialState = {
	email: '',
	password: '',
	passwordRpt: '',
};

export const useStore = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		defaultValues: initialState,
		resolver: yupResolver(formValidationSchema),
		mode: 'all',
	});

	return { register, handleSubmit, errors, isValid, reset };
};
