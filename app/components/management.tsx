import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

export const Managements = () => {
    return (

        <View style={styles.container}>

            <View style={styles.key}>
                <View style={styles.keyFeatures}>
                <FontAwesome name="wrench" size={20} color="white" />
                </View>
                <Text style={{ marginLeft: 10 }}>Accounts</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 255 }} />

            </View>

            <View style={styles.line}></View>

            <View style={styles.chats}>
                <View style={styles.chatsFeatures}>
                <FontAwesome name="whatsapp" size={24} color="white" />

                </View>
                <Text style={{ marginLeft: 10 }}>Chats</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 278 }} />

            </View>

            <View style={styles.line}></View>
            
            <View style={styles.not}>
                <View style={styles.notFeatures}>
                <FontAwesome name="asterisk" size={18} color="white" />
                </View>
                <Text style={{ marginLeft: 10 }}>Notifications</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 235 }} />

            </View>

            <View style={styles.line}></View>

            <View style={styles.data}>
                <View style={styles.dataFeatures}>
                <FontAwesome name="pie-chart" size={20} color="white" />

                </View>
                <Text style={{ marginLeft: 10 }}>Data and Storage Usage</Text>

                <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 162 }} />


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
    key: {
        flexDirection: "row",
        alignItems: 'center'
    },
    keyFeatures: {
        backgroundColor: '#397AFE',
        width: 30, 
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    line:{ 
        width: '110%', 
        backgroundColor: '#E2E2E4', 
        height: 1, 
        bottom: 1, 
        left: 30,
        margin:10 
    },
    chats:{ 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    chatsFeatures:{ 
        backgroundColor: '#4BD763', 
        width: 30, height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5 
    },
    not: {
        flexDirection: "row",
        alignItems: 'center'
    },
    notFeatures: {
        backgroundColor: '#FF3B2F',
        width: 30, 
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    data:{ 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    dataFeatures:{ 
        backgroundColor: '#4BD763', 
        width: 30, height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5 
    },




});