import { render, screen } from '@testing-library/react'

import Map from './'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const placeOne = {
      id: '1',
      name: 'Teresópolis',
      slug: 'teresópolis',
      location: {
        latitude: -22.4172011,
        longitude: -43.0286809
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Petrópolis',
      slug: 'petrópolis',
      location: {
        latitude: -22.4838531,
        longitude: -43.3230431
      }
    }

    render(<Map places={[placeOne, placeTwo]} />)

    expect(screen.getByTitle(/teresópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
  })
})
