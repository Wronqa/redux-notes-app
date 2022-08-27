import React from 'react'
import styled from 'styled-components'
import FullscreenIcon from '@mui/icons-material/Fullscreen'

export const SidebarMenu = ({ isOpen }: { isOpen: boolean }) => {
  const Container = styled.div``
  const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  `
  const MenuItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.5rem !important;
    margin-top: 10px;
    color: white;
  `
  const Icon = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-right: 20px;
  `

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
