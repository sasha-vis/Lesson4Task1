import styles from './App.module.css';
import { InputBlock } from '../InputBlock/InputBlock';
import PropTypes from 'prop-types';

export const AppLayout = ({ onSubmit, submitButtonRef, register, errors, isValid }) => {
	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={onSubmit}>
				<InputBlock
					label="Email"
					type="text"
					name="email"
					error={errors['email']?.message}
					register={register}
				/>
				<InputBlock
					label="Password"
					type="password"
					name="password"
					error={errors['password']?.message}
					register={register}
				/>
				<InputBlock
					label="Repeat password"
					type="password"
					name="passwordRpt"
					error={errors['passwordRpt']?.message}
					register={register}
				/>
				<button
					className={styles.button}
					type="submit"
					ref={submitButtonRef}
					disabled={!isValid}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};

AppLayout.propTypes = {
	onSubmit: PropTypes.func,
	submitButtonRef: PropTypes.object,
	register: PropTypes.func,
	errors: PropTypes.object,
	isValid: PropTypes.bool,
};
