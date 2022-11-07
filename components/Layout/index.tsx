import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { LayoutProps } from 'interfaces'

export default function Layout({ children, meta }: LayoutProps) {

    const { title, description, icon } = meta

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <link rel='icon' href={icon || '/favicon.ico'} />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                <link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap' rel='stylesheet' />
            </Head>
            <>
                <Header />
                <main>{children}</main>
                <Footer />
            </>
        </>
    )
}