import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="application-name" content="Etched" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Etched" />
        <meta name="description" content="Join The Etched Waitlist" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://etched.xyz" />
        <meta name="twitter:title" content="Etched" />
        <meta name="twitter:description" content="Join The Etched Waitlist" />
        <meta name="twitter:image" content="https://etched.xyz/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@EtchedApp" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Etched" />
        <meta property="og:description" content="Join The Etched Waitlist" />
        <meta property="og:site_name" content="Etched" />
        <meta property="og:url" content="https://etched.xyz" />
        <meta property="og:image" content="https://etched.xyz/icons/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
