import { marqueeItems } from '../data/portfolioData';

export default function Marquee() {
  // rendered twice back-to-back so the CSS animation loops seamlessly
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="mq">
      <div className="mq-t">
        {items.map((item, i) => (
          <span className="mq-i" key={i}>
            {item} <span className="mq-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
