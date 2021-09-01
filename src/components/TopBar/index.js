import {
  Bar,
  MenuIcon,
  NotificationView,
  Actions,
  UserView,
  UserImage
} from './style'
import {
  faBars,
  faComment,
  faBell
} from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  return (
    <Bar>
      <MenuIcon
        icon={faBars}
      />

      <Actions>
        <NotificationView
          count={1}
        >
          <MenuIcon
            icon={faComment}
          />
        </NotificationView>

        <NotificationView
          count={3}
        >
          <MenuIcon
            icon={faBell}
          />
        </NotificationView>


        <UserView>
          <UserImage src="https://avatars.githubusercontent.com/u/35570019?v=4" alt="user" />
        </UserView>
      </Actions>
    </Bar>
  )
}

export default TopBar
