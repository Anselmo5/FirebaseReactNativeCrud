import { View, Button, Pressable} from "react-native"
import { useRouter } from "expo-router"
const app = () => {

    const router = useRouter()

    const mudarPagina = () => {
        router.push("/")
    }

    return (
        <View>
            <Pressable onPress={()=> mudarPagina()}>
                    
            </Pressable>
        </View>
    )
}

export default app