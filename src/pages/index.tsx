import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { UserForm } from '../components/UserForm'
import { BreweriesContext } from '../context/BreweriesContext'
import { HomeContainer } from '../styles/Home.styles'

const Home: NextPage = () => {
  const { user } = useContext(BreweriesContext)
  const router = useRouter()

  useEffect(() => {
    if (user !== '') router.push('/breweries')
  }, [user])

  return (
    <HomeContainer>
      <UserForm />
    </HomeContainer>
  )
}

export default Home
