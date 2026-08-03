import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <p className="slbl">Where I've been</p>
      <h2 className="stitle">Experience &amp; leadership</h2>
      <p className="sdesc">Work, community roles, and volunteer experience that shaped how I think and build.</p>
      <div className="exlist">
        {experience.map((item, i) => (
          <div className="ex rv" key={i}>
            <div className="exmeta">
              <p className="exd">{item.date}</p>
              <span className={`extag ${item.tagClass}`}>{item.tag}</span>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="exorg">{item.org}</p>
              <ul className="exul">
                {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
