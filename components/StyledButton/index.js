import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    //const type = props.type;
    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#d6a00e';
    //if button type is primary then background black otherwise white
    const textColor = type === 'primary' ? '#d6a00e' : '#171A20CC';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;