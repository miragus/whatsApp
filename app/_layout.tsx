import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router';

export default function TabsFodas() {
    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: ({ backgroundColor: '#F6F6F6' })
            }}>


            <Tabs.Screen
                name='status'
                options={{
                    title: 'Status',
                    tabBarIcon: ({ color }) => <FontAwesome name="bullseye" size={28} color="#8D8D8F" />
                }}
            />

            <Tabs.Screen
                name='calls'
                options={{
                    title: 'Calls',
                    tabBarIcon: ({ color }) => <FontAwesome name="phone" size={24} color="#8D8D8F" />
                }}
            />

            <Tabs.Screen
                name='camera'
                options={{
                    title: 'Camera',
                    tabBarIcon: ({ color }) => <FontAwesome name="camera" size={21} color="#8D8D8F" />
                }}
            />

            <Tabs.Screen
                name='chats'
                options={{
                    title: 'Chats',
                    tabBarIcon: ({ color }) => <FontAwesome name="comments-o" size={24} color="#8D8D8F" />
                }}
            />
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome name="gears" size={24} color="#8D8D8F" />
                }}
            />






        </Tabs>





    )
}