import { ReactElement } from "react";
import { Child } from "../Child";

export function Parent(): ReactElement {
  function getAge(): number {
    return 20
  }

  return (
    <Child getAge={getAge} />
  )
}