import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin'

import AdminHome from './home/admin.Home';

injectTapEventPlugin();
class AdminApp extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="row">
                    <AdminHome />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AdminApp;
