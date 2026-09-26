'use client';

import { useEffect, useRef, useState } from 'react';

export default function PolicyImageViewer({ src, alt, lang }) {
  const viewport = useRef(null);
  const lastTapRef = useRef(0);
  const [zoom, setZoom] = useState(100);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [imageSize, setImageSize] = useState(null);
  const arabic = lang === 'ar';

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      setSize((prev) => {
        // Prevent infinite ResizeObserver loop caused by scrollbar appearance/disappearance
        if (Math.abs(prev.width - newWidth) < 4 && Math.abs(prev.height - newHeight) < 4) {
          return prev;
        }
        return { width: newWidth, height: newHeight };
      });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const fit = imageSize && size.width && size.height
    ? Math.min(size.width / imageSize.width, size.height / imageSize.height)
    : 1;

  function resetZoom() {
    setZoom(100);
    if (viewport.current) {
      viewport.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  function toggleDoubleTapZoom() {
    setZoom((prevZoom) => (prevZoom <= 100 ? 200 : 100));
  }

  function handleTouchEnd(event) {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      event.preventDefault();
      toggleDoubleTapZoom();
      lastTapRef.current = 0;
    } else {
      lastTapRef.current = now;
    }
  }

  const currentScale = fit * (zoom / 100);
  const scaledWidth = imageSize ? imageSize.width * currentScale : 0;
  const scaledHeight = imageSize ? imageSize.height * currentScale : 0;

  return (
    <div className="policy-image-viewer">
      <div className="policy-zoom-controls" role="group" aria-label={arabic ? 'تكبير وتصغير المستند' : 'Document zoom'} dir="ltr">
        <button type="button" onClick={() => setZoom((value) => Math.max(50, value - 25))} disabled={zoom <= 50} aria-label={arabic ? 'تصغير' : 'Zoom out'}>−</button>
        <button type="button" className="policy-zoom-reset" onClick={resetZoom} aria-label={arabic ? 'إعادة ضبط التكبير' : 'Reset zoom'} title={arabic ? 'انقر مرتين للتكبير / التصغير' : 'Double tap to zoom in / out'}>{zoom}%</button>
        <button type="button" onClick={() => setZoom((value) => Math.min(300, value + 25))} disabled={zoom >= 300} aria-label={arabic ? 'تكبير' : 'Zoom in'}>+</button>
      </div>
      <div
        className="policy-image-viewport"
        ref={viewport}
        tabIndex={0}
        aria-label={alt}
        dir="ltr"
        onDoubleClick={toggleDoubleTapZoom}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: zoom > 100 ? 'zoom-out' : 'zoom-in', touchAction: 'pan-x pan-y' }}
      >
        <div
          className="policy-image-stage"
          style={{
            width: Math.max(size.width, scaledWidth),
            height: Math.max(size.height, scaledHeight),
          }}
        >
          <img
            src={src}
            alt={alt}
            onLoad={(event) => {
              const { naturalWidth, naturalHeight } = event.currentTarget;
              setImageSize({ width: naturalWidth, height: naturalHeight });
            }}
            style={imageSize ? { width: scaledWidth, height: scaledHeight } : undefined}
          />
        </div>
      </div>
    </div>
  );
}
