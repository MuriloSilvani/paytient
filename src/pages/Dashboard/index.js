import {
  PageBox,
  PageTitle,
  Card
} from '../../assets/style/commom'

import {
  ChartGrid,
  TitleView,
  TitleIcon,
  TitleText,
  DataView,
  TextValue,
  TextDiff
} from './style'

const Dashboard = () => {
  return (
    <PageBox>
      <PageTitle>
        Indicadores
      </PageTitle>

      <ChartGrid column>
        <ChartGrid>
          {
            [{
              title: 'Vendas',
              value: '245',
              diff: 12.67
            }, {
              title: 'Faturamento',
              value: '12.167.943',
              diff: 4.67
            }, {
              title: 'Conversão',
              value: '12%',
              diff: 21.67
            }, {
              title: 'Leads',
              value: '432',
              diff: 11.34
            }].map(card => (
              <Card>
                <TitleView>
                  <TitleIcon />
                  <TitleText>
                    {card.title}
                  </TitleText>
                </TitleView>

                <DataView>
                  <TextValue>
                    {card.value}
                  </TextValue>

                  <TextDiff>
                    {card.diff}
                  </TextDiff>
                </DataView>
              </Card>
            ))
          }
        </ChartGrid>

        <Card>
          <TitleView>
            <TitleIcon />
            <TitleText>
              Faturamento vs Custo Fixo
            </TitleText>
          </TitleView>

        </Card>
      </ChartGrid>

    </PageBox>
  )
}

export default Dashboard
