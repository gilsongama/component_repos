import React from 'react'
import { Wrapper, WrapperFullName, WrapperLink, WrapperTitle } from './styled';

const RepositoryItem = ({ name, LinkToRepo, fullName }) => {
    return (
        <Wrapper>
            <WrapperTitle>{name}</WrapperTitle>
            <WrapperFullName>full name: </WrapperFullName>
            <WrapperLink href={LinkToRepo} target="_blank">
                {fullName}
            </WrapperLink>
        </Wrapper>
    );
}

export default RepositoryItem
