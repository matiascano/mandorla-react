import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Alfajores artesanales gourmet</h1>
            <p>¡Hacete un mimo y date un gustito!</p>
          </div>
          <div className="hero-image">
            <img src="/img/hero.avif" alt="Hero" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
