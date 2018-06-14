import React from 'react';
import Header from './Header';
import Head from 'next/head'

export default props => {
  return (
      <div>
        <Head>
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TWKJDVV');`}} />

          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
          <link rel="stylesheet" href="/static/styles/style.css"></link>
        </Head>
          <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWKJDVV"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />

        <Header />
        {props.children}

        <noscript dangerouslySetInnerHTML={{__html: `!function(){var a=window.VL=window.VL||{};return a.instances=a.instances||{},a.invoked?void(window.console&&console.error&&console.error("VL snippet loaded twice.")):(a.invoked=!0,void(a.load=function(b,c,d){var e={};e.publicToken=b,e.config=c||{};var f=document.createElement("script");f.type="text/javascript",f.id="vrlps-js",f.defer=!0,f.src="https://app.viral-loops.com/client/vl/vl.min.js";var g=document.getElementsByTagName("script")[0];return g.parentNode.insertBefore(f,g),f.onload=function(){a.setup(e),a.instances[b]=e},e.identify=e.identify||function(a,b){e.afterLoad={identify:{userData:a,cb:b}}},e.pendingEvents=[],e.track=e.track||function(a,b){e.pendingEvents.push({event:a,cb:b})},e.pendingHooks=[],e.addHook=e.addHook||function(a,b){e.pendingHooks.push({name:a,cb:b})},e.$=e.$||function(a){e.pendingHooks.push({name:"ready",cb:a})},e}))}();var campaign=VL.load("HG9f16TqqlUGF-HwwMMoIRoVQIY",{autoLoadWidgets:!0});`}} />

      </div>
  );
};
