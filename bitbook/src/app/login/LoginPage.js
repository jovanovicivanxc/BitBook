import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LoginService from '../../services/LoginService';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            regName: "",
            regEmail: "",
            regPass: "",
        }
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePassInput = this.handlePassInput.bind(this);
        this.sendUserData = this.sendUserData.bind(this);

        this.handleRegNameInput = this.handleRegNameInput.bind(this);
        this.handleRegEmailInput = this.handleRegEmailInput.bind(this);
        this.handleRegPassInput = this.handleRegPassInput.bind(this);
        this.sendRegUserData = this.sendRegUserData.bind(this);
    }

    validateLoginInput() {
        if (this.state.email.length === 0 || this.state.pass.length === 0) {
            return alert("Please fill in the forms fields!");
        }
    }

    validateRegisterInput() {
        if (this.state.regName === 0 || this.state.regEmail === 0 || this.state.regPass === 0) {
            return alert("Please fill in the forms fields!");
        }
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

    handleRegNameInput(event) {
        this.setState({
            regName: event.target.value,
        })
    }

    handleRegEmailInput(event) {
        this.setState({
            regEmail: event.target.value,
        })
    }

    handleRegPassInput(event) {
        this.setState({
            regPass: event.target.value,
        })
    }

    sendUserData() {
        LoginService.login(this.state.email, this.state.pass)
            .then((data) => {
                sessionStorage.setItem('user', JSON.stringify(data.data));

            })
            .then(() => window.location.reload())
    }


    sendRegUserData() {
        LoginService.register(this.state.regName, this.state.regEmail, this.state.regPass)
            .then(() => window.location.reload())
    }


    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>Register</Tab>
                    </TabList>

                    <TabPanel className='col-4 offset-4'>
                        <h1> BitBook Login </h1>
                        <p> Ulogujte se i zapocnite avanturu :
                    </p>
                        <span className="col-2">email</span>
                        <input className="col-8" type="email" value={this.state.email} onChange={this.handleEmailInput} placeholder="Email Address" />
                        <br />
                        <br />
                        <span className=" col-2" >pass </span>
                        <input className="col-8" type="password" value={this.state.pass} onChange={this.handlePassInput} placeholder="Password" />
                        <br />
                        <input type="button" onClick={(e) => { this.sendUserData(); this.validateLoginInput() }} value="Login" />

                    </TabPanel>

                    <TabPanel>
                        <h1> BitBook Register </h1>
                        <p> Ukoliko nemate otvoren nalog kod nas, ovde se mozete registrovati, i uzivati u nasem sajtu :  </p>
                        <span>Name</span>
                        <input type="text" value={this.state.regName} onChange={this.handleRegNameInput} placeholder="Full Name" />
                        <br />
                        <br />
                        <span>email</span>
                        <input type="email" value={this.state.regEmail} onChange={this.handleRegEmailInput} placeholder="Email address" />
                        <br />
                        <br />
                        <span>pass</span>
                        <input type="password" value={this.state.regPass} onChange={this.handleRegPassInput} placeholder="Password" />
                        <br />

                        <input type="button" onClick={(e) => { this.sendRegUserData(); this.validateRegisterInput() }} value="Register" />

                    </TabPanel>
                </Tabs>
            </div >
        )
    }
}

export default LoginPage;
