import { ReactElement, ReactNode, useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import 'styles/global.scss'
import { Provider } from 'react-redux'
import { wrapper } from 'store/store'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {

  useEffect(() => {
    const Debounce = setTimeout(() => {
      document.body.className = 'scroll'
    }, 3000)

    return () => clearTimeout(Debounce)
  }, [])
  
  const { store, props } = wrapper.useWrappedStore(rest)
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      {getLayout(<Component {...props.pageProps} />)}
    </Provider>
  )
}