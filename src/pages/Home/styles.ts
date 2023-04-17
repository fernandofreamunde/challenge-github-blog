import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 5.5rem auto;
`

export const SearchAndPubData = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.baseSpan};
  }

  form {
    display: flex;
    input {
      flex: 1;
      background: ${(props) => props.theme.baseInput};
      border: 1px solid ${(props) => props.theme.baseBorder};
      padding: 1rem 0.75rem;
      color: ${(props) => props.theme.baseText};
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }
`

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 3rem auto 0;

  display: grid;
  grid-template-columns: 26rem 26rem;
  grid-template-rows: repeat(16.25rem);
  column-gap: 2rem;
  row-gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.baseText};
  }
`

export const PostCard = styled.div`
  width: 26rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.basePost};
  border-radius: 10px;

  span {
    display: flex;
    justify-content: space-between;

    h2 {
      width: 18.5rem;
    }

    div {
      font-size: 12px;
    }
  }

  p {
    margin-top: 1.25rem;
  }
`
