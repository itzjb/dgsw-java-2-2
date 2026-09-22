import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProductCreate, ProductDetail, ProductList } from './ProductViews.jsx'

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

  it('create form submits name, description, and price', async () => {
    const onCreate = vi.fn()
    const user = userEvent.setup()
    render(<ProductCreate onCreate={onCreate} />)

    await user.type(screen.getByLabelText('name'), 'string')
    await user.type(screen.getByLabelText('description'), 'string')
    await user.type(screen.getByLabelText('price'), '0')
    await user.click(screen.getByRole('button', { name: /create/i }))

    expect(onCreate).toHaveBeenCalledWith({
      name: 'string',
      description: 'string',
      price: 0,
    })
  })
})
