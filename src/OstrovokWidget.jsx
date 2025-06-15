
import React, { useEffect, useRef } from 'react';

const OstrovokWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?trs=423937&shmarker=638200&locale=ru&powered_by=true&border_radius=5&color_background=%23ffffff&color_border=%230f5de4&color_button=%230f5de4&promo_id=7257&campaign_id=459";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="ostrovok-widget" style={{ width: '100%', maxWidth: '400px', margin: '0 auto 40px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default OstrovokWidget;
