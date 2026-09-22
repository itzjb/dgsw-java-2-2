function apiUrl(path) {
  const base = import.meta.env.VITE_API_BASE
  if (!base) return path
  const trimmed = String(base).replace(/\/$/, '')
  const suffix = path.startsWith('/') ? path : `/${path}`
  return `${trimmed}${suffix}`
}

async function getJson(path) {
  const response = await fetch(apiUrl(path), { method: 'GET' })
  if (!response.ok) {
    throw new Error(`GET ${path} failed: ${response.status}`)
  }
  return response.json()
}

async function postJson(path, body) {
  const response = await fetch(apiUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw new Error(`POST ${path} failed: ${response.status}`)
  }
  return response.json()
}

export function getMembers() {
  return getJson('members')
}

export function createMember({ name, email }) {
  return postJson('members', { name, email })
}

export function getMemberById(id) {
  return getJson(`members/${id}`)
}

export function getProducts() {
  return getJson('/products')
}

export function getProductById(id) {
  return getJson(`/products/${id}`)
}

export function createProduct({ name, description, price }) {
  return postJson('/products', { name, description, price })
}
