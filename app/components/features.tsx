import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

export const Features = () => {
    return (

        <View style={styles.container}>

            <View style={styles.star}>
                <View style={styles.starFeatures}>
                    <FontAwesome name="star" size={20} color="white" />
                </View>
                <Text style={{ marginLeft: 10 }}>Starred Messages</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 200 }} />

            </View>

            <View style={styles.line}></View>

            <View style={styles.desktop}>
                <View style={styles.desktopFeatures}>
                <FontAwesome name="laptop" size={20} color="white" />

                </View>
                <Text style={{ marginLeft: 10 }}>WhatsApp Web/Desktop</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 160 }} />


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
    star: {
        marginBottom: 15,
        flexDirection: "row",
        alignItems: 'center'
    },
    starFeatures: {
        backgroundColor: '#FBB500',
        width: 30, height: 30,
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
    desktop:{ 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    desktopFeatures:{ 
        backgroundColor: '#07AD9F', 
        width: 30, height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5 
    }


});