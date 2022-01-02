import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import styles from './styles';
import page from './page';
import PageItem from "../PageItem";


const PageList = () => {
    return (
        <View style={styles.container}>
            <FlatList

                data={page}
                renderItem={({item}) => <PageItem page={item}/>}

                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default PageList;