import React from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  object;
const Button = (props: Props) => {
  const { children } = props;
  return <button {...props}>{children}</button>;
};
export default Button;
