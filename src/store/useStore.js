import { useState } from 'react';

const initialState = {
	email: {
		value: '',
		error: null,
	},
	password: {
		value: '',
		error: null,
	},
	passwordRpt: {
		value: '',
		error: null,
	},
};

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateValue: (name, newValue) => {
			setState((prevState) => ({
				...prevState,
				[name]: { ...prevState[name], value: newValue },
			}));
		},
		updateError: (name, newError) => {
			setState((prevState) => ({
				...prevState,
				[name]: { ...prevState[name], error: newError },
			}));
		},
		resetState() {
			setState(initialState);
		},
	};
};
