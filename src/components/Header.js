import React from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import { useDataLayer } from '../contexts/DataLayer';

const Header = () => {
    const [{user}] = useDataLayer()
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search"/>
            </div>
            <div className="header__right">
                <Avatar alt="User's Picture" src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
