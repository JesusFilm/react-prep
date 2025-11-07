interface TitleProps {
  label?: string
}

function Title({ label }: TitleProps) {
  return (
    <div>
      <h1>{label}</h1>
    </div>
  )
}

export default Title