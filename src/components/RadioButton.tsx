import { InputElementProps } from '../types/InputInterface';

const RadioButton = ({
  label,
  id,
  disabled = false,
  ...rest
}: InputElementProps) => (
  <div className='radio__wrapper-item'>
    <input id={id} type='radio' disabled={disabled} {...rest} />
    <label htmlFor={id} className='radio__wrapper-label'>
      {label}
      <span className='checkmark'></span>
    </label>
  </div>
);

export default RadioButton;
