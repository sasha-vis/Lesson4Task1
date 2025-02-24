import styles from './inputBlock.module.css';
import PropTypes from 'prop-types';

export const InputBlock = ({ label, type, name, value, error, onChange, onBlur }) => {
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
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</div>
	);
};

InputBlock.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
};
