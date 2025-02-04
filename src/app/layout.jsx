"use client";

import '../../public/assets/scss/themes.scss';
import '../../public/assets/css/global.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import MainComponent from '@/components/Main';
import NoAuthPagesLayout from '@/components/layouts/noAuth';
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "@/slices";
import { PersistGate } from "redux-persist/integration/react";
import Loader from '@/components/common/Loader';

function LayoutContent({ children }) {
  const token = useSelector((state) => state?.Login?.user?.data?.token);
  const [key, setKey] = useState(!!token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (token != undefined) {
      setKey(!!token);
      setLoading(false);
    // }
  }, [token]);

  if (loading || key === null) {
    return <Loader />;
  }

  return key ? (
    <MainComponent>{children}</MainComponent>
  ) : (
    <NoAuthPagesLayout>{children}</NoAuthPagesLayout>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0"
      />
      <body
      // className={
      //   process.env.HIDE_NEXT_ERROR_OVERLAY === "true"
      //     ? "hide-nextjs-portal"
      //     : undefined
      // }
      >
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <LayoutContent key={store.getState().Login?.user?.data?.token}>
              {children}
            </LayoutContent>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
