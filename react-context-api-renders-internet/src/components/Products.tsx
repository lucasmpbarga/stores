import { useCart } from '../contexts/cartContext'

type ProductItem = {
  id: number
  name: string
  price: number
}

const PRODUCTS_MOCK: ProductItem[] = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 40 },
]

export const Products = () => {
  const { items, price, setItems, setPrice } = useCart()

  const handleAddItem = (item: ProductItem) => {
    const updatedItems = [...items, item]
    const newPrice = price + item.price

    setItems(updatedItems)
    setPrice(newPrice)
  }

  const handleAddDonation = () => {
    const newPrice = price + 10
    setPrice(newPrice)
  }

  return (
    <div className="flex flex-col">
      {PRODUCTS_MOCK.map((item) => (
        <div key={item.id} className="m-2 w-60 flex-row flex justify-between bg-blue-50 p-2 rounded">
          {item.name} - ${item.price}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => handleAddItem(item)}>
            Add
          </button>
        </div>
      ))}
      <button
        onClick={handleAddDonation}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-60 mt-4">
        Add $10 donation
      </button>
    </div>
  )
}
