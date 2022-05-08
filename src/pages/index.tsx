import type { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useContext, useEffect } from 'react'
import { UserForm } from '../components/UserForm'
import { BreweriesContext } from '../context/BreweriesContext'
import { HomeContainer } from '../styles/Home.styles'

interface HomeProps {
  USER_NAME :string
}

const Home: NextPage<HomeProps> = ({USER_NAME}) => {
  const { user, updateUser } = useContext(BreweriesContext)
  const router = useRouter()

  useEffect(() => {
    if (user !== '') router.push('/breweries')
  }, [user])

  useEffect(() => {
    if(USER_NAME !== '') updateUser(USER_NAME)  
  }, [USER_NAME])

  return (
    <HomeContainer>
      <UserForm />
    </HomeContainer>
  )
}

export default Home


export const getServerSideProps = async (context: NextPageContext) => {
  const nookiesRes = parseCookies(context)

  return {
      props: {
          USER_NAME: nookiesRes.USER_NAME || ''
      }
  }
}