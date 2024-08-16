import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ProductContext from '../context/BasketContext'
import { Link, Outlet } from 'react-router-dom'
import WishlistContext from '../context/WishlistContext'

const Layout = () => {
    const [basket, setBasket] = useState(() => {
        let localBasket = JSON.parse(localStorage.getItem('basket'))
        if (localBasket) {
            return localBasket
        }
        return []
    })

    const [wishlist, setWishlist] = useState(() => {
        let localList = JSON.parse(localStorage.getItem('wishlist'))
        if (localList) {
            return localList
        }
        return []
    })

    const [totalPrice, setTotalPrice] = useState(0)

    const addProduct = (data) => {
        const existProduct = basket.find(item => item.id == data.id)
        if (existProduct) {
            setBasket(basket.map(item => {
                if (item.id === existProduct.id) {
                    item.count++
                }
                return item
            }))
            return
        }
        setBasket(prev => [...prev, { ...data, count: 1 }])
    }

    const calcTotal = () => {
        let total = basket.reduce((acc, a) => acc + a?.price * a.count, 0)
        setTotalPrice(total.toFixed(2))
    }

    const removeProduct = (id) => {
        const existProduct = basket.find(item => item.id == id)
        if (existProduct.count > 1) {
            setBasket(basket.map(item => {
                if (item.id === existProduct.id) {
                    item.count--
                }
                return item
            }))
            return
        }
        setBasket(prev => prev.filter(item => item.id != id))
    }

    const changeWishlist = (data) => {
        const existProduct = wishlist.find(item => item.id == data.id)
        if (existProduct) {
            setWishlist(prev => prev.filter(item => item.id != existProduct.id))
        } else {
            setWishlist(prev => [...prev, data])
        }
    }

    const checkLiked = (id) => {
        const existProduct = wishlist.find(item => item.id == id)
        if (existProduct) {
            return true
        }
        return false
    }

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
        calcTotal()
    }, [basket])

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])
    return (
        <ProductContext.Provider value={{ basket, addProduct, removeProduct, totalPrice }}>
            <WishlistContext.Provider value={{ changeWishlist, wishlist, checkLiked }}>
                <main className=''>
                    <header className='flex gap-10'>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/basket"}>Basket</Link>
                        <Link to={"/wishlist"}>Wishlist</Link>
                    </header>
                    {/* <Sidebar /> */}
                    <div>
                        <Outlet />
                    </div>
                </main>
            </WishlistContext.Provider>
        </ProductContext.Provider>
    )
}

export default Layout