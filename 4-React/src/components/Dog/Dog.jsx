export function Dog(props) {
  const imageBreed = props.breed.charAt(0).toLowerCase() + props.breed.slice(1)
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <img
          src={`/images/${imageBreed}.png`}
          alt={props.breed}
          className="dog-image"
        />
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}
