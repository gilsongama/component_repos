import React from 'react'
import { Wrapper, WrapperFullName, WrapperTitle } from './styled';

const RepositoryItem = ({ name, LinkToRepo, fullName }) => {
    return (
        <Wrapper>
            <WrapperTitle>{name}</WrapperTitle>
            <WrapperFullName>full name:</WrapperFullName>
            <a href={LinkToRepo} target="_blank">
                {fullName}
            </a>
        </Wrapper>
    );
}

export default RepositoryItem
