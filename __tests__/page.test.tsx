import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import PageTest from '../app/page-test'

test('PageTest', () => {
  render(<PageTest />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
