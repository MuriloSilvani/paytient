import styled from 'styled-components'

const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.6rem;
  gap: 1.3rem;
  flex: 1;
  overflow: auto;
`

const PageTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #5d5a75;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.2rem 1.2rem;
  background: #fff;
  border-radius: 15px;
  flex: 1;
  box-shadow: 0 0 15px #c1c1c1;
  gap: 1rem;
`

export {
  PageBox,
  PageTitle,
  Card
}
