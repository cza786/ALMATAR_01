'use client';

import { useEffect, useRef, useState } from 'react';

export default function PolicyImageViewer({ src, alt, lang }) {
  const viewport = useRef(null);
  const [zoom, setZoom] = useState(100);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [imageSize, setImageSize] = useState(null);
  const arabic = lang === 'ar';

  useEffect(() => {
    const element = viewport.current;
    const observer = new ResizeObserver(() => {
      setSize({ width: element.clientWidth, height: element.clientHeight });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const fit = imageSize && size.width && size.height
    ? Math.min(size.width / imageSize.width, size.height / imageSize.height)
    : 1;

  function resetZoom() {
    setZoom(100);
    viewport.current?.scrollTo({ top: 0, left: 0 });
  }

  return (
    <div className="policy-image-viewer">
      <div className="policy-zoom-controls" role="group" aria-label={arabic ? 'تكبير وتصغير المستند' : 'Document zoom'} dir="ltr">
        <button type="button" onClick={() => setZoom((value) => Math.max(50, value - 25))} disabled={zoom === 50} aria-label={arabic ? 'تصغير' : 'Zoom out'}>−</button>
        <button type="button" className="policy-zoom-reset" onClick={resetZoom} aria-label={arabic ? 'إعادة ضبط التكبير' : 'Reset zoom'} title={arabic ? 'إعادة ضبط التكبير' : 'Reset zoom'}>{zoom}%</button>
        <button type="button" onClick={() => setZoom((value) => Math.min(300, value + 25))} disabled={zoom === 300} aria-label={arabic ? 'تكبير' : 'Zoom in'}>+</button>
      </div>
      <div className="policy-image-viewport" ref={viewport} tabIndex={0} aria-label={alt} dir="ltr">
        <div className="policy-image-stage" style={{ width: Math.max(size.width, (imageSize?.width || 0) * fit * zoom / 100), height: Math.max(size.height, (imageSize?.height || 0) * fit * zoom / 100) }}>
          <img src={src} alt={alt} onLoad={(event) => setImageSize({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} style={imageSize ? { width: imageSize.width * fit * zoom / 100, height: imageSize.height * fit * zoom / 100 } : undefined} />
        </div>
      </div>
    </div>
  );
}
