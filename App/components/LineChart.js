import React from 'react'
import { View, Text, Animated, SegmentedControlIOS } from 'react-native'
import { COLORS } from './Theme'

const MULTIPLIER = 20

export default class LineChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heights: props.dataPoints.map(() => new Animated.Value(1))
    }
  }

  componentDidMount() {
    const anims = this.state.heights.map((h, i) => {
        return Animated.spring(h, { toValue: this.props.dataPoints[i] * MULTIPLIER })
      })
    Animated.parallel(anims).start()
  }

  componentWillReceiveProps(next) {
    if (next.dataPoints !== this.props.dataPoints) {
      this.setState({
        heights: next.dataPoints.map(() => new Animated.Value(1))
      }, () => {
        const anims = this.state.heights.map((h, i) => {
          return Animated.spring(h, { toValue: next.dataPoints[i] * MULTIPLIER })
        })
        Animated.parallel(anims).start()
      })
      
    }
  }

  renderData() {
    const { heights } = this.state
    return heights.map((height, i) => {
      if (height._value > 0) {
        const background = COLORS[this.props.dataPoints[i] - 1] || '#ffffba'
        return (
          <Animated.View
            key={i}
            style={[{ height: height, flex: 1, backgroundColor: background }, styles.bar]}
          />
        )
      } else {
        return null
      }
    })
  }

  render() {
    return <View style={styles.dataContainer}>{this.renderData()}</View>
  }
}

const styles = {
  dataContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    height: 200
  },
  bar: {
    flex: 1,
    opacity: .75,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
}
