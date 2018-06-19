import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LoginService from '../../services/LoginService';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
        }
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePassInput = this.handlePassInput.bind(this);
        this.sendUserData = this.sendUserData.bind(this);

    }


    handleEmailInput(event) {
        this.setState({
            email: event.target.value,
        })
    }

    handlePassInput(event) {
        this.setState({
            pass: event.target.value,
        })
    }

    sendUserData() {
        LoginService.login(this.state.email, this.state.pass)
            .then((data) => {
                sessionStorage.setItem('user', JSON.stringify(data.data));
            })
    }

    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>Register</Tab>
                    </TabList>

                    <TabPanel>
                        <h1> BitBook Login </h1>
                        <p> Lorem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet,orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet,orem ipsum dolor sit amet,orem ipsum dolor sit amet,
                    </p>
                        <span>email</span>
                        <input type="email" value={this.state.email} onChange={this.handleEmailInput} placeholder="Email Address" />
                        <br />
                        <span>pass</span>
                        <input type="password" value={this.state.pass} onChange={this.handlePassInput} placeholder="Password" />
                        <br />

                        <input type="button" onClick={this.sendUserData} value="Login" />
                    </TabPanel>
                    <TabPanel>
                        <h1> BitBook Register </h1>
                        <p> Lorem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet,orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet, orem ipsum dolor sit amet,orem ipsum dolor sit amet,orem ipsum dolor sit amet,
                    </p>
                        <span>Name</span>
                        <input type="text" placeholder="Full Name" />
                        <br />
                        <span>email</span>
                        <input type="email" placeholder="Email address" />
                        <br />
                        <span>pass</span>
                        <input type="password" placeholder="Password" />
                        <br />

                        <input type="button" value="Register" />
                    </TabPanel>
                </Tabs>
            </div >
        )
    }
}

export default LoginPage;
