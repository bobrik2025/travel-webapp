
import React, { useEffect, useRef } from 'react';

const YandexWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://c193.travelpayouts.com/content?trs=423937&shmarker=638200&theme=light&powered_by=true&promo_id=8581";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="yandex-widget" style={{ width: '100%', maxWidth: '400px', margin: '30px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default YandexWidget;
