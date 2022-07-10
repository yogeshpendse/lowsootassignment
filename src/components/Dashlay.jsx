import { useDash } from "../context/Dashcontext";
import { Desktopsb } from "./Desktopsb";
import { Mobilesb } from "./Mobilesb";

export function Dashlay() {
  const { state } = useDash();
  return (
    <div className="cmain-container">
      <>{state.sview ? <Desktopsb /> : <Mobilesb />}</>
    </div>
  );
}
