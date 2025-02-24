import styles from './App.module.css';
import { InputBlock } from '../InputBlock/InputBlock';
import PropTypes from 'prop-types';

export const AppLayout = ({ sendForm, state, onChange, onBlur, submitButtonRef }) => {
	const { email, password, passwordRpt } = state;

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={sendForm}>
				<InputBlock
					label="Email"
					type="text"
					name="email"
					value={email.value}
					error={email.error}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<InputBlock
					label="Password"
					type="password"
					name="password"
					value={password.value}
					error={password.error}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<InputBlock
					label="Repeat password"
					type="password"
					name="passwordRpt"
					value={passwordRpt.value}
					error={passwordRpt.error}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<button
					className={styles.button}
					type="submit"
					ref={submitButtonRef}
					disabled={!!email.error || !!password.error || !!passwordRpt.error}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};

AppLayout.propTypes = {
	sendForm: PropTypes.func,
	state: PropTypes.object,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	submitButtonRef: PropTypes.obj,
};
