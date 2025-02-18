/**
 * Renders a subtitle section.
 *
 * This functional component creates a <div> element with the className "subtitle" that contains an <h2> element.
 * The <h2> element displays the text provided via the `text` property of the `props` parameter.
 *
 * @param {Object} props - Properties for the component.
 * @param {string} props.text - The subtitle text to be displayed.
 * @returns {JSX.Element} The rendered subtitle component.
 */
export function Subtitle(props) {
  return (
    <div className="subtitle">
      <h2>{props.text}</h2>
    </div>
  )
}
