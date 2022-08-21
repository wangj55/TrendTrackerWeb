export const fetchCityList = () => {
    return fetch(`http://localhost:4000/cities/info`).then(data => {
        console.log("fetched cities info")
        return data.json()
    })
}

export const fetchCityTrends = (woeid) => {
    return fetch(`http://localhost:4000/trends?woeid=${woeid}`).then(data => {
        console.log("fetched city trends")
        return data.json()
    })
}