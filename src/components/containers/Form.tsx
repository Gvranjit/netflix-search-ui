import { FormHTMLAttributes } from "react";
interface CenterProps extends FormHTMLAttributes<HTMLFormElement> {}
export function Form(props: CenterProps) {
  const { onSubmit: _onSubmit, ...rest } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (_onSubmit) _onSubmit(e);
      }}
      {...rest}
    />
  );
}
