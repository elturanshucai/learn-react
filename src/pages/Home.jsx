import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {
  const [products, setProducts] = useState([])
  const getData = async () => {
    const res = await axios.get('https://dummyjson.com/products')
    setProducts(res.data.products)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='p-10 grid grid-cols-3 gap-10'>
      {products.map(item => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  )
}

export default Home