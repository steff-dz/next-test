import React from 'react';

const InputBlock = ({ inputName, inputId, inputType, inputPlaceholder, labelText, inputChangeHandler }) => {
	return (
		<React.Fragment>
			<label htmlFor={inputId}>{labelText}</label>
			<input
				type={inputType}
				name={inputName}
				id={inputId}
				placeholder={inputPlaceholder}
				onChange={(e) => inputChangeHandler(e)}
			/>
		</React.Fragment>
	);
};

export default InputBlock;
