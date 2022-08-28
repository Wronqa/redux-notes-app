import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SidebarMenu } from '../menu'
import { Container, Wrapper, Top, Icon, Title } from './style'

export const Sidebar = () => {
  const [open, setOpen] = useState(true)

  const motionConfig = {
    animation: !open ? { width: '5%' } : { width: '20%' },
    initial: !open ? { width: '20%' } : { width: '5%' },
    transition: { duration: 0.7 },
  }

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
