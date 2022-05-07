import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { HeaderComponent } from "../../components/HeaderComponent";
import { BreweriesContext } from "../../context/BreweriesContext";
import { Container } from "./styles";

import axios from 'axios'
import { BreweryCard } from "../../components/BreweryCard";

const Breweries: NextPage = () => {
    const { user } = useContext(BreweriesContext)
    const router = useRouter()

    const [breweries, setBreweries] = useState([])

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
                { breweries.map((brewery, index) => (
                    <BreweryCard key={index} breweryInfo={brewery} />
                )) } 
            </main>
        </Container>
    )
}

export default Breweries