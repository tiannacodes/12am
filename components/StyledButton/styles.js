import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '80%', padding: 10, alignSelf: "center"
    },

    button: {
        height: 50,
        borderRadius: 20,
        justifyContent: 'center', alignItems: 'center'
    },

    text: {
        fontSize: 14, fontWeight: '700',
        textTransform: 'uppercase',
    }
});

export default styles;