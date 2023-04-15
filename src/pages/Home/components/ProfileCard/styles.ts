import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background-color: ${(props) => props.theme.baseProfile};
  width: 100%;
  max-width: 864px;
  margin: -5.5rem auto 0;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 10;

  display: flex;
  gap: 2rem;
`
export const ProfilePicture = styled.img`
  border-radius: 8px;
  width: 9.25rem;
  height: 9.25rem;
`

export const ProfileInfo = styled.div`
  flex: 1;
`

export const ProfileInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;

  a {
    color: ${(props) => props.theme.brandBlue};
    text-transform: uppercase;
    svg {
      margin-left: 0.25rem;
    }
  }
`

export const ProfileInfoFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  margin: 2rem 0 0;
  bottom: 0;

  svg {
    margin-right: 0.25rem;
  }
`
