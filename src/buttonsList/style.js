import styled from 'styled-components'

export const Li = styled.li``

export const Button = styled.button`
   color: #ffffff;
   padding: 5px  15px;
   border-radius: 20px;
   background-color: ${props => {
     if (props.clicked === true) {
       return '#f3aa4e'
     }
     return 'transparent'
   }};
   border: ${props => {
     if (props.clicked === true) {
       return 'none'
     }
     return '1px solid #f1f5f9'
   }};/
`
