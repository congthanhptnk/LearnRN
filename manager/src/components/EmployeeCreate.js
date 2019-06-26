import React, { Component } from 'react';

import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="john doe"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone Number"
            placeholder="12345678"
          />
        </CardSection>

        <CardSection>
          <Button>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
