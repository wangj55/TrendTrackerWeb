import { useEffect, useState } from "react"

import CitySelector from "./CitySelector";
import TrendTable from "./TrendTable";
import { fetchCityList } from "../server/server";

export default function TrendViewer() {
    const [citiesInfo, setCitiesInfo] = useState([])
    const [selectedCityWoeid, setSelectedCityWoeid] = useState()

    useEffect(() => {
        fetchCityList().then(data => {
            console.log(data)
            setCitiesInfo(data)
        }).catch(err => {
            console.log(err.message())
        })
    }, [])

    return (
        <>
            {citiesInfo && <CitySelector citiesInfo={citiesInfo} setSelectedCityWoeid={setSelectedCityWoeid}/>}
            {selectedCityWoeid && <TrendTable woeid={selectedCityWoeid}/>}
        </>
    )
}