import "./MainCard.css";
import propic from "../../resources/images/square.jpg";

const MainCard = () => {
  return (
    <div className="mainCard">
      <div>
        <h1>Alessandro Orlich</h1>
        Computer Engineer.
      </div>
      <img className="propic" src={propic} alt="profile" loading="lazy" />
    </div>
  );
};

export default MainCard;
