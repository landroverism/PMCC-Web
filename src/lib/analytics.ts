type AnalyticsEvent = {
  name: string;
  params?: Record<string, any>;
};

let isInitialized = false;
let gaId: string | undefined;
let fbPixelId: string | undefined;

function loadScript(src: string, id?: string) {
  if (id && document.getElementById(id)) return;
  const s = document.createElement('script');
  if (id) s.id = id;
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadInline(code: string, id?: string) {
  if (id && document.getElementById(id)) return;
  const s = document.createElement('script');
  if (id) s.id = id;
  s.innerHTML = code;
  document.head.appendChild(s);
}

export function initAnalytics() {
  if (isInitialized) return;
  gaId = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID;
  fbPixelId = (import.meta as any).env?.VITE_FB_PIXEL_ID;

  // GA4
  if (gaId) {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(){ (window as any).dataLayer.push(arguments); }
    (window as any).gtag = gtag;
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, 'ga4-src');
    gtag('js', new Date());
    gtag('config', gaId);
  }

  // Meta Pixel
  if (fbPixelId) {
    if (!(window as any).fbq) {
      loadInline(`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\n      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',\n      'https://connect.facebook.net/en_US/fbevents.js');\n      fbq('init','${fbPixelId}');\n      fbq('track','PageView');`, 'fb-pixel-inline');
    }
  }

  isInitialized = true;
}

export function trackEvent(name: string, params?: Record<string, any>) {
  // GA4
  try { (window as any).gtag && (window as any).gtag('event', name, params || {}); } catch {}
  // Meta Pixel
  try { (window as any).fbq && (window as any).fbq('trackCustom', name, params || {}); } catch {}
}

export function trackContact(method: 'call'|'whatsapp'|'email', context: string) {
  trackEvent('contact_click', { method, context });
}
