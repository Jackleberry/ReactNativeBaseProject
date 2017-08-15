import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class GradientContainer extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={this.props.colors || ['#0A3D5A', '#317BA5']}
        style={[styles.container, this.props.style]}
        start={this.props.start || {x: 0.5, y: 0.25}}
        end={this.props.end || {x: 0.1, y: 1.0}}
        locations={this.props.locations}>
        {this.props.children}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
