import * as React from 'react';
import { Button } from '@elements/button';
import { FloatingInput } from '@elements/floatingInput';
import { Content } from './Content';
import { labels } from '@i18n/en_EN';

interface IChangePasswordClassProps {
    labels: typeof labels;
}

export class ChangePassword extends React.Component<IChangePasswordClassProps> {
    public render() {
        const { labels } = this.props;
        return (
            <Content title={labels.accountDashboard.changePassword}>
                <form>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                type="email"
                                name="email"
                                label={labels.authentication.mailInputLabel}
                            />
                            <FloatingInput
                                name="newPassword"
                                type="password"
                                label={labels.authentication.newPassword}
                            />
                        </div>
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                type="password"
                                name="password"
                                label={labels.authentication.currentPassword}
                            />
                            <FloatingInput
                                type="password"
                                name="confirmPassword"
                                label={labels.authentication.confirmPassword}
                            />
                        </div>
                        <div className="col col-12">
                            <Button className="btn btn-primary btn-lg">
                                Change password
                            </Button>
                        </div>
                    </div>
                </form>
            </Content>
        );
    }
}
