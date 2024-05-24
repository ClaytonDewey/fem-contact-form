import { IInputGroup, IOption } from '../types/InputInterface';
import { RadioButton } from '.';

const RadioButtonGroup = ({
  label,
  options,
  required,
  onChange,
}: IInputGroup) => {
  const renderOptions = () => {
    return options.map(({ label, name, disabled }: IOption, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, '');
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioButton
          value={label}
          label={label}
          key={optionId}
          id={optionId}
          name={name}
          disabled={disabled}
          defaultChecked={index === 0}
          required
          onChange={onChange}
        />
      );
    });
  };

  return (
    <fieldset>
      <legend>
        {label}
        {required && <span>*</span>}
      </legend>
      <div className='radio__wrapper'>{renderOptions()}</div>
    </fieldset>
  );
};
export default RadioButtonGroup;
