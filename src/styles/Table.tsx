
import styled from 'styled-components';
import { BLUE } from './utils/colors';

const Table = styled.table`
    width: 80vw;
    border-collapse: collapse;
	  box-shadow: 0 0 20px rgba(0,0,0,0.1);
    th,
    td {
    	padding: 15px;
    	background-color: rgba(255,255,255,0.2);
    	color: #55608f;
		  max-width: 15%;
		  word-wrap: break-word;
		  text-align: center;
    }

    th {
      color: white;
      letter-spacing: 0.1em;
      font-weight: 300;

    }
    thead {
      z-index: 100;
      top: 0;
		  background: ${BLUE};
      position: sticky;
	  }

    @media (max-width: 750px) {
      th:nth-child(n+5),
      td:nth-child(n+5) {
        display: none;
      }
      td {
        flex-shrink: no-shrink;
        width: 45%;
      }
    }

    @media (max-width: 450px) {
      th:nth-child(n+3),
      td:nth-child(n+3) {
        display: none;
      }
    }
`;
export default Table;