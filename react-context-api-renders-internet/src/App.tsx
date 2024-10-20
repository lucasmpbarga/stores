import { Cart } from './components/Cart'
import { Products } from './components/Products'
import { CartProvider } from './contexts/cartContext'

export default function App() {
  return (
    <div className="p-4">
      <CartProvider>
        <h1 className="text-3xl mb-4">Context API Example</h1>
        <Products />
        <Cart />
      </CartProvider>
    </div>
  )
}
