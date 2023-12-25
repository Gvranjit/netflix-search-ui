import { PropsWithChildren } from "react";
interface CenterProps extends PropsWithChildren {}
export function Center(props: CenterProps) {
  return (
    <div className="screen-full--center-items screen--darkmode">
      {props.children}
    </div>
  );
}
