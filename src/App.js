import Contact from "./Contact";
import TopBar from "./TopBar";
import Rsvp from "./rsvp";
import ThankYou from "./ThankYou";
import { useState } from "react";

function App() {
  const [tyMessage, setTyMessage] = useState("");

  return (
    <div>
      <TopBar />
      <Contact />
      <Rsvp setTyMessage={setTyMessage} />
      <ThankYou tyMessage={tyMessage} />
    </div>
  );
}

export default App;
