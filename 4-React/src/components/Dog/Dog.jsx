export function Dog(props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
          <span className="dog-image">{props.image}</span>
          <img src={'/images/bulldog.png'} />
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}
