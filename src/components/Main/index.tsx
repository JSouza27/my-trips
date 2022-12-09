import * as S from './styles'

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />

      <S.Title>Esse é o meu Boilerplate usando NextJS</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com código."
      />
    </S.Wrapper>
  )
}
