import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { LayoutProps } from 'types'

export default function Layout({ children, meta }: LayoutProps) {

    const { title, description, icon } = meta

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <link rel='icon' href={icon || '/favicon.ico'} />
            </Head>
            <>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </>
        </>
    )
}