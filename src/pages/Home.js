import profile from "../assets/Tharun_p.jpeg";

function Home() {
  return (
    <div className="page">
      <div className="home-container">
        <img src={profile} alt="Tharun" className="profile-img" />

        <div>
          <h1>Tharun K</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I build responsive and user-friendly web applications using
            modern technologies. Welcome to my portfolio.
          </p>
        </div>
      </div>
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Home;