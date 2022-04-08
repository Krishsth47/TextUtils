import "./App.css";
import NavBar from "./components/NavBar";
import { TextForm } from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" about="About Textutils" />
      <TextForm heading="Enter your text" />
    </>
  );
}

export default App;
