interface TitleProps {
  label: string
}

export function Title({ label }: TitleProps) {
  return (
    <div>
      <h1>`${label}`</h1>
    </div>
  )
}
