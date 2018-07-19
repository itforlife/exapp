import React from 'react';
import { DashBoardHeader } from '../modules/account-dashboard/dashBoardHeader';
import { accountDashBoardStyle } from './accountDashboard.css';
import { YourProfile } from '../modules/account-dashboard/yourProfile';

class AccountDashBoard extends React.Component {


    render() {
        return (
            <div>
                <DashBoardHeader />
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Personal Information</h6>
                                </div>
                                <div className="ui-block-content">
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12  responsive-display-none">
                            <div className="ui-block">
                                <YourProfile />
                            </div>
                        </div>
                    </div>
                </div>
            <style jsx>{accountDashBoardStyle}</style>

            </div>
        );
    }
}

export default AccountDashBoard; 