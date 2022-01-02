import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
//importing styles file our directory
import styles from './styles';
//import in button component
import StyledButton from "../StyledButton";


const PageItem = (props) => {

    const {header, subheader, tagline, image, name} = props.page;

    return (
        <View style={styles.pageContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>

                <Text style={styles.header}>{header}</Text>
                <Text style={styles.subheader}>{subheader}</Text>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.tagline}>{tagline}</Text>

            </View>


            <View style={styles.buttonsContainer}>

                <StyledButton type="secondary" content={"official website"}
                              onPress={() => {
                                  console.warn("Navigating to website!");
                              }}
                />

                <StyledButton type="primary" content={"join discord"}
                              onPress={() => {
                                  console.warn("Navigating to discord channel!");
                              }}
                />

            </View>

        </View>
    );
};

export default PageItem;