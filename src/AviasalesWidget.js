import React, { useEffect, useRef } from 'react';

function AviasalesWidget() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tpwidg.com/content?currency=rub&trs=423937&shmarker=638200&show_hotels=false&powered_by=true&locale=ru&searchUrl=www.aviasales.ru%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100';
    script.async = true;
    script.charset = 'utf-8';

    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={widgetRef} className="widget-wrapper" />
  );
}

export default AviasalesWidget;
