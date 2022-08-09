import { useContext } from 'react'
import { ProductContext } from '../../contexts/product.context'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductContext)
  return (
    <div className='products-container'>
      {/* destructures the array info (id) */}
      {products.map((product) => (
        //product={product} allows the prop to pass through to the product-card component
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
