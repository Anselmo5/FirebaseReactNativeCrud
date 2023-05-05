import { useRouter } from "expo-router"
import { useState } from "react"
import { View, StyleSheet, Pressable, Text,onChangeText,TextInput} from "react-native"

const app = () => {

    const router = useRouter()

    const mudarPagina = () => {
        router.push("/lista")
    }

    const[nome,setNome] = useState
    const[sobrenome,setSobrenom] = useState
    const[cpf,setCpf] = useState

    const handle = async (e) =>{
        e.prevenytDefault();

        const Nemusruaio =await firebase.firestore().collection("Pessoas").add({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf
        })
    }

    return (
        <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Nome" onChangeText={Text => setNome} value={nome}/>
                <TextInput style={styles.input} placeholder="Sobrenome"/>
                <TextInput style={styles.input} placeholder="Cpf"/>
                <Pressable style={styles.btn3}>
                    <Text> Criar</Text>
                </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        shadowColor: '#000',
        marginTop:100,
        width:200,
        marginLeft:100,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      
        elevation: 5,
      },
      
})

export default app