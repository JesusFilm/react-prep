import { ReactElement } from "react";
import { Button } from "@mui/material";

export function Child({ getAge }: { getAge: () => number }): ReactElement {

  function handleClick() {
    const age = getAge()
    console.log(age)
  }

  return (
    <Button variant="contained" onClick={handleClick}>Get Age</Button>
  )
}