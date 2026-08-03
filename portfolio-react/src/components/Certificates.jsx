import { certificates } from '../data/portfolioData';

export default function Certificates({ onOpenModal }) {
  return (
    <section className="sec" id="certs">
      <p className="slbl">Credentials</p>
      <h2 className="stitle">Certificates</h2>
      <p className="sdesc">Click any certificate to view it in full. Real hours of learning — not just badges.</p>
      <div className="cgrid" id="cgrid">
        {certificates.map((c) => (
          <div className="ccard" key={c.title} onClick={() => onOpenModal(c.img, c.title, c.org)}>
            <img src={c.img} className="cthumb" alt={c.title} />
            <div className="cbody">
              <h4>{c.title}</h4>
              <span>{c.org}</span>
              <span className="chint">↗ Click to view full certificate</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
