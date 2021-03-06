import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'steelblue' : 'black'}; // Conditions in styled components
        :hover {
            color: tomato;
        }
    }
    h2 {
        font-size: 1.5rem;
        color: grey;
        }
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header  colored>
            <h1>Ilja Meleskevic</h1>
            <h2>{allPosts} posts, liked {liked}</h2>

        </Header>
    )
}

export default AppHeader;