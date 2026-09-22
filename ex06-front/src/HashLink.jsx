export function navigate(hash) {
  const href = hash.startsWith('#') ? hash : `#${hash}`
  if (window.location.hash !== href) {
    window.location.hash = href
  }
  window.dispatchEvent(new Event('hashchange'))
}

export function HashLink({ to, children, className }) {
  const href = to.startsWith('#') ? to : `#${to}`
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
          return
        }
        event.preventDefault()
        navigate(href)
      }}
    >
      {children}
    </a>
  )
}
