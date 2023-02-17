
import styled from 'styled-components';
import { BLUE, BLUE_GRADIENT } from './utils/colors';

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
		overflow: hidden;
		text-align: center;
    }

    th {
        color: white;
        letter-spacing: 0.1em;
        font-weight: 300;
		position: relative;
    }

    thead {
		background: ${BLUE}
	}
`;
export default Table;