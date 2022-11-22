import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import { Page } from 'types/page';

type Props = AppProps & {
  Component: Page
}

export default function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);
  const Layout = Component.layout ?? Fragment

  return (
    <Layout>
      {getLayout(< Component {...pageProps} />)}
    </Layout>
  )
}
