import { Chart as RootChart } from 'react-charts'
import {
  ChartView
} from './style'

const Chart = () => {
  const data = [
    {
      label: 'Faturamento',
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: 'Custo Fixo',
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
  ]
  const axes = [
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ]
  return (
    <ChartView>
      <RootChart
        data={data}
        axes={axes}
        tooltip
      />
    </ChartView>
  )
}

export default Chart
