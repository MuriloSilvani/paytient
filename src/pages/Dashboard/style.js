import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChartGrid = styled.div`
  display: flex;
  gap: 1.3rem;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  flex: 1;
`

const TitleView = styled.div`
  display: flex;
  align-itens: center;
`

const TitleIcon = styled(FontAwesomeIcon)`
`

const TitleText = styled.span`

`

const DataView = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TextValue = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
`

const TextDiff = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export {
  ChartGrid,
  TitleView,
  TitleIcon,
  TitleText,
  DataView,
  TextValue,
  TextDiff
}
