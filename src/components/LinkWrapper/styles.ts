import styled from 'styled-components'

export const Wrapper = styled.div`
  color: var(--white);
  cursor: pointer;
  position: fixed;
  top: var(--medium);
  right: var(--medium);
  z-index: 1100;

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
