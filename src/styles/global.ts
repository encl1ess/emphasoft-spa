import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Roboto', sans-serif; 

    @media (max-width: 450px) {
        font-size: 12px;
      
    }
   }
   #root{
       margin:0 auto;
   }


`