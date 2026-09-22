import { Field } from './Fields.jsx'
import { HashLink } from './HashLink.jsx'

export function ProductList({ products = [] }) {
  const rows = Array.isArray(products) ? products : []
  return (
    <section>
      <h1>Products</h1>
      <ul className="record-list">
        {rows.map((product) => (
          <li key={product.id}>
            <HashLink to={`#/products/${product.id}`}>
              <Field label="id" value={product.id} />
              <Field label="name" value={product.name} />
              <Field label="description" value={product.description} />
              <Field label="price" value={product.price} />
            </HashLink>
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

export function ProductCreate({ onCreate }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    onCreate?.({
      name: String(form.get('name') ?? ''),
      description: String(form.get('description') ?? ''),
      price: Number(form.get('price') ?? 0),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create product</h2>
      <label>
        name
        <input name="name" />
      </label>
      <label>
        description
        <input name="description" />
      </label>
      <label>
        price
        <input name="price" type="number" />
      </label>
      <button type="submit">Create</button>
    </form>
  )
}
