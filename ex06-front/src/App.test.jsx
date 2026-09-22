import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App.jsx'

const members = [{ id: 1, name: 'name1', email: '1@email.com' }]
const products = [
  { id: 1, name: 'product1', description: null, price: 1000 },
]

function mockApi() {
  globalThis.fetch = vi.fn(async (url, init = {}) => {
    const path = String(url)
    const method = init.method ?? 'GET'
    let payload
    if (method === 'POST' && (path === 'members' || path.endsWith('/members'))) {
      payload = { id: 2, name: 'string', email: 'string' }
    } else if (method === 'POST' && (path === '/products' || path.endsWith('/products'))) {
      payload = { id: 2, name: 'string', description: 'string', price: 0 }
    } else if (path === 'members/1' || path.endsWith('/members/1')) payload = members[0]
    else if (path === 'members' || path.endsWith('/members')) payload = members
    else if (path === '/products/1' || path.endsWith('/products/1')) payload = products[0]
    else if (path === '/products' || path.endsWith('/products')) payload = products
    else throw new Error(`unexpected fetch ${path}`)
    return { ok: true, json: async () => payload }
  })
}

afterEach(() => {
  window.location.hash = ''
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('App opens members and products views from API JSON', () => {
  it('shows member name and email after opening members', async () => {
    mockApi()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /members/i }))

    expect(await screen.findByText('name1')).toBeInTheDocument()
    expect(screen.getByText('1@email.com')).toBeInTheDocument()
  })

  it('shows product name and price after opening products', async () => {
    mockApi()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /products/i }))

    expect(await screen.findByText('product1')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
  })

  it('shows member-by-id fields after opening a member from the list', async () => {
    mockApi()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /members/i }))
    await screen.findByText('name1')
    await user.click(screen.getByRole('link', { name: /name1/i }))

    expect(await screen.findByRole('heading', { name: 'Member' })).toBeInTheDocument()
    expect(screen.getByText('name1')).toBeInTheDocument()
    expect(screen.getByText('1@email.com')).toBeInTheDocument()
  })

  it('shows products after opening a member detail first', async () => {
    mockApi()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /members/i }))
    await screen.findByText('name1')
    await user.click(screen.getByRole('link', { name: /name1/i }))
    await screen.findByRole('heading', { name: 'Member' })
    await user.click(screen.getByRole('link', { name: /products/i }))

    expect(await screen.findByText('product1')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
  })

  it('shows product-by-id fields after opening a product from the list', async () => {
    mockApi()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /products/i }))
    await screen.findByText('product1')
    await user.click(screen.getByRole('link', { name: /product1/i }))

    expect(await screen.findByRole('heading', { name: 'Product' })).toBeInTheDocument()
    expect(screen.getByText('product1')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
  })

  it('POSTs a member with name and email from the members form', async () => {
    mockApi()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /members/i }))
    await screen.findByText('name1')
    await user.type(screen.getByLabelText('name'), 'string')
    await user.type(screen.getByLabelText('email'), 'string')
    await user.click(screen.getByRole('button', { name: /create/i }))

    const post = fetch.mock.calls.find(([, init]) => init?.method === 'POST')
    expect(post).toBeTruthy()
    expect(String(post[0])).toMatch(/members$/)
    expect(JSON.parse(post[1].body)).toEqual({ name: 'string', email: 'string' })
  })

  it('POSTs a product with name, description, and price from the products form', async () => {
    mockApi()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /products/i }))
    await screen.findByText('product1')
    await user.type(screen.getByLabelText('name'), 'string')
    await user.type(screen.getByLabelText('description'), 'string')
    await user.type(screen.getByLabelText('price'), '0')
    await user.click(screen.getByRole('button', { name: /create/i }))

    const post = fetch.mock.calls.find(([, init]) => init?.method === 'POST')
    expect(post).toBeTruthy()
    expect(String(post[0])).toMatch(/products$/)
    expect(JSON.parse(post[1].body)).toEqual({
      name: 'string',
      description: 'string',
      price: 0,
    })
  })
})
