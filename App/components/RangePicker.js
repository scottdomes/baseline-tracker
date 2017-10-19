import React from 'react';
import { View, SegmentedControlIOS } from 'react-native';
import LineChart from '../components/LineChart'

const DATE_OPTIONS_NUMS = [365, 90, 30, 7]
const DATE_OPTIONS_STRINGS = DATE_OPTIONS_NUMS.map(num => `${num} Days`)

export default class RangePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.getData(this.props.data, 0),
      selectedIndex: 0
    }
  }

  getData(dataPoints, currentIndex) {
    const range = DATE_OPTIONS_NUMS[currentIndex]
    const arr = dataPoints.slice(Math.max(dataPoints.length - range, 1))
    let properLength = undefined
    const missingLength = range - arr.length
    if (missingLength > 0) {
      const filler = Array.from(Array(missingLength).keys()).map(num => .1)
      properLength = filler.concat(arr)
    }
    return properLength || arr
  }

  render() {
    return (
      <View>
        <LineChart dataPoints={this.state.data} />
        <SegmentedControlIOS
          values={DATE_OPTIONS_STRINGS}
          selectedIndex={this.state.selectedIndex}
          onChange={event => {
            this.setState({
              selectedIndex: event.nativeEvent.selectedSegmentIndex,
              data: this.getData(this.props.data, event.nativeEvent.selectedSegmentIndex)
            })
          }}
        />
      </View>
    );
  }
}
