import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import MenuItem from 'material-ui/MenuItem';
import Item from 'material-ui/svg-icons/action/dashboard';
import DashBoard from 'material-ui/svg-icons/action/assessment';
import Customer from 'material-ui/svg-icons/action/supervisor-account';
import Product from 'material-ui/svg-icons/places/airport-shuttle';
import News from 'material-ui/svg-icons/av/new-releases';
import KeyBoardReturn from 'material-ui/svg-icons/hardware/keyboard-return';

class ListMenu extends Component {

    render() {
        return (
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <MenuItem primaryText="Thống Kê" leftIcon={<DashBoard />} />
                </Link>
                <Link to="/san-pham" style={{ textDecoration: 'none' }}>
                    <MenuItem primaryText="Sản Phẩm" leftIcon={<Item />} />
                </Link>
                <Link to="/tin-tuc" style={{ textDecoration: 'none' }}>
                    <MenuItem primaryText="Tin Tức" leftIcon={<News />} />
                </Link>
                <Link to="/thanh-vien" style={{ textDecoration: 'none' }}>
                    <MenuItem primaryText="Thành Viên" leftIcon={<Customer />} />
                </Link>
                <Link to="/nhap-hang" style={{ textDecoration: 'none' }}>
                    <MenuItem primaryText="Nhập Hàng" leftIcon={<Product />} />
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <MenuItem primaryText="Đăng Xuất" leftIcon={<KeyBoardReturn />} />
                </Link>
            </div>
        );
    }
}

export default ListMenu;
