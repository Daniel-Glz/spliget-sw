import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon-16x16.png`} />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;