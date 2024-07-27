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
      className="bg-overlay-background py-5 px-6 rounded-2xl flex flex-col md:gap-4 shadow-sm w-full md:w-auto my-2 xs:mx-16 mx-8"
      id={id}
      onSubmit={handleFormSubmit}>
      {showSkip && handleSkipClicked ? (
        <section className="flex items-center justify-between mb-4">
          <h1 className="text-[22px] text-base-text font-semibold">
            {heading}
          </h1>
          <Skip handleSkipClicked={handleSkipClicked} />
        </section>
      ) : (
        <h1 className="text-[22px] text-base-text font-semibold mb-2">
          {heading}
        </h1>
      )}
      {children}
    </form>
  );
};

export default Form;
