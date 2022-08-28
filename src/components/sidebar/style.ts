import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  ///background-color: #26262c;
  background-color: #0000ff9d;
  height: 100%;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 15px 5px;
`
export const Top = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled(MenuIcon)`
  color: white;
  font-size: 2.5rem !important;
  cursor: pointer;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin-left: 15px;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
`
