import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export const Container = styled.div`
  width: 23%;
  min-width: 220px;
  ///height: 20%;
  min-height: 200px;
  background-color: white;
`
export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
export const Icon = styled(MoreVertIcon)``

export const Date = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.623);
`
export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 10px;
`
export const Desc = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.723);
`
