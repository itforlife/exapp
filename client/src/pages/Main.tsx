import * as React from 'react';
// import { AuthenticationComponent } from '../modules/authentication/authenticationComponent';
// import { Button } from '../modules/elements';
interface IUser {
    name: string;
}
interface IMainProps {
    users: IUser[];
}
export default class Main extends React.Component<IMainProps> {
    public render() {
        return (
            <div>
                {this.props.users.map(u => (
                    <div>Name: {u.name}</div>
                ))}
            </div>
        );
    }
}
