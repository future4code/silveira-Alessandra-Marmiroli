import React from "react"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import FeedCard from "../card/FeedCard"

const Feed = ()=>{
    useProtectedPage()
    const feedList = useRequestData([], `${BASE_URL}posts`)
    console.log(feedList)

    const cardFeed = feedList.map((feeds)=>{
        return <FeedCard 
        key={[]}
        title={cardFeed.[]}
        image={cardFeed.[]}
        onClick={() => null}/>
    })
    return (
        <div>
           {cardFeed}
        </div>
    )
}

export default Feed 