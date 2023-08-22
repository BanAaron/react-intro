import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Charlie" animal={"dog"} breed={"French Bulldog"} />
      <Pet name="Pepper" animal={"Bird"} breed={"Cockatiel"} />
      <Pet name="Doink" animal={"cat"} breed={"Mixed"} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
