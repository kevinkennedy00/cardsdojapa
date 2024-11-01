import "./styles.css";

function Card({ img, title, description }) {
  return (
    <div className="card-container">
      <img className="card-image" src={img} alt="nada" />
      <div className="card-lower-info">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
