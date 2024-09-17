import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'


export const User = () => {
    return (
        <View style={styles.user}>

            <Image style={styles.userIcon}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/1200px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg' }} />

            <View style={styles.userText}>

                <Text style={{ fontSize: 16 }}>Kanye West</Text>

                <Text style={{ color: '#8A8A8E' }}>Digital goodies designer - Pixsellz</Text>

            </View>

            <FontAwesome name="angle-right" size={24} color="#8A8A8E" style={{ left: 100 }} />
        </View>

    );
}




const styles = StyleSheet.create({

    header: {
        borderWidth: 1,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 25
    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 35,
        marginLeft: 5
    },
    userText: {
        flexDirection: 'column',
        left: 10
    }
});