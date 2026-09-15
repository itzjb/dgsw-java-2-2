import { Field } from './Fields.jsx'

export function MemberList({ members = [] }) {
  return (
    <section>
      <h1>Members</h1>
      <ul className="record-list">
        {members.map((member) => (
          <li key={member.id}>
            <a href={`#/members/${member.id}`}>
              <Field label="id" value={member.id} />
              <Field label="name" value={member.name} />
              <Field label="email" value={member.email} />
            </a>
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
