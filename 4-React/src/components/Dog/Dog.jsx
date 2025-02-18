/**
 * A React functional component that displays a dog's profile.
 *
 * This component renders a structured layout that includes the dog's name, breed, superpower, and an image.
 * The image source is constructed dynamically based on the dog's breed (converted to lowercase) and points to a PNG file within the `images` directory.
 *
 * @param {Object} props - The properties for the Dog component.
 * @param {string} props.name - The name of the dog.
 * @param {string} props.breed - The breed of the dog.
 * @param {string} props.superpower - The superpower of the dog.
 * @returns {JSX.Element} The JSX element representing the dog's profile.
 */
export function Dog(props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <span className="dog-superpower">{props.superpower}</span>
        <img
          src={`images/${props.breed.toLowerCase()}.png`}
          alt="Absolute dawg image"
        />
      </div>
    </div>
  )
}
