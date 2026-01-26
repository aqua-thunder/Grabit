import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import ProductInfo from './components/ProductInfo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import CheckOut from './components/CheckOut'
import WishList from './components/WishList'
import Fruits from './components/Fruits'
import Vegetables from './components/Vegetables'


function App() {

  const [product, setproduct] = useState([
    {
      url: '/images/products/1.jpg',
      type: 'Dried Fruits',
      name: 'Mixed Nuts Berries Pack',
      price: 56,
      discount: 20,
      brand: "Classic",
      qua: "2000g",
      comesIn: "Pouch"
    },    
    {             
      url: '/images/products/2.jpg',
      type: 'Cookies',
      name: 'Multi Grain Combo Cookies',
      price: 30,
      discount: 9,
      brand: "Classic",
      qua: "400g",
      comesIn: "Pouch"
    },
    {
      url: '/images/products/3.jpg',
      type: 'Foods',
      name: 'Fresh Mango Juice Pack',
      price: 65,
      discount: 14,
      brand: "Classic",
      qua: "250g",
      comesIn: "Pouch"
    },
    {
      url: '/images/products/4.jpg',
      type: 'Dried Fruits',
      name: 'Dates Value Fresh Pouch',
      price: 48,
      discount: 18,
      brand: "Classic",
      qua: "500g",
      comesIn: "Pouch"                              
    },
    {
      url: '/images/products/5.jpg',
      type: 'Dried Fruits',
      name: 'Stick Fiber Masal Magic',
      price: 75,
      discount: 31,
      brand: "Classic",
      qua: "150g",
      comesIn: "Pouch"
    },
    {
      url: '/images/products/6.jpg',
      type: 'Dried Fruits',
      name: 'Mixed Nuts Berries Pack',
      price: 56,
      discount: 22,
      brand: "Classic",
      qua: "360g",
      comesIn: "Pouch"
    },
    {
      url: '/images/products/7.jpg',
      type: 'Cookies',
      name: 'Multi Grain Combo Cookies',
      price: 30,
      discount: 8,
      brand: "Classic",
      qua: "290g",
      comesIn: "Pouch"
    },
    {
      url: '/images/products/8.jpg',
      type: 'Foods',
      name: 'Fresh Mango Juice Pack',
      price: 65,
      discount: 23,
      brand: "Classic",
      qua: "700g",
      comesIn: "Pouch"
    },
    {
      url: '/images/products/9.jpg',
      type: 'Dried Fruits',
      name: 'Dates Value Fresh Pouch',
      price: 48,
      discount: 17,
      brand: "Classic",
      qua: "600g",
      comesIn: "Pouch"
    },
    {
      url: '/images/products/10.jpg',
      type: 'Dried Fruits',
      name: 'Stick Fiber Masal Magic',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    }
  ])
  const [tranding, settranding] = useState([
    [
      {
        url: '/images/products/3.jpg',
        type: 'Foods',
        name: 'Fresh Mango Juice Pack',
        price: 65.11,
        discount: 46.22
      },
      {
        url: '/images/products/4.jpg',
        type: 'Dried Fruits',
        name: 'Dates Value Fresh Pouch',
        price: 48.11,
        discount: 36.22
      },
      {
        url: '/images/products/5.jpg',
        type: 'Dried Fruits',
        name: 'Stick Fiber Masal Magic',
        price: 75.11,
        discount: 69.22
      }],
    [
      {
        url: '/images/products/1.jpg',
        type: 'Dried Fruits',
        name: 'Mixed Nuts Berries Pack',
        price: 56.11,
        discount: 45.22
      },
      {
        url: '/images/products/2.jpg',
        type: 'Cookies',
        name: 'Multi Grain Combo Cookies',
        price: 30.11,
        discount: 25.22
      },
      {
        url: '/images/products/3.jpg',
        type: 'Foods',
        name: 'Fresh Mango Juice Pack',
        price: 65.11,
        discount: 46.22
      }]
  ])
  const [topRated, settopRated] = useState([
    [
      {
        url: '/images/fruits/1.jpg',
        type: 'Dried Fruits',
        name: 'Kiwi',
        price: 56,
        discount: 20,
        brand: "Classic",
        qua: "200g",
        comesIn: "Pouch"
      },
      {
        url: '/images/fruits/2.jpg',
        type: 'Cookies',
        name: 'Strawberry',
        price: 30,
        discount: 9,
        brand: "Classic",
        qua: "400g",
        comesIn: "Pouch"
      },
      {
        url: '/images/products/4.jpg',
        type: 'Dried Fruits',
        name: 'Dates Value Fresh Pouch',
        price: 48.11,
        discount: 36.22
      },
    ],
    [{
      url: '/images/products/3.jpg',
      type: 'Foods',
      name: 'Fresh Mango Juice Pack',
      price: 65.11,
      discount: 46.22
    },
    {
      url: '/images/products/4.jpg',
      type: 'Dried Fruits',
      name: 'Dates Value Fresh Pouch',
      price: 48.11,
      discount: 36.22
    },
    {
      url: '/images/fruits/3.jpg',
      type: 'Foods',
      name: 'Graps',
      price: 65,
      discount: 14,
      brand: "Classic",
      qua: "250g",
      comesIn: "Pouch"
    },]
  ])
  const [fruits, setFruits] = useState([
    {
      url: '/images/Fruits/1.jpg',
      type: 'Dried Fruits',
      name: 'Kiwi',
      price: 56,
      discount: 20,
      brand: "Classic",
      qua: "200g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/2.jpg',
      type: 'Cookies',
      name: 'Strawberry',
      price: 30,
      discount: 9,
      brand: "Classic",
      qua: "400g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/3.jpg',
      type: 'Foods',
      name: 'Graps',
      price: 65,
      discount: 14,
      brand: "Classic",
      qua: "250g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/4.jpg',
      type: 'Dried Fruits',
      name: 'Orange',
      price: 48,
      discount: 18,
      brand: "Classic",
      qua: "500g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/5.jpg',
      type: 'Dried Fruits',
      name: 'Durian',
      price: 75,
      discount: 31,
      brand: "Classic",
      qua: "150g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/6.jpg',
      type: 'Dried Fruits',
      name: 'Papaya',
      price: 56,
      discount: 22,
      brand: "Classic",
      qua: "360g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/7.jpg',
      type: 'Cookies',
      name: 'Banana',
      price: 30,
      discount: 8,
      brand: "Classic",
      qua: "290g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/8.jpg',
      type: 'Foods',
      name: 'Watermalan',
      price: 65,
      discount: 23,
      brand: "Classic",
      qua: "700g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/9.jpg',
      type: 'Dried Fruits',
      name: 'Guava',
      price: 48,
      discount: 17,
      brand: "Classic",
      qua: "600g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Fruits/10.jpg',
      type: 'Dried Fruits',
      name: 'Gooseberry',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    }
  ])
  const [vegetables, setVegetables] = useState([
    {
      url: '/images/Vegetables/1.jpg',
      type: 'Dried Fruits',
      name: 'Lady Finger',
      price: 56,
      discount: 20,
      brand: "Classic",
      qua: "200g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/2.jpg',
      type: 'Cookies',
      name: 'Cauliflower',
      price: 30,
      discount: 9,
      brand: "Classic",
      qua: "400g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/3.jpg',
      type: 'Foods',
      name: 'Capsicum',
      price: 65,
      discount: 14,
      brand: "Classic",
      qua: "250g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/4.jpg',
      type: 'Dried Fruits',
      name: 'Brocoli',
      price: 48,
      discount: 18,
      brand: "Classic",
      qua: "500g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/5.jpg',
      type: 'Dried Fruits',
      name: 'Carrot',
      price: 75,
      discount: 31,
      brand: "Classic",
      qua: "150g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/6.jpg',
      type: 'Dried Fruits',
      name: 'Brinjal',
      price: 56,
      discount: 22,
      brand: "Classic",
      qua: "360g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/7.jpg',
      type: 'Cookies',
      name: 'Spinach',
      price: 30,
      discount: 8,
      brand: "Classic",
      qua: "290g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/8.jpg',
      type: 'Foods',
      name: 'Cucumbar',
      price: 65,
      discount: 23,
      brand: "Classic",
      qua: "700g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/9.jpg',
      type: 'Dried Fruits',
      name: 'Potato',
      price: 48,
      discount: 17,
      brand: "Classic",
      qua: "600g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/10.jpg',
      type: 'Dried Fruits',
      name: 'Beetroot',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/11.jpg',
      type: 'Dried Fruits',
      name: 'Gooseberry',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/12.jpg',
      type: 'Dried Fruits',
      name: 'Garlic',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/13.jpg',
      type: 'Dried Fruits',
      name: 'Bitter Gourd',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/14.jpg',
      type: 'Dried Fruits',
      name: 'Arrowroot',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    },
    {
      url: '/images/Vegetables/15.jpg',
      type: 'Dried Fruits',
      name: 'Elephant Foot Yam',
      price: 75,
      discount: 30,
      brand: "Classic",
      qua: "850g",
      comesIn: "Pouch"
    }
  ])


  let todoKey = "AddProduct"
  const [productDetail, setproductDetail] = useState(() => {
    const r = localStorage.getItem(todoKey);
    if (!r) return [];
    return JSON.parse(r);
  })

  localStorage.setItem(todoKey, JSON.stringify(productDetail))

  const detail = (data) => {
    setproductDetail([data])
  }

  // Add To Cart
  let AddCart = "cart"
  const [AC, setAC] = useState(() => {
    let r = localStorage.getItem(AddCart);
    if (!r)
      return [];
    return JSON.parse(r);
  })

  localStorage.setItem(AddCart, JSON.stringify(AC))

  const AddToCart = (data) => {
    setAC([...AC, { id: uuidv4(), ...data, quantity: 1 }])
  }

  // Delete item from the cart
  const handleDelete = (e, id) => {
    const p = AC.filter(items => {
      return items.id !== id;
    })
    setAC(p)
    localStorage.setItem(AddCart, JSON.stringify(AC))
    window.location.reload();
  }

  // WishList
  const wl = "WishList"
  const [wishList, setWishList] = useState(() => {
    let wish = localStorage.getItem(wl)
    if (!wish)
      return [];
    return JSON.parse(wish)
  })

  localStorage.setItem(wl, JSON.stringify(wishList))

  const AddWishList = (data) => {
    setWishList([...wishList, { id: uuidv4(), ...data }])
  }

  // Delete item from the wish list
  const handleDeleteWishList = (e, id) => {
    const p = wishList.filter(items => {
      return items.id !== id;
    })
    setWishList(p)
    localStorage.setItem(wl, JSON.stringify(wishList))
    window.location.reload();
  }



  // React Router DOM
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar AC={AC} CartLength={AC.length} WL={wishList.length} handleDelete={handleDelete} /><Home product={product} tranding={tranding} topRated={topRated} detail={detail} AddWishList={AddWishList} fruits={fruits} vegetables={vegetables}/><Footer /></>
    },
    {
      path: "/detail",
      element: <><Navbar AC={AC} CartLength={AC.length} WL={wishList.length} handleDelete={handleDelete} /><ProductInfo productDetail={productDetail} product={product} AddToCart={AddToCart} AddWishList={AddWishList} detail={detail} /><Footer /></>
    },
    {
      path: "/chekout",
      element: <><Navbar AC={AC} CartLength={AC.length} WL={wishList.length} handleDelete={handleDelete} /><CheckOut AC={AC} handleDelete={handleDelete} /><Footer /></>
    },
    {
      path: "/wishList",
      element: <><Navbar AC={AC} CartLength={AC.length} WL={wishList.length} handleDelete={handleDelete} /><WishList wishList={wishList} AddToCart={AddToCart} handleDeleteWishList={handleDeleteWishList} /><Footer /></>
    },
    {
      path: "/fruits",
      element: <><Navbar AC={AC} CartLength={AC.length} WL={wishList.length} handleDelete={handleDelete} /><Fruits fruits={fruits} detail={detail} AddWishList={AddWishList} /><Footer /></>
    },
    {
      path: "/vegetables",
      element: <><Navbar AC={AC} CartLength={AC.length} WL={wishList.length} handleDelete={handleDelete} /><Vegetables vegetables={vegetables} detail={detail} AddWishList={AddWishList} /><Footer /></>
    }

  ])

  return (
    <>
      <div className='lg:py-14 md:py-14 lg:px-24 md:px-24 px-5 py-5 '>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App

