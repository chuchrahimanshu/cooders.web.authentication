import React from "react";
import { FormProps } from "../types/components/props.types";
import Skip from "./Skip";

const Form: React.FC<FormProps> = ({
  children,
  handleFormSubmit,
  id,
  heading,
  showSkip,
  handleSkipClicked,
}) => {
  return (
    <form
      className="bg-SECONDARY_BACKGROUND py-5 px-6 rounded-2xl flex flex-col gap-4 shadow-sm"
      id={id}
      onSubmit={handleFormSubmit}>
      {showSkip && handleSkipClicked ? (
        <section className="flex items-center justify-between">
          <h1 className="text-[22px] text-white font-semibold mb-2">
            {heading}
          </h1>
          <Skip handleSkipClicked={handleSkipClicked} />
        </section>
      ) : (
        <h1 className="text-[22px] text-white font-semibold mb-2">{heading}</h1>
      )}
      {children}
    </form>
  );
};

export default Form;
