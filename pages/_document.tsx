import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="13f87ab3-6883-40ca-9f24-1a9e56dc0daf"
          data-blockingmode="auto"
          type="text/javascript"
        ></script> */}

        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="13f87ab3-6883-40ca-9f24-1a9e56dc0daf"
          type="text/javascript"
        ></script>

        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXQH15Y9L4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXQH15Y9L4');
            `,
          }}
        />

        {/* Facebook Pixel Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2116730415336406');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
