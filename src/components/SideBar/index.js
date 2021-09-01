import { useLocation } from 'react-router-dom'
import {
  Bar,
  Head,
  LogoImageView,
  LogoImage,
  BarScroll,
  Item,
  Icon,
  ItemText,
  Footer
} from './style'
import {
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/images/logo.svg'

import menu from './menu'

const SideBar = ({ hiddenMenu }) => {
  const location = useLocation()

  return (
    <Bar>
      <Head>
        <LogoImageView
          to="/"
          className={hiddenMenu && 'hidden'}
        >
          <LogoImage
            src={Logo}
            alt="Logo"
          />
        </LogoImageView>
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
                className={hiddenMenu && 'hidden'}
              >
                <Icon
                  icon={item.icon}
                  active={`${location?.pathname === item.to}`}
                />
                <ItemText
                  className={hiddenMenu && 'hidden'}
                >
                  {item.title}
                </ItemText>
              </Item>
            )
          })
        }
      </BarScroll>

      <Footer
      >
        <Item
          exact
          to='/login'
          className={hiddenMenu && 'hidden'}
        >
          <Icon icon={faSignOutAlt} />
          <ItemText
            className={hiddenMenu && 'hidden'}
          >
            Sair
          </ItemText>
        </Item>
      </Footer>

    </Bar>
  )
}

export default SideBar