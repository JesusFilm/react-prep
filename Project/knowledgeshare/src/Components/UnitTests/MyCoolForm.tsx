import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

export function MyCoolForm() {
  const [name, setName] = useState<string>('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleSubmit() {
    console.log("name", name)
  }

  return (
    <Stack spacing={2}>
      <TextField label="Name" variant="outlined" onChange={handleChange} value={name} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </Stack>
  )
}