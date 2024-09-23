import { View, Image, StyleSheet } from 'react-native';
import ButtonOutiline from '../core/components/button/button_outline';

const SplashPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://img.freepik.com/fotos-premium/bola-de-volei-de-vista-superior-dentro-de-casa-natureza-morta_23-2150587341.jpg' }}
                style={styles.backgroundImage}
            />
            <View style={styles.buttonContainer}>
                <ButtonOutiline label="Ver jogadores" onPress={() => navigation.navigate('home')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 24,
    },
});

export default SplashPage;