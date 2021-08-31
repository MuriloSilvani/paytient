import styled from 'styled-components'

const Bar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-right: 1px solid red;
  heigth: 100vh;
  overflow: auto;
  padding: 1.2rem 0.4rem;
  min-width: 200px
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding: 0.4rem 1.2rem;
  cursor: pointer;
`;

export {
  Bar,
  Item
}
