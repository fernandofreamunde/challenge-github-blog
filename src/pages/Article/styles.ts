import styled from 'styled-components'

export const ArticleContent = styled.article`
  width: 100%;
  max-width: 864px;
  margin: 2.5rem auto 0;
  padding: 2rem 2.5rem;

  p {
    margin-bottom: 1.5rem;
  }

  pre {
    padding: 1rem;
    background-color: ${(props) => props.theme.basePost};
  }
`
