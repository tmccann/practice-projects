import { useRef, useState } from "react";

export default function Player() {
  const playerInputRef = useRef<HTMLInputElement>(null);
  const [playerName, setPlayerName] = useState("");

  const handleClick = () => {
    if (playerInputRef.current) {
      setPlayerName(playerInputRef.current.value);
      playerInputRef.current.value = "";
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <section id="player">
      <h2>Welcome {playerName || "unknown entity"}</h2>
      <p>
        <input ref={playerInputRef} type="text" onKeyDown={handleKeyPress} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
