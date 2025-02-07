"use client";

import '../../public/assets/scss/themes.scss';
import '../../public/assets/css/global.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { Provider } from "react-redux";
import { persistor, store } from "@/slices";
import { PersistGate } from "redux-persist/integration/react";
import fav from'@public/assets/images/favicon.ico'

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scrapbook-source="https://conceptionone.vercel.app/" data-scrapbook-create="20250204055035218">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0"
      />
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href={fav.src} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* <meta name="theme-color" content="#000000" /> */}
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="https://conceptionone.vercel.app/logo192.png" />
        <link rel="manifest" href="https://conceptionone.vercel.app/manifest.json" />  
        <title>Ai And Receptionist</title>
        <link href="main.61e0dd9d.css" rel="stylesheet" />
      </head>
      <body
      className={
        process.env.HIDE_NEXT_ERROR_OVERLAY === "true"
          ? "hide-nextjs-portal"
          : undefined
      }
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
