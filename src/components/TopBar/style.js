import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bar = styled.div`
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  transition-duration: 0.3s;
  color: #d2d2d2;
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`

const NotificationView = styled.div`
  position: relative;
  &::after {
    content: '${props => props.count > 9 ? `-` : props.count}';
    color: #fff;
    position: absolute;
    bottom: 50%;
    left: 50%;
    background: #00d953;
    border-radius: 50%;
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-weight: 900;
    height: 1.1rem;
    width: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
`

const UserView = styled.div`
  height: 34px;
  width: 34px;
  background: #efefef;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const UserImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`

export {
  Bar,
  MenuIcon,
  NotificationView,
  Actions,
  UserView,
  UserImage
}
