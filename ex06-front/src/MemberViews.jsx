import { Field } from './Fields.jsx'
import { HashLink } from './HashLink.jsx'

export function MemberList({ members = [] }) {
  const rows = Array.isArray(members) ? members : []
  return (
    <section>
      <h1>Members</h1>
      <ul className="record-list">
        {rows.map((member) => (
          <li key={member.id}>
            <HashLink to={`#/members/${member.id}`}>
              <Field label="id" value={member.id} />
              <Field label="name" value={member.name} />
              <Field label="email" value={member.email} />
            </HashLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function MemberDetail({ member }) {
  if (!member) return null
  return (
    <article>
      <h1>Member</h1>
      <Field label="id" value={member.id} />
      <Field label="name" value={member.name} />
      <Field label="email" value={member.email} />
    </article>
  )
}

export function MemberCreate({ onCreate }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    onCreate?.({
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create member</h2>
      <label>
        name
        <input name="name" />
      </label>
      <label>
        email
        <input name="email" />
      </label>
      <button type="submit">Create</button>
    </form>
  )
}
