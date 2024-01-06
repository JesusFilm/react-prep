export function Dog(props) {
  return (
    <div className="dog-wrapper" key={props.name}>
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}

export default Dog
