export const validateOnlyAlphabets = (value: string): boolean => {
  return /^[A-Za-z]+$/.test(value);
};

export const validateEmailAddress = (value: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
};

export const validateUsername = (value: string): boolean => {
  return /^[a-z0-9_]{3,20}$/.test(value);
};

export const validatePassword = (value: string): boolean => {
  return (
    /^[A-Za-z\d@#$%&!?]{8,30}$/.test(value) &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!?]).*$/.test(value)
  );
};
