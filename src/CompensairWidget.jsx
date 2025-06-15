
import React, { useEffect, useRef } from 'react';

const CompensairWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?trs=423937&shmarker=638200&locale=ru&border_radius=5&plain=true&powered_by=true&promo_id=3408&campaign_id=86";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="compensair-widget" style={{ width: '100%', maxWidth: '400px', margin: '25px auto 80px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default CompensairWidget;
