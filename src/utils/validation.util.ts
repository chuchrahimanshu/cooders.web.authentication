export const validateOnlyAlphabets = (value: string) => {
  return /^[A-Za-z]+$/.test(value);
};

export const validateEmailAddress = (value: string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
};

export const validateUsername = (value: string) => {
  return /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/.test(value);
};

export const validatePassword = (value: string) => {
  return (
    /^[A-Za-z\d@#$%&!?]{8,30}$/.test(value) &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!?]).*$/.test(value)
  );
};
