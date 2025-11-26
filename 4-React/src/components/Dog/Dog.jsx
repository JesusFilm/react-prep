export function Dog(props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <img
          src={`/images/${props.breed}.png`}
          alt="A picture of dog"
          width="300"
          height="300"
        />
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}
