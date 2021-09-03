import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChartGrid = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  flex: 1;
  flex-wrap: wrap;
`

const TitleView = styled.div`
  display: flex;
  gap: 0.7rem;
`

const TitleIcon = styled(FontAwesomeIcon)`
  font-size: 0.9rem;
  color: ${props => props.color}
`

const TitleText = styled.span`
  font-size: 0.9rem;
  line-height: 0.9rem;
  font-weight: 600;
  color: #aba9b8;
`

const DataView = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.5rem;
`

const TextPrefix = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #aba9b8;
  margin-top: 0.9rem;
`

const TextValue = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #5a5773;
`

const DiffIcon = styled(FontAwesomeIcon)`
  color: red;
  transform: rotate(${props => props.positive === 'true' ? -90 : 90}deg);
  color: #${props => props.positive === 'true' ? '00d953' : 'd90000'};
`

const TextDiff = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #a8a7b6;
`

const ChartView = styled.div`
  min-height: 12rem;
  height: 100%;
`

export {
  ChartGrid,
  TitleView,
  TitleIcon,
  TitleText,
  DataView,
  TextPrefix,
  TextValue,
  DiffIcon,
  TextDiff,
  ChartView
}
