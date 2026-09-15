import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemberDetail, MemberList } from './MemberViews.jsx'

const members = [
  { id: 1, name: 'name1', email: '1@email.com' },
  { id: 2, name: 'name2', email: '2@email.com' },
]

describe('Member views render entity fields from GET-shaped JSON', () => {
  it('list shows each member id, name, and email', () => {
    render(<MemberList members={members} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('name1')).toBeInTheDocument()
    expect(screen.getByText('1@email.com')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('name2')).toBeInTheDocument()
    expect(screen.getByText('2@email.com')).toBeInTheDocument()
  })

  it('detail shows the member id, name, and email', () => {
    render(<MemberDetail member={members[0]} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('name1')).toBeInTheDocument()
    expect(screen.getByText('1@email.com')).toBeInTheDocument()
  })
})
