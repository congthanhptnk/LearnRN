import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="email@email.com"
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
