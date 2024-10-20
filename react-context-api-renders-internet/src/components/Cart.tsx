import { useRef } from 'react'
import { useCart } from '../contexts/cartContext'

const ItemsList = () => {
  const { items } = useCart()
  const itemsListRenders = useRef(0)

  itemsListRenders.current += 1

  return (
    <div className="mt-2 border-2 p-2">
      <p className="text-lg">Items: {items.length}</p>
      <p className="text-lg">Items list renders: {itemsListRenders.current}</p>
    </div>
  )
}

const TotalPrice = () => {
  const { price } = useCart()
  const totalPriceRenders = useRef(0)

  totalPriceRenders.current += 1

  return (
    <div className="mt-2 border-2 p-2">
      <p className="text-lg">Total Price: ${price}</p>
      <p className="text-lg">Total Price renders: {totalPriceRenders.current}</p>
    </div>
  )
}

export const Cart = () => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl mb-4">Cart</h1>
      <ItemsList />
      <TotalPrice />
    </div>
  )
}
