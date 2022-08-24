import { useContext, Fragment } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    //Object.keys allows you to pass in an object and convert it to an array so that array methods can be used ie.map
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview
