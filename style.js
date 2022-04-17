import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '80%',
        height: 60,
        marginTop: 90,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "thistle",
    },
    inFocus: {
        width: '80%',
        height: 60,
        marginTop: 90,
        borderWidth: 1,
        borderColor: "thistle",
    },

    login: {
        marginTop: 40,
        width: '100%',
        height: 50,
        backgroundColor: '#02b2b2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: '#02b2b2',
    },
    join: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#02b2b2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        borderRadius: 5,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: '#02b2b2',
    },
    gg: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#02b2b2',
        borderRadius: 10,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: '#02b2b2',
    },
    started: {
        marginTop: 10,
        backgroundColor: '#02b2b2',
        width: '80%',
        height: 40,
        borderRadius: 5,
        shadowColor: '#02b2b2',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    createIn: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#979797a6',
        width: '48%',
        borderRadius: 5,
        height: 50,
    },
    Cusername: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#979797a6',
        width: '90%',
        borderRadius: 5,
        marginTop: 20,
        height: 50,
    },
    firstL: {
        shadowColor: '#02b2b2',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginBottom: 10,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    firstS: {
        shadowColor: 'rgb(235, 231, 231)',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginBottom: 10,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    sht: {
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        shadowColor: 'gray',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    wrapper: {
        zIndex: 2,
        height: 520,
    },
    slide1: {
        borderRadius: 15,
        backgroundColor: 'white',
        height: 700,
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }



});



export default styles;