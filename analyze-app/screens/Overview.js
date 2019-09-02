import React, { Component } from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet,Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
 

import { Block, Card, Text, Icon, Label } from '../components';
import * as theme from '../constants/theme';

import {DrawerNavigator} from 'react-navigation';

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  }
});

class Overview extends Component {
  static navigationOptions = {
    headerLeftContainerStyle: {
      paddingLeft: 24
    },
    headerRightContainerStyle: {
      paddingRight: 24
    },
    headerLeft: (
      <TouchableOpacity><Icon menu  onPress={() => this.props.navigation.navigate('DrawerNavigator')} /></TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity><Icon notification /></TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle><Text h4>Analyze</Text></Block>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
          <Card row middle style={styles.margin}>
            <Block>
             <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width-80} // from react-native
    height={Dimensions.get('window').height-650}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
       }
    }}
    bezier
    style={{
      marginVertical:4,
      borderRadius: 16
      }}
   />
            </Block>
          </Card>

          <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
              <Icon vehicle />
              <Text h2 style={{ marginTop: 17 }}>1,428</Text>
              <Text paragraph color="gray">Vehicles on track</Text>
            </Card>
            
            <Card middle style={{ marginLeft: 7 }}>
              <Icon distance />
              <Text h2 style={{ marginTop: 17 }}>158.3</Text>
              <Text paragraph color="gray">Distance driven</Text>
            </Card>
          </Block>

          <Card
            title="TODAY'S TRIPS"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block row right>
              <Block flex={2} row center right>
                <Label blue />
                <Text paragraph color="gray">Today</Text>
              </Block>
              <Block row center right>
                <Label purple />
                <Text paragraph color="gray">Yesterday</Text>
              </Block>
            </Block>
            <Block>
              <Text>Chart</Text>
            </Block>
          </Card>

          <Card
            title="TOP DRIVERS"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={{ uri: 'https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Grand Tesoro</Text>
                    <Text paragraph color="gray">Chevrolet Bolt</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">$6,432</Text>
                    <Text paragraph right color="gray">1,232 miles</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={{ uri: 'https://images.unsplash.com/photo-1521657249896-063c0c611fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Invision App</Text>
                    <Text paragraph color="gray">Tesla Model X</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">$6,432</Text>
                    <Text paragraph right color="gray">1,232 miles</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={{ uri: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>React UI Kit</Text>
                    <Text paragraph color="gray">Volvo Intellisafe</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">$6,432</Text>
                    <Text paragraph right color="gray">1,232 miles</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card>


        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Overview;