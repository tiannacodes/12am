import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%', height: Dimensions.get('window').height,
    },

    titles: {
        width: '100%', alignItems: "center",
    },

    header: {
        marginTop: '30%', fontSize: 35, fontWeight: "700", color: 'black',
    },


    subheader: {
        fontSize: 20, marginTop: '12%', color: 'black', fontWeight: "600", paddingLeft: 50
    },

    tagline: {
        fontSize: 20, marginTop: '20%', color: 'black', fontWeight: "600", paddingLeft: 50
    },

    name: {
        fontSize: 20, marginTop: '19%', color: 'black', fontWeight: "600", paddingLeft: 90
    },

    image: {
        width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute',
    },

    buttonsContainer: {
        position: 'absolute', bottom: 50, width: '100%',
    },

});

export default styles;
