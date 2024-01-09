import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export function Form() {
  const handleSubmit = () => {
    // Assuming you want to submit the entered text
    //onSubmit({ text });
  }
  return (
    <Box sx={{ maxWidth: '50vh', textAlign: 'center' }}>
      <TextField
        label="Enter Text"
        variant="outlined"
        fullWidth
        //value={text}
        //onChange={handleTextChange}
        margin="normal"
      />

      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  )
}
