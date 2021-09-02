import styled from 'styled-components'

const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.6rem;
  gap: 1.3rem;
  flex: 1;
`

const PageTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #5f5f5f;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.4rem;
  background: #fff;
  border-radius: 15px;
  flex: 1;
  box-shadow: 0 0 15px #c1c1c1;
`

export {
  PageBox,
  PageTitle,
  Card
}
