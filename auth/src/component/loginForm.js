import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@mail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button buttonText={'Login'} />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
