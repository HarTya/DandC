import type { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Homepage.module.scss'

const Homepage: NextPageWithLayout = () => {
  return (
    <div className={styles.homepage}>
      <p>Бог дизайна Эндрю пиктурес и бог кода хартя собрались здесь чтобы сотворить шедевр веб исскуства</p>
    </div>
  )
}

Homepage.getLayout = (page: ReactElement) => {
  return (
    <Layout
      meta={{
        title: 'D&C Ready Homepage',
        description: 'D&C Ready'
      }}
    >
      {page}
    </Layout>
  )
}

export default Homepage