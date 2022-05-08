import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { HeaderComponent } from "../../components/HeaderComponent";
import { BreweriesContext } from "../../context/BreweriesContext";
import { Container } from "./styles";

import axios from 'axios'
import { BreweryCard } from "../../components/BreweryCard";
import { BreweryType } from "../../@types/breweryTypes";
import { Loader } from "../../components/Loader";
import { ErrorComponent } from "../../components/ErrorComponent";
import { MOCKED_BREWERIES } from "../../mocks/mockBreweries";

const Breweries: NextPage = () => {
    const { user } = useContext(BreweriesContext)
    const router = useRouter()

    const [breweries, setBreweries] = useState<BreweryType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    const handleDeleteBrewery = (id: string) => {
        const filteredBreweries = breweries.filter(brewery => brewery.id !== id)

        setBreweries(filteredBreweries)
    }

    useEffect(() => {
        setIsLoading(true)
        const getBreweries = () => { 
            console.log('is getting breweries')
            axios.get('https://api.openbrewerydb.org/breweries')
            .then(({ data }) => {
                setBreweries(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
        }

        getBreweries()
        
        // setBreweries(MOCKED_BREWERIES) // Use if breweries aren't loading from axios call
    }, [])

    useEffect(() => {
        if(!user) router.push('/')
    }, [user])


    return (
        <Container>
            <HeaderComponent />
            {
                hasError ? <ErrorComponent /> :
                isLoading ? (<Loader />) : (
                    <main>
                        { breweries.map((brewery) => (
                            <BreweryCard 
                                key={brewery.id} 
                                onDeleteBrewery={handleDeleteBrewery}
                                breweryInfo={brewery} 
                            />
                        )) } 
                    </main>
                )
            }
        </Container>
    )
}

export default Breweries