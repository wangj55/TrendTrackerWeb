import { useEffect, useState } from "react"
import { fetchCityTrends } from "../server/server"

export default function TrendTable({woeid}) {
    const [cityData, setCityData] = useState({
        trends: []
    })

    useEffect(() => {
        fetchCityTrends(woeid).then((res) => {
            console.log(res)
            setCityData(res)
        })
    }, [woeid])

    return (
        <div className="container">
            {cityData &&
                // <h1 class="display-4 text-center">
                //     You are viewing Trends in {trendPlace}.
                // </h1>
                <table className="table">
                    <thead className="thead-light">
                    <tr className="table-primary">
                        <th scope="col">Rank</th>
                        <th scope="col">Trending Topic/Hashtag</th>
                        <th scope="col">Volume</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cityData.trends.map((data, i) => {
                            return (
                                <tr>
                                    <th scope="col">{i + 1}</th>
                                    <th scope="col">
                                        <a href={data.url} target="_blank" rel="noreferrer noopener">{data.name}</a>
                                    </th>
                                    <th scope="col">{data.tweet_volume ? data.tweet_volume : "Under 10K"}</th>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            }

        </div>
    )
}