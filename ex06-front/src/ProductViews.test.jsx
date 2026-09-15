import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductDetail, ProductList } from './ProductViews.jsx'

const products = [
  { id: 1, name: 'product1', description: null, price: 1000 },
  { id: 2, name: 'product2', description: 'a product', price: 2000 },
]

describe('Product views render entity fields from GET-shaped JSON', () => {
  it('list shows each product id, name, description, and price', () => {
    render(<ProductList products={products} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('product1')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('product2')).toBeInTheDocument()
    expect(screen.getByText('a product')).toBeInTheDocument()
    expect(screen.getByText('2000')).toBeInTheDocument()
  })

  it('detail shows id, name, price, and a null description field', () => {
    render(<ProductDetail product={products[0]} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('product1')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
    const descriptionField = screen.getByText('description').parentElement
    expect(descriptionField.textContent.replace('description', '').trim()).toBe('')
  })
})
