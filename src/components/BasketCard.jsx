import React, { useContext } from 'react'
import BasketContext from '../context/BasketContext'

const BasketCard = ({ product }) => {
    const { basket, removeProduct, addProduct } = useContext(BasketContext)
    const buttonStyle = 'bg-black text-white rounded-md w-10 h-8 flex items-center justify-center active:scale-90 duration-200'
    return (
        <article className='border p-4 bg-blue-50 flex flex-col justify-between'>
            <div className='h-[200px] w-full mb-5'>
                <img src={product.thumbnail} alt={product.title} className='w-full h-full' />
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='text-xl font-medium text-center'>{product.title}</h2>
                <p>{product.description}</p>
                <h3 className='font-bold text-xl'>{product.price} $</h3>
                <h3 className='font-medium text-lg'>Total: {(product.price * product.count).toFixed(2)} $</h3>
            </div>
            <div className='flex gap-5 items-center mt-5'>
                <button className={buttonStyle} onClick={() => removeProduct(product.id)}>-</button>
                <p>{product.count}</p>
                <button className={buttonStyle} onClick={() => addProduct(product)}>+</button>
            </div>
        </article>
    )
}

export default BasketCard