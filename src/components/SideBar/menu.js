import {
  faChartBar,
  faDatabase,
  faBullseye,
  faShoppingCart,
  faUser,
  faReceipt,
  faCog
} from '@fortawesome/free-solid-svg-icons'

const menu = [{
  to: '/',
  title: 'Dashboard',
  icon: faChartBar
}, {
  to: '/leads',
  title: 'Leads',
  icon: faDatabase
}, {
  to: '/Campaigns',
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
}]

export default menu
