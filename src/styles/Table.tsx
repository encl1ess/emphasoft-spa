
import styled from 'styled-components';

const Table = styled.table`
    width: 80vw;
    border-collapse: collapse;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0,0,0,0.1);


    th,
    td {
    	padding: 15px;
    	background-color: rgba(255,255,255,0.2);
    	color: #55608f;
    }

    th {
    	text-align: left;
        color: white;
    }

    thead {
    	th {
    		background-color: #55608f;
    	}
    }

    tbody {
    	tr {
    		&:hover {
    			background-color: rgba(255,255,255,0.3);
    		}
    	}
    	td {
    		position: relative;
    		&:hover {
    			&:before {
    				content: "";
    				position: absolute;
    				left: 0;
    				right: 0;
    				top: -9999px;
    				bottom: -9999px;
    				background-color: rgba(255,255,255,0.2);
    				z-index: -1;
    			}
    		}
    	}
    }
`;
export default Table;