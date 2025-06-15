
import React, { useEffect, useRef } from 'react';

const SanatoriumWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?trs=423937&shmarker=638200&border_radius=5&plain=true&color_background=%23ffffff&color_button=%2300bb57&color_border=%2300bb57&powered_by=true&promo_id=5050&campaign_id=156&locale=ru";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="sanatorium-widget" style={{ width: '100%', maxWidth: '400px', margin: '40px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default SanatoriumWidget;
