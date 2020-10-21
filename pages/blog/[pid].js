import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import { useRouter } from 'next/router'



function BlogView({ postData }) {
  const router = useRouter()
  const { pid } = router.query
  
  return (
    <Layout>
      <div className="flex flex-col lg:w-1/2 xl:w-1/2">
        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">{pid}</h3>

        </SubContainer>
      </div>
    </Layout>
  )
}


export default BlogView;