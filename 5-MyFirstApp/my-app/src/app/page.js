import { TodoWrapper } from './components/TodoWrapper'

/**
 * Renders the home page component.
 *
 * This component serves as the primary container by rendering a div that includes the TodoWrapper component,
 * which encapsulates the functionality related to todo management.
 *
 * @returns {JSX.Element} The rendered home page element.
 */
export default function Home() {
  return (
    <div>
      <TodoWrapper />
    </div>
  )
}
