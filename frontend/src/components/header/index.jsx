import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { HeaderContainer, HeaderContent, Brand, Lists, Item, Panier, Span } from './HeaderElements';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Brand>ToyStore</Brand>
                <Lists>
                    <Item>Catalog</Item>
                    <Item>Delivery</Item>
                    <Item>About</Item>
                    <Item>Contact</Item>
                </Lists>
                <Panier>
                    <BsCart3 className="cartTrolley" />
                    <Span>1</Span>
                </Panier>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
