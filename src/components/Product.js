import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image, Text, Card, Button} from '@rneui/base';

const Product = ({ name, imageLink, price }) => {
      return (
        <View style={styles.prod}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: imageLink }}
                />
                <Text style={styles.productName}>
                    { name }
                </Text>
            </View>
            <View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceValue} h4>
                        { price }
                    </Text>
                    <Text style={styles.currency}>
                    руб
                    </Text>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Подробнее</Text>
                </View>
            </View>
        </View>
      );
    }

const styles = StyleSheet.create({
    prod: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between'
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

export default Product;