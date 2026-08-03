import { profileImg } from '../data/portfolioData';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-l">
        <div className="badge h1">Open to opportunities</div>
        <h1 className="h2">Frontend developer<br />&amp; <em>CS student</em></h1>
        <p className="h3">
          I build clean, responsive interfaces and love the intersection of design and tech.
          Currently studying Computer Science at Air University, Islamabad while leading
          communities that get more women into tech.
        </p>
        <div className="btns h4">
          <a href="#projects" className="btn1">See my work</a>
          <a href="#contact" className="btn2">Let's connect</a>
        </div>
      </div>
      <div className="hero-r h5">
        <div className="hcard">
          <img id="pfp" src={profileImg} className="pfp" alt="Maryam Jahangir" />
          <h3>Maryam Jahangir</h3>
          <p className="sub">Frontend Dev · CS Student · Community Builder</p>
          <div className="tags">
            <span className="tag">React.js</span>
            <span className="tag">UI/UX</span>
            <span className="tag">Figma</span>
            <span className="tag">JavaScript</span>
          </div>
          <div className="stats">
            <div className="stat"><b>5+</b><s2>Societies</s2></div>
            <div className="stat"><b>3</b><s2>Internships</s2></div>
            <div className="stat"><b>7+</b><s2>Certs</s2></div>
          </div>
        </div>
        <div className="fbadge">MLSA Member</div>
        <div className="fbadge2">Air University, Islamabad</div>
      </div>
    </div>
  );
}
