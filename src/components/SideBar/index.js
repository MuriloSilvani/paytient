import { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Bar,
  Item
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartBar,
  faDatabase,
  faBullseye,
  faShoppingCart,
  faUser,
  faReceipt,
  faCog
} from '@fortawesome/free-solid-svg-icons'

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
    title: 'Campanas',
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

  return (
    <Bar>
      {
        menu.map((item, index) => {
          return (
            <Link
              key={`${item.to}${index}`}
              to={item.to}
            >
              <Item>
                <FontAwesomeIcon icon={item.icon} />
                {item.title}
              </Item>
            </Link>
          )
        })
      }
    </Bar>
  )
}

export default SideBar