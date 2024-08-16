import React, { useContext } from 'react'
import BasketContext from '../context/BasketContext'
import WishlistContext from '../context/WishlistContext'

const Card = ({ product }) => {
    const { addProduct } = useContext(BasketContext)
    const { checkLiked, changeWishlist } = useContext(WishlistContext)

    const isLiked = checkLiked(product.id)
    return (
        <article className='border p-4 bg-blue-50 flex flex-col justify-between'>
            <div className='h-[200px] w-full mb-5'>
                <img src={product.thumbnail} alt={product.title} className='w-full h-full' />
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='text-xl font-medium text-center'>{product.title}</h2>
                <p>{product.description}</p>
                <h3 className='font-bold text-xl'>{product.price} $</h3>
            </div>
            <button
                className='bg-black text-white mt-5 rounded-sm py-2 active:scale-90 active:text-gray-200 duration-200'
                onClick={() => addProduct(product)}
            >
                Add Basket
            </button>
            <button
                onClick={() => changeWishlist(product)}
                className='bg-red-600 block text-white mt-5 rounded-sm py-2 active:scale-90 duration-200'
            >
                {isLiked ? 'Unlike' : 'Like'}
            </button>
        </article>
    )
}

export default Card