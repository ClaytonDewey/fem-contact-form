import React, { InputHTMLAttributes } from 'react';

export interface IOption {
  label: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface IInputGroup {
  label: string;
  options: IOption[];
  required?: boolean;
  hasFullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputElementProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: boolean;
  disabled?: boolean;
}

export interface IOption {
  label: string;
  name?: string;
  disabled?: boolean;
}

export interface IOptionGroup {
  label: string;
  options: IOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
