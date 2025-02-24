import styles from './inputBlock.module.css';
import PropTypes from 'prop-types';

export const InputBlock = ({ label, type, name, register, error }) => {
	return (
		<div className={styles.inputBlock}>
			<label htmlFor={name}>
				{label}*:
				<span className={styles.error}>{error}</span>
			</label>
			<input
				type={type}
				id={name}
				name={name}
				autoComplete="off"
				{...register(name)}
			/>
		</div>
	);
};

InputBlock.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	register: PropTypes.func,
	error: PropTypes.string,
};
