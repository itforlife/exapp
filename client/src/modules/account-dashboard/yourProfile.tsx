import React from 'react'
import { yourProfileStyle } from './yourProfile.css'

export class YourProfile extends React.Component {
    public render() {
        return (
            <div className="your-profile">
                <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Your PROFILE</h6>
                </div>
                <div role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab">
                            <h6 className="mb-0">
                                <a
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Profile Settings
                                    <svg className="olymp-dropdown-arrow-icon">
                                        <use xlinkHref="#/assets/olymp-dropdown-arrow-icon" />
                                    </svg>
                                </a>
                            </h6>
                        </div>

                        <div
                            className="collapse show"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                        >
                            <ul className="your-profile-menu">
                                <li>
                                    <a>Personal Information</a>
                                </li>
                                <li>
                                    <a>Change Password</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <style jsx>{yourProfileStyle}</style>
            </div>
        )
    }
}
