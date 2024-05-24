import React, { FormEvent, useEffect, useState } from 'react';
import { Button, Input, RadioButtonGroup, TextArea } from './components';
import useInput from './hooks/useInput';

const App: React.FC = () => {
  const firstNameInput = useInput('');
  const lastNameInput = useInput('');
  const emailInput = useInput('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateInput(firstNameInput);
    validateInput(lastNameInput);
    validateInput(emailInput);
  };

  const queryOptions = [
    {
      label: 'General Enquiry',
      name: 'button-types',
    },
    {
      label: 'Support Request',
      name: 'button-types',
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string>(
    queryOptions[0].label
  );

  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  useEffect(() => {
    // console.log(selectedValue);
  }, [selectedValue]);

  const validateInput = (input: {
    value: string;
    setError: (value: boolean) => void;
  }) => {
    if (!input.value.trim()) {
      input.setError(true);
    } else {
      input.setError(false);
    }
  };

  return (
    <main className='container'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          label='First Name'
          name='first-name'
          required
          errorMsg='This field is required'
          {...firstNameInput}
        />

        <Input
          type='text'
          label='Last Name'
          name='last-name'
          required
          errorMsg='This field is required'
          {...lastNameInput}
        />

        <Input
          type='email'
          label='Email Address'
          name='email'
          required
          errorMsg='Please enter a valid email address'
          {...emailInput}
        />

        <RadioButtonGroup
          label='Query Type:'
          options={queryOptions}
          onChange={radioGroupHandler}
          required
        />

        <TextArea label={'Message'} required />

        <div className='input__wrapper'>
          <input type='checkbox' id='consent' />
          <label htmlFor='consent'>
            I hereby consent to being contacted by the team *
          </label>
        </div>

        <Button type='submit' className='btn btn-primary'>
          Submit
        </Button>
      </form>
    </main>
  );
};
export default App;
