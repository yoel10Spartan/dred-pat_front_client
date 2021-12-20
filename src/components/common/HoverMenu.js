import React from 'react';
import { Link } from 'react-router-dom';
import {
    SubMenuUser,
    ItemSubMenuUser
} from '../../styles/hoverMenuStyles';

export const HoverMenu = ({itemsMenu}) => {
    return (
        <SubMenuUser>
            {
                itemsMenu.map(item => (
                    <ItemSubMenuUser key={item.id}>
                        <Link to={item.url} style={ stylesLink }>
                            {item.title}
                        </Link>
                    </ItemSubMenuUser>
                ))
            }
        </SubMenuUser>
    )
}

const stylesLink = {
    margin: '0 0 0 5px',
    textDecoration: 'none'
}