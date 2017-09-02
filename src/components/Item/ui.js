import styled from 'styled-components'
import { Link } from 'react-router'

export const Item = styled(Link)`
${'' /* margin: 0 0 8px; */}
${'' /* break-inside: avoid; */}
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & + a {
    padding-top: 55px;
  }
  img {
    ${'' /* max-width: 100%; */}
    ${'' /* perspective: 1000; */}
    ${'' /* transition: 0.5s; */}
    height: 100%;
  }
  .info {
    width: 100%;
    height: 7%;
    position: absolute;
    bottom: 40%;
    left: 0;
    background: #fff;
    opacity: 0;
    transition: opacity .5s;
    text-transform: none;
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    h3 {
      margin-right: 5px;
    }
  }
  &:hover .info {
    opacity: .9;
  }
`