import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { Container, Menu, Icon, MenuItem } from './style'

export const SidebarMenu = ({ isOpen }: { isOpen: boolean }) => {
  ///Problem z nazwami
  return (
    <Container>
      <Menu>
        <MenuItem>
          <Icon>
            <FullscreenIcon style={{ fontSize: '2rem' }} />
          </Icon>
          {isOpen && 'Overview'}
        </MenuItem>
        <MenuItem>
          <Icon>
            <FullscreenIcon style={{ fontSize: '2rem' }} />
          </Icon>
          {isOpen && 'Overview'}
        </MenuItem>
        <MenuItem>
          <Icon>
            <FullscreenIcon style={{ fontSize: '2rem' }} />
          </Icon>
          {isOpen && 'Overview'}
        </MenuItem>
        <MenuItem>
          <Icon>
            <FullscreenIcon style={{ fontSize: '2rem' }} />
          </Icon>
          {isOpen && 'Overview'}
        </MenuItem>
      </Menu>
    </Container>
  )
}
