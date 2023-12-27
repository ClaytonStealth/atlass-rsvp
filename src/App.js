import Contact from "./Contact";
import TopBar from "./TopBar";
import Rsvp from "./Rsvp";
import ThankYou from "./ThankYou";
import { useState } from "react";

function App() {
  const [tyMessage, setTyMessage] = useState("");
  const [atlasMsg, setAtlasMsg] = useState("")

  return (
    <div>
      <TopBar />
      <Contact />
      <Rsvp setTyMessage={setTyMessage} setAtlasMsg={setAtlasMsg} />
      <ThankYou tyMessage={tyMessage} atlasMsg={atlasMsg} />
    </div>
  );
}

export default App;
