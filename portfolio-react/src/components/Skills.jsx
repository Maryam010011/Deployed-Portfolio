import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <div className="skbg" id="skills">
      <div className="skin">
        <p className="slbl">What I work with</p>
        <h2 className="stitle">Skills &amp; tools</h2>
        <p className="sdesc">Picked up through internships, coursework, and a lot of late-night tinkering.</p>
        <div className="skgrid">
          {skills.map((s) => (
            <div className="sk rv" key={s.name}>
              <span className={`sd ${s.dot}`}></span>{s.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
