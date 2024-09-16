import { View, Text, Button } from "react-native"

export default function SplashPage({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Splash page</Text>
        <Button title="Ver jogadores" 
        onPress={() => navigation.navigate('HomePage')}
        
        />
    </View>
    )
}