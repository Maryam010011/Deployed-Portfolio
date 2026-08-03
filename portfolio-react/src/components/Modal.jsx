import { useEffect } from 'react';

export default function Modal({ data, onClose }) {
  // Close on Escape key, same as the old document-level keydown listener
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  // Lock page scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = data ? 'hidden' : '';
  }, [data]);

  return (
    <div
      className={`overlay${data ? ' on' : ''}`}
      id="ov"
      onClick={(e) => {
        if (e.target.id === 'ov') onClose();
      }}
    >
      <div className="mbox">
        <div className="mhead">
          <h3 id="mtitle">{data?.title ?? ''}</h3>
          <button className="mcls" onClick={onClose}>×</button>
        </div>
        <div className="mimg">
          <img id="mimg" src={data?.src ?? ''} alt={data?.title ?? ''} />
        </div>
        <p className="mcap" id="mcap">{data?.cap ?? ''}</p>
      </div>
    </div>
  );
}
