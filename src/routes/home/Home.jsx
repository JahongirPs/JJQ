import React from 'react'
import Main from "../../components/main/Main";
import Service from '../../components/end_service/Service';
import Banner from '../../components/banner/Banner';
import Search from '../../components/serch/Serch';

const Home = () => {
  return (
    <div>
       <Search/>
      <Banner/>
      <Main/>
      <Service/>
    </div>
  )
}

export default Home