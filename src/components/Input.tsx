import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string | number;
  name: string;
  error: boolean;
  errorMsg: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  error,
  errorMsg,
  disabled,
  required,
  onChange,
  className,
}) => {
  return (
    <div className={className ? `${className} input-group` : 'input-group'}>
      <label htmlFor={label} className='input-group__label'>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        className='input-group__input'
        type={type}
        id={label}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
      <span className='input-group__error'>{errorMsg}</span>
      {error && <span className='error'>{errorMsg}</span>}
    </div>
  );
};
export default Input;
