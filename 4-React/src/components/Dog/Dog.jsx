export function Dog(props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
          <div className="dog-image">{props.children}</div>
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}
