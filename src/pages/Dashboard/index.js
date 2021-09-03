import {
  PageBox,
  PageTitle,
  Card
} from '../../assets/style/commom'

import {
  faShoppingCart,
  faDollarSign,
  faExchangeAlt,
  faUser,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'

import {
  ChartGrid,
  TitleView,
  TitleIcon,
  TitleText,
  DataView,
  TextPrefix,
  TextValue,
  DiffIcon,
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
              diff: 12.67,
              icon: faShoppingCart,
              iconcolor: '#38a3ff'
            }, {
              title: 'Faturamento',
              prefix: 'R$',
              value: '12.167.943',
              diff: 4.67,
              icon: faDollarSign,
              iconcolor: '#15db5b'
            }, {
              title: 'Conversão',
              value: '12%',
              diff: -21.67,
              icon: faExchangeAlt,
              iconcolor: '#fed716'
            }, {
              title: 'Leads',
              value: '432',
              diff: 11.34,
              icon: faUser,
              iconcolor: '#ae47e3'
            }].map(card => (
              <Card>
                <TitleView>
                  <TitleIcon
                    color={card.iconcolor}
                    icon={card.icon}
                  />
                  <TitleText>
                    {card.title}
                  </TitleText>
                </TitleView>

                <DataView>
                  <TextValue>
                    {card?.prefix && (
                      <TextPrefix>
                        {card.prefix}
                      </TextPrefix>
                    )}
                    {card.value}
                  </TextValue>

                  <TextDiff>
                    <DiffIcon
                      icon={faAngleRight}
                      positive={card.diff >= 0}
                    ></DiffIcon>
                    {card.diff < 0 ? card.diff * -1 : card.diff}
                  </TextDiff>
                </DataView>
              </Card>
            ))
          }
        </ChartGrid>

        <Card>
          <TitleView>
            <TitleIcon
              color={'#15db5b'}
              icon={faDollarSign}
            />
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
