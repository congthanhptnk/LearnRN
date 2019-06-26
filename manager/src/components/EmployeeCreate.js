import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="john doe"
            value={this.props.name}
            onChangeText={(text) => { this.props.employeeUpdate({ prop: 'name', value: text }); }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone Number"
            placeholder="12345678"
            value={this.props.phone}
            onChangeText={(text) => { this.props.employeeUpdate({ prop: 'phone', value: text }); }}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text styles={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={(day) => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
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

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
