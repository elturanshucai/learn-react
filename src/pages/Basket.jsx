import React, { useContext } from 'react'
import BasketContext from '../context/BasketContext'
import BasketCard from '../components/BasketCard'

const Basket = () => {
    const { basket, totalPrice } = useContext(BasketContext)
    return (
        <>
            <h2 className='mt-5 text-xl'>Total Price: {totalPrice} $</h2>
            <div className='grid grid-cols-3 gap-10 p-10'>
                {basket && basket.map(item => (
                    <BasketCard key={item.id} product={item} />
                ))}
            </div>
        </>
    )
}

export default Basket