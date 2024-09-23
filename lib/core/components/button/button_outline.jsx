
import { TouchableOpacity, Text } from "react-native"
export default function ButtonOutiline({ label, onPress }) {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: 'transparent'
            }}>
            <Text style={{ fontSize: 18, color: 'white' }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}