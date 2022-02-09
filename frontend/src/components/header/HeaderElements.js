import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 6rem;
    color: #fff;
    background-color: #4c0027;
`;

export const HeaderContent = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Brand = styled.div`
    font-size: 2rem;
    flex: 1;
    margin-right: 2rem;
`;
export const Lists = styled.ul`
    width: 30%;
    flex: 2;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;
export const Item = styled.li`
    margin: 0 1.5rem;
    cursor: pointer;
`;
export const Panier = styled.div`
    flex: 4;
    display: flex;
    justify-content: flex-end;
    position: relative;

    .cartTrolley {
        font-size: 1.2rem;
    }
`;
export const Span = styled.span`
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #8a39e1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    position: absolute;
    bottom: 0.6rem;
    right: -0.6rem;
`;
