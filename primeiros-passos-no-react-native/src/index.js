import React, { useEffect, useState } from "react";
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    StatusBar, 
    FlatList,
    TouchableOpacity
} from 'react-native';

import api from "./services/api";

export default function App() {

    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        api.get('/repositories').then(response => {
            setRepositories(response.data)
        })
    }, [])

    async function handleAddProject() {
        const response = await api.post('repositories', {
            title: `Repository ${Date.now()}`,
            owner: 'Matheus Sousa',
        })

        const repository = response.data;
        setRepositories([ ...repositories, repository ])
    } 

    return (

    <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={repositories}
                keyExtractor={repository => repository.id}
                renderItem={({ item: repository }) => (
                    <Text 
                        style={styles.repository}>
                            { repository.title }
                    </Text>
                )}
            /> 
            <TouchableOpacity 
                style={ styles.button }
                activeOpacity={0.6}
                onPress={handleAddProject}
            >
                <Text style={ styles.textButton }>Adicionar Reporitório</Text>
            </TouchableOpacity> 
        </SafeAreaView>
        
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex: 1,
    },
    repository: {
        color: '#FFFF',
        fontSize:20,
    },
    button: {
        backgroundColor: '#FFFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }

})