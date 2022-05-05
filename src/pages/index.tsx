import type { NextPage } from 'next'
import { UserForm } from '../components/UserForm'
import { HomeContainer } from '../styles/Home.styles'

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <UserForm />
    </HomeContainer>
  )
}

export default Home
