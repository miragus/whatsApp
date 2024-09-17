import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

export const DeviceCare = () => {
    return (

        <View style={styles.container}>

            <View style={styles.help}>
                <View style={styles.helpFeatures}>
                <FontAwesome name="plus" size={24} color="white" />
                </View>
                <Text style={{ marginLeft: 10 }}>Help</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 285 }} />

            </View>

            <View style={styles.line}></View>

            <View style={styles.heart}>
                <View style={styles.heartFeatures}>
                <FontAwesome name="heart-o" size={17} color="white" />

                </View>
                <Text style={{ marginLeft: 10 }}>Tell a Friend</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 239 }} />


            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        padding: 12,
        justifyContent: 'center',
        marginBottom: 25

    },
    help: {
        marginBottom: 15,
        flexDirection: "row",
        alignItems: 'center'
    },
    helpFeatures: {
        backgroundColor: '#4BA0FE',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    line:{ 
        width: '100%', 
        backgroundColor: '#E2E2E4', 
        height: 1, 
        bottom: 7, 
        left: 40 
    },
    heart:{ 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    heartFeatures:{ 
        backgroundColor: '#FF2C55', 
        width: 30, height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5 
    }


});