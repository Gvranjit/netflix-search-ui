import { HTMLProps } from "react";

interface InputBoxProps extends HTMLProps<HTMLInputElement> {
  title?: string;
}
export function InputBox(props: InputBoxProps) {
  const { title, ...options } = props;
  return (
    <>
      <label htmlFor="input">
        <h1>{title}</h1>
      </label>
      <input
        className="input-box--dark input-box--large input-box--center-text"
        type="text"
        name="searchBox"
        spellCheck={false}
        {...options}
      />
    </>
  );
}
