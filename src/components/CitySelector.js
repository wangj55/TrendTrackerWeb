export default function CitySelector({citiesInfo, setSelectedCityWoeid}) {
    function selectedCity(e) {
        const woeid = e.target.value
        if (woeid) {
            setSelectedCityWoeid(woeid)
        }
    }

    return (
        <select className="form-select form-select-md w-25 mx-auto my-3" onChange={selectedCity}>
            <option value={null} key={0}>Select a city</option>
            {citiesInfo.sort((a, b) => {return a.woeid - b.woeid}).map(cityInfo =>
                <option value={cityInfo.woeid} key={cityInfo.woeid}>{cityInfo.name}, {cityInfo.country}</option>
            )}
        </select>
    )
}