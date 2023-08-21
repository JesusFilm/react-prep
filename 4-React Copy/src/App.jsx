import { Logo } from "./components/Logo";
import "./App.css";

// This is the parent component.
// The main styles of the app are imported and applied here. See line 2. Feel free to have a look at the style sheet and have a play around.

export function App() {
  return (
    <div className="container">
      <Logo />
    </div>
  );
}
