import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function UseMuiExample() {
  return (
 <Stack sx={{
  border: '1px solid red',
  alignItems: 'center',
  width: '100%',
  p: 2,
 }}>
  <Typography variant="h3">Mui Example</Typography>
  <Stack direction='row' spacing={1}>
  <Button variant="contained">Button 1</Button>
  <Button variant="contained">Button 2</Button>
  </Stack>
 </Stack>
  )
}