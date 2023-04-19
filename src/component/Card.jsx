import React from 'react'
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ({index,description,src,price}) {
  return (
    <>
{/* tailwind */}
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" >
          <img class="p-8" src={src} alt="product image" />
      </a>
      <div class="px-5 pb-5">
          <a href="#" style={style} >
              <h5 class="text-xl font-semibold tracking-tight text-gray-900">{description}</h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{index}.0</span>
          </div>
          <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900 ">{price}$</span>
              <a href="#" style={style} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
      </div>
      </div>
    </>
  )
}
const style = {
  textDecoration:"none",
}