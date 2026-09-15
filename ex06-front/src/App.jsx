import { useEffect, useState } from 'react'
import { getMemberById, getMembers, getProductById, getProducts } from './api.js'
import { MemberDetail, MemberList } from './MemberViews.jsx'
import { ProductDetail, ProductList } from './ProductViews.jsx'
import './App.css'

function parseHash(hash) {
  const path = String(hash || '').replace(/^#/, '').replace(/^\//, '')
  const [resource, id] = path.split('/').filter(Boolean)
  return { resource: resource ?? '', id }
}

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const { resource, id } = parseHash(hash)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (resource !== 'members' && resource !== 'products') {
      setData(null)
      setError(null)
      setLoading(false)
      return undefined
    }

    setLoading(true)
    setError(null)
    setData(null)

    async function load() {
      try {
        let next
        if (resource === 'members' && id) next = await getMemberById(id)
        else if (resource === 'members') next = await getMembers()
        else if (resource === 'products' && id) next = await getProductById(id)
        else next = await getProducts()
        if (!cancelled) setData(next)
      } catch (err) {
        if (!cancelled) setError(err.message ?? String(err))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [resource, id])

  return (
    <div className="app">
      <header>
        <nav>
          <a href="#/members">Members</a>
          <a href="#/products">Products</a>
        </nav>
      </header>
      <main>
        {error ? <p className="error">{error}</p> : null}
        {loading ? <p>Loading…</p> : null}
        {resource === 'members' && id && data ? (
          <>
            <p>
              <a href="#/members">Back to members</a>
            </p>
            <MemberDetail member={data} />
          </>
        ) : null}
        {resource === 'members' && !id && data ? (
          <MemberList members={data} />
        ) : null}
        {resource === 'products' && id && data ? (
          <>
            <p>
              <a href="#/products">Back to products</a>
            </p>
            <ProductDetail product={data} />
          </>
        ) : null}
        {resource === 'products' && !id && data ? (
          <ProductList products={data} />
        ) : null}
        {!resource ? (
          <section>
            <h1>ex06</h1>
            <p>Open members or products to load GET JSON.</p>
          </section>
        ) : null}
      </main>
    </div>
  )
}
