import joi from 'joi';

export const validateEmail = (email: string): boolean => {
  const schema = joi.string().email();
  const { error } = schema.validate(email);
  return !error;
};

export const validatePassword = (password: string): boolean => {
  const schema = joi.string().min(8).max(30);
  const { error } = schema.validate(password);
  return !error;
};

