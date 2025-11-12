import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react";
interface TitleProps {
  label?: string;
}

export function Title({ label = 'Timer App' }: TitleProps): ReactElement {
  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', mt: 4 }}>
      <Typography variant="h2">{label}</Typography>
    </Box>
  );
}
