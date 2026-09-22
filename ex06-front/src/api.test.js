import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createMember,
  createProduct,
  getMemberById,
  getMembers,
  getProductById,
  getProducts,
} from './api.js'

function mockJson(payload) {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => payload,
  })
}

function lastFetch() {
  expect(fetch).toHaveBeenCalledTimes(1)
  const [url, init] = fetch.mock.calls[0]
  return { url: String(url), init: init ?? {} }
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('GET helpers (network mocked, client real)', () => {
  it('GET members with no body and returns parsed member JSON', async () => {
    const payload = [{ id: 1, name: 'name1', email: '1@email.com' }]
    mockJson(payload)

    const result = await getMembers()

    const { url, init } = lastFetch()
    expect(url).toBe('members')
    expect(init.method ?? 'GET').toBe('GET')
    expect(init.body).toBeUndefined()
    expect(result).toEqual(payload)
  })

  it('GET members/{id} with no body and returns parsed member JSON', async () => {
    const payload = { id: 1, name: 'name1', email: '1@email.com' }
    mockJson(payload)

    const result = await getMemberById(1)

    const { url, init } = lastFetch()
    expect(url).toBe('members/1')
    expect(init.method ?? 'GET').toBe('GET')
    expect(init.body).toBeUndefined()
    expect(result).toEqual(payload)
  })

  it('GET /products with no body and returns parsed product JSON', async () => {
    const payload = [
      { id: 1, name: 'product1', description: null, price: 1000 },
    ]
    mockJson(payload)

    const result = await getProducts()

    const { url, init } = lastFetch()
    expect(url).toBe('/products')
    expect(init.method ?? 'GET').toBe('GET')
    expect(init.body).toBeUndefined()
    expect(result).toEqual(payload)
  })

  it('GET /products/{id} with no body and returns parsed product JSON', async () => {
    const payload = { id: 1, name: 'product1', description: null, price: 1000 }
    mockJson(payload)

    const result = await getProductById(1)

    const { url, init } = lastFetch()
    expect(url).toBe('/products/1')
    expect(init.method ?? 'GET').toBe('GET')
    expect(init.body).toBeUndefined()
    expect(result).toEqual(payload)
  })
})

describe('POST helpers (network mocked, client real)', () => {
  it('POST members with name and email JSON', async () => {
    const payload = { id: 1, name: 'string', email: 'string' }
    mockJson(payload)

    const result = await createMember({ name: 'string', email: 'string' })

    const { url, init } = lastFetch()
    expect(url).toBe('members')
    expect(init.method).toBe('POST')
    expect(init.headers['Content-Type']).toBe('application/json')
    expect(JSON.parse(init.body)).toEqual({ name: 'string', email: 'string' })
    expect(result).toEqual(payload)
  })

  it('POST /products with name, description, and price JSON', async () => {
    const payload = { id: 1, name: 'string', description: 'string', price: 0 }
    mockJson(payload)

    const result = await createProduct({
      name: 'string',
      description: 'string',
      price: 0,
    })

    const { url, init } = lastFetch()
    expect(url).toBe('/products')
    expect(init.method).toBe('POST')
    expect(init.headers['Content-Type']).toBe('application/json')
    expect(JSON.parse(init.body)).toEqual({
      name: 'string',
      description: 'string',
      price: 0,
    })
    expect(result).toEqual(payload)
  })
})
