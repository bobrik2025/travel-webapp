
import React, { useEffect, useRef } from 'react';

const SutochnoWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?trs=423937&shmarker=638200&locale=ru&powered_by=true&plain=true&border_radius=5&color_background=%23FFFFFF&color_border=%23DDDDDD&color_button=%23F51449&color_icons=%23F51449&promo_id=2719&campaign_id=99";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="sutochno-widget" style={{ width: '100%', maxWidth: '440px', margin: '50px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default SutochnoWidget;
