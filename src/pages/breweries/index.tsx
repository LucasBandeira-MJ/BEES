import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { HeaderComponent } from "../../components/HeaderComponent";
import { BreweriesContext } from "../../context/BreweriesContext";
import { Container } from "./styles";

import axios from 'axios'
import { BreweryCard } from "../../components/BreweryCard";
import { BreweryType } from "../../@types/breweryTypes";

const Breweries: NextPage = () => {
    const { user } = useContext(BreweriesContext)
    const router = useRouter()

    const [breweries, setBreweries] = useState<BreweryType[]>([])

    const handleDeleteBrewery = (id: string) => {
        const filteredBreweries = breweries.filter(brewery => brewery.id !== id)

        setBreweries(filteredBreweries)
    }

    useEffect(() => {
        const getBreweries = () => { 
            axios.get('https://api.openbrewerydb.org/breweries')
            .then(({ data }) => {
                setBreweries(data)
            })
            .catch(err => console.log(err))
        }

        getBreweries()
    }, [])

    useEffect(() => {
        if(!user) router.push('/')
    }, [user])


    return (
        <Container>
            <HeaderComponent />
            <main>
                { breweries.map((brewery) => (
                    <BreweryCard 
                        key={brewery.id} 
                        onDeleteBrewery={handleDeleteBrewery}
                        breweryInfo={brewery} 
                    />
                )) } 
            </main>
        </Container>
    )
}

export default Breweries