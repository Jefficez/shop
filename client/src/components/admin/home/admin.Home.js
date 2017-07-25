import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import ListMenu from './admin.Home.listMenu';

import DashBoard from '../subComponent/dashboard/DashBoard';
import Item from '../subComponent/item/Item';
import News from '../subComponent/news/News';
import Product from '../subComponent/product/Product';
import User from '../subComponent/user/User';

import ErrorPage from './admin.error';

class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openDrawer: true
        }

        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.setState({ openDrawer: !this.state.openDrawer })
    }

    render() {
        const classOpen = "col-xs-9 col-sm-9 col-md-9 col-lg-9";
        const classClose = "col-xs-11 col-sm-11 col-md-11 col-lg-11";
        const { openDrawer } = this.state;
        return (
            <div>
                <AppBar style={{ height: 64 }} onLeftIconButtonTouchTap={this.openDrawer} />
                <Router>
                    <div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <Drawer
                                open={openDrawer}
                                containerStyle={{ height: (window.innerHeight - 64), top: 64 }}>
                                <ListMenu />
                            </Drawer>
                        </div>
                        <div className={openDrawer ? classOpen : classClose}>
                            <Switch>
                                <Route exact path="/" component={DashBoard} />
                                <Route path="/nhap-hang" component={Item} />
                                <Route path="/thanh-vien" component={User} />
                                <Route path="/tin-tuc" component={News} />
                                <Route path="/san-pham" component={Product} />
                                <Route component={ErrorPage} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default AdminHome;
