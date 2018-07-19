import React from 'react';
import { dasBoardHeaderStyle } from './dashBoardHeader.css';
import { observer, inject } from 'mobx-react';
import { translate } from 'react-i18next';

@translate(['data'])
@observer
export class DashBoardHeader extends React.Component { 

    render() {
        const { t } = this.props

        return (
            <div className="main-header">
                <div className="content-bg-wrap bg-account"></div>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                            <div className="main-header-content">
                                <h1>{t('accountDashboard.headerTitle')}</h1>
                                <p>{t('accountDashboard.headerContent')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="img-bottom" src="static/assets/img/account-bottom.png" alt="friends" />
                <style jsx>{dasBoardHeaderStyle}</style>
            </div>
        );
    }
    
}