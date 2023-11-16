export function Title({label}: string) {
  return(
  <>
    <h2 className="title">{label?? 'This is a Title'}</h2>
  </>);
}


export function Title({ label }: TitleProps): ReactElement {
  return (
    <Typography variant="h1" sx={{ my: 4, textAlign: 'center' }}>
      {label ?? 'Hello World'}
    </Typography>
  )
}