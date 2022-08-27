import { useRef, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import { SidebarMenu } from './SidebarMenu'

export const Sidebar = () => {
  const [open, setOpen] = useState(true)

  const motionConfig = {
    animation: !open ? { width: '5%' } : { width: '20%' },
    initial: !open ? { width: '20%' } : { width: '5%' },
    transition: { duration: 0.7 },
  }

  const Container = styled(motion.div)`
    ///background-color: #26262c;
    background-color: #0000ff9d;
    height: 100%;
  `
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 15px 5px;
  `
  const Top = styled.div`
    display: flex;
    align-items: center;
  `
  const Icon = styled(MenuIcon)`
    color: white;
    font-size: 2.5rem !important;
    cursor: pointer;
  `
  const Title = styled.h1`
    font-size: 1.5rem;
    color: white;
    margin-left: 15px;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
  `

  return (
    <AnimatePresence exitBeforeEnter>
      <Container
        animate={motionConfig.animation}
        transition={motionConfig.transition}
        initial={motionConfig.initial}
      >
        <Wrapper>
          <Top>
            <Icon
              onClick={() => {
                setOpen(!open)
              }}
            />
            {open && <Title>Notes APP</Title>}
          </Top>
          <SidebarMenu isOpen={open} />
        </Wrapper>
      </Container>
    </AnimatePresence>
  )
}
