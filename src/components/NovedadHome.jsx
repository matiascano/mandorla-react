import { Link } from "react-router-dom";
import "./NovedadHome.css";

function NovedadHome({ title, description, imageUrl, textLink, link }) {
  return (
    <>
      <section className="novedad-home">
        <div className="novedad-item">
          <img src={imageUrl} alt={title} />
          <div className="novedad-description">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link} className="novedad-link">
              {textLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NovedadHome;
