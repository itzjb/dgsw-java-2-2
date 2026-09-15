import { Field } from './Fields.jsx'

export function ProductList({ products = [] }) {
  return (
    <section>
      <h1>Products</h1>
      <ul className="record-list">
        {products.map((product) => (
          <li key={product.id}>
            <a href={`#/products/${product.id}`}>
              <Field label="id" value={product.id} />
              <Field label="name" value={product.name} />
              <Field label="description" value={product.description} />
              <Field label="price" value={product.price} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ProductDetail({ product }) {
  if (!product) return null
  return (
    <article>
      <h1>Product</h1>
      <Field label="id" value={product.id} />
      <Field label="name" value={product.name} />
      <Field label="description" value={product.description} />
      <Field label="price" value={product.price} />
    </article>
  )
}
