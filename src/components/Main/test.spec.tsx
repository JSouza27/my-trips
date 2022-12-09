import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', {
        name: /Esse é o meu Boilerplate usando NextJS/i
      })
    ).toBeInTheDocument()
  })
})
