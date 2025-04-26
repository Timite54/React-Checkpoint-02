import "./Player.css"

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: "300px",
    margin: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f8f9fa",
    transition: "transform 0.3s ease",
  }

  const headerStyle = {
    backgroundColor: "#0a3d62",
    color: "white",
    padding: "15px",
    textAlign: "center",
  }

  const imageContainerStyle = {
    height: "250px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  }

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
  }

  const infoStyle = {
    padding: "15px",
  }

  const infoItemStyle = {
    margin: "8px 0",
    display: "flex",
    justifyContent: "space-between",
  }

  const labelStyle = {
    fontWeight: "bold",
    color: "#333",
  }

  return (
    <div style={cardStyle} className="player-card">
      <div style={headerStyle}>
        <h2>{name}</h2>
      </div>
      <div style={imageContainerStyle}>
        <img src={imageUrl || "/placeholder.svg"} alt={name} style={imageStyle} />
      </div>
      <div style={infoStyle}>
        <div style={infoItemStyle}>
          <span style={labelStyle}>Team:</span>
          <span>{team}</span>
        </div>
        <div style={infoItemStyle}>
          <span style={labelStyle}>Nationality:</span>
          <span>{nationality}</span>
        </div>
        <div style={infoItemStyle}>
          <span style={labelStyle}>Jersey Number:</span>
          <span>{jerseyNumber}</span>
        </div>
        <div style={infoItemStyle}>
          <span style={labelStyle}>Age:</span>
          <span>{age}</span>
        </div>
      </div>
    </div>
  )
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "No Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
}

export default Player
