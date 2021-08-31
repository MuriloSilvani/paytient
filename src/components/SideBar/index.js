import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Bar,
  Head,
  LogoImage,
  BarScroll,
  Item,
  Icon,
  Footer
} from './style'
import {
  faChartBar,
  faDatabase,
  faBullseye,
  faShoppingCart,
  faUser,
  faReceipt,
  faCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/images/logo.png'

const SideBar = () => {
  const [menu] = useState([{
    to: '/',
    title: 'Dashboard',
    icon: faChartBar
  }, {
    to: '/leads',
    title: 'Leads',
    icon: faDatabase
  }, {
    to: '/campaingns',
    title: 'Campanhas',
    icon: faBullseye
  }, {
    to: '/sales',
    title: 'Vendas',
    icon: faShoppingCart
  }, {
    to: '/clients',
    title: 'Clientes',
    icon: faUser
  }, {
    to: '/billing',
    title: 'Cobrança',
    icon: faReceipt
  }, {
    to: '/configurations',
    title: 'Configurações',
    icon: faCog
  }])

  const location = useLocation()

  return (
    <Bar>
      <Head>
        <Link
          to="/"
        >
          <LogoImage
            src={Logo}
            alt="Logo"
          />
        </Link>
      </Head>

      <BarScroll>
        {
          menu.map((item, index) => {
            return (
              <Item
                exact
                key={`${item.to}${index}`}
                to={item.to}
                activeClassName='is-active'
              >
                <Icon
                  icon={item.icon}
                  active={`${location?.pathname === item.to}`}
                />
                {item.title}
              </Item>
            )
          })
        }
      </BarScroll>

      <Footer>
        <Item
          exact
          to='/login'
        >
          <Icon icon={faSignOutAlt} />
          Sair
        </Item>
      </Footer>
    </Bar>
  )
}

export default SideBar