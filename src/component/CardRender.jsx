import React, { useEffect, useState } from 'react'
import Card from './Card'
import Skelton from './Skelton'
import { Container } from 'react-bootstrap'

export default function Data() {
    const [data,setData] = useState([])
    const [loader, setloader] = useState(false)
    const array = [1,2,3,4,5,7,1,2,3,4,5,7];//wait for this array terminated to see the data from api
    useEffect(()=>{
    setloader(true);
    setTimeout(async ()=>{
        const fetch_ = await fetch("https://api.escuelajs.co/api/v1/products");
        const json_ = await fetch_.json();
        setloader(false)
        setData(json_)
    },3000)
},[])
  return (
    <Container>
            <div className='flex flex-wrap gap-3 justify-center my-10'>
        {
            (!loader? (data.map((e,index)=><Card index={index} description={e.description.slice(0,50)} src={e.images} price={e.price}/>)):array.map(e=> <Skelton/>))
        }
    </div>
    </Container>
  )
}
