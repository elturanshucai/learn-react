import React, { useContext } from 'react'
import WishlistContext from '../context/WishlistContext'
import Card from '../components/Card'

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext)
    return (
        <div className='grid grid-cols-3 gap-10 p-10'>
            {wishlist && wishlist.map(item => (
                <Card product={item} key={item.id} />
            ))}
        </div>
    )
}

export default Wishlist