import Player from "../Player/Player"
import players from "../../data/players"

const PlayersList = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#e9ecef",
    minHeight: "100vh",
  }

  return (
    <div style={containerStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  )
}

export default PlayersList
