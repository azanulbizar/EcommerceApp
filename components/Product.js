import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export function Product({ name, price, image, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View>
            <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
                <Text style={styles.productName}>
                    { name }
                </Text>
            </View>
            <View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceValue}>
                        {price}
                    </Text>
                    <Text style={styles.currency}>
                        руб
                    </Text>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Подробнее</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 5,
        paddingBottom:15,
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
        height: 0,
        width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    productName: {
        color: '#017f7e',
        fontSize: 18,
        textAlign: 'center',
        marginBottom:10,
    },
    image: {
        height: 150,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        justifyContent: 'center',
        marginBottom: 15,
    },
    priceValue: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 5
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    },
    btn: {
        width: '80%',
        backgroundColor: '#017f7e',
        borderRadius: 3,
        padding: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnText: {
        textAlign: 'center',
        color: '#fff'
    }
});
