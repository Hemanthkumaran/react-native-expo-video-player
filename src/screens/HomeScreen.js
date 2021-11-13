import React, { Component } from 'react';
import { View, Dimensions, FlatList } from 'react-native';

import VideoPlayer from '../components/VideoPlayer';


const { height, width } = Dimensions.get('window');
const DATA = require("../data.json");


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          outOfBoundItems:[]
        };
    }

      
    handleViewableItemsChanged = ({ changed }) => { 

        const outOfBoundItems = changed; 

        if(outOfBoundItems.length !== 0) {
        this.setState({outOfBoundItems});
        }

    };

    renderPosts = ({ item, index }) => {
        return <VideoPlayer
            height={height/1.6}
            width={width}
            videoUri={item.video}
            item={item}
            outOfBoundItems={this.state.outOfBoundItems}
        />
    }

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    style={{ flex:1 }} 
                    contentContainerStyle={{paddingTop:25}}
                    keyExtractor={(_, index) => index}
                    data={DATA.videos}
                    renderItem={this.renderPosts}
                    horizontal={false}
                    scrollEventThrottle={20} 
                    showsVerticalScrollIndicator={false}
                    onViewableItemsChanged={this.handleViewableItemsChanged}
                    viewabilityConfig={{itemVisiblePercentThreshold: 30,  waitForInteraction: true}}
                    overScrollMode="never"
                />
            </View>
        )
    }
}

export default HomeScreen;
