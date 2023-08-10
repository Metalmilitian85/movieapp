import React from 'react'
import Body from '../components/Body'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <img src="/moviebg.jpg" className="flex fixed -z-10 w-full h-full left-0 top-0 opacity-20" />
        <Body />
        <Row rowID='1' title="Upcoming" fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID='3' title="Trending" fetchURL={requests.requestTrending} />
        <Row rowID='4' title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  )
}

export default Home