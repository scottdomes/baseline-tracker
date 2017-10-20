import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  Easing
} from 'react-native';
import RecordEntryForm from '../containers/RecordEntryForm'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerHeight: new Animated.Value(Dimensions.get('window').height)
    };
  }

  
  render() {
    return (
      <Animated.View
        style={[{ height: this.state.containerHeight }, styles.container]}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <RecordEntryForm />
        </ScrollView>
      </Animated.View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  button: {
    backgroundColor: '#baffc9'
  }
});
