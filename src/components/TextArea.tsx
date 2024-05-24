interface TextAreaProps {
  label: string;
  required?: boolean;
}

const TextArea = ({ label, required }: TextAreaProps) => {
  return (
    <div className='input__wrapper'>
      <label htmlFor='message' className='input-group__label'>
        {label}
        {required && <span>*</span>}
      </label>
      <textarea id='message' required />
    </div>
  );
};
export default TextArea;
