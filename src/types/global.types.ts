export interface FormSubmitInterface {
  preventDefault: () => void;
}

export interface FormChangeInterface {
  target: { name: string; value: string | number };
}
