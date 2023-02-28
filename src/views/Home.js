import React from 'react';
import { TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import Product from '../components/Product';

const productList = [
    {
        name: 'Смартфон Huawei nova Y61 4/64Gb,  черный',
        image: 'https://cdn.citilink.ru/AwohiLx-PtRwuP2OrWNuMXsZ7KNVbR8p6fwDfYilaWU/fit/450/450/ce/1/plain/items/1892220_v01_b.jpg',
        price: 9999
    },
    {
        name: 'Смартфон REALME C25s 4/64Gb,  серый',
        image: 'https://cdn.citilink.ru/5NgHgv0E77BtvDtW3ewnDUrHfL5q1NWtMo16nXfDuNM/fit/450/450/ce/1/plain/items/1628173_v01_b.jpg',
        price: '8 990'
    },
    {
        name: 'Смартфон INFINIX Hot 20i 4/64Gb,  X665E,  черный',
        image: 'https://cdn.citilink.ru/MU77wwS97W9Nm93ZBVlVtPnA69aberpHaQsGq2Fz8xM/fit/450/450/ce/1/plain/items/1851634_v01_b.jpg',
        price: '7 490'
    },
    {
        name: 'Смартфон REALME 8 6/128Gb,  черный',
        image: 'https://cdn.citilink.ru/0vFonyRe9rbnuSI72E4K2fbOnghIV8q1HvAYIB0aMK8/fit/450/450/ce/1/plain/items/1517181_v01_b.jpg',
        price: '19 900'
    },
    {
        name: 'Смартфон vivo Y35 4/64Gb,  черный агат',
        image: 'https://cdn.citilink.ru/L-H_VA29TLaCEVVTjHSKFRMZ5E3ZXXybHwG26ccXpkc/fit/450/450/ce/1/plain/items/1841078_v01_b.jpg',
        price: '14 990'
    },
    {
        name: 'Смартфон Xiaomi Redmi 9A 2/32Gb,  зеленый',
        image: 'https://cdn.citilink.ru/CcPpkDi6Kw-m5VZeuN84mjQxKiT8vo6ZUBAya82QwfI/fit/450/450/ce/1/plain/items/1402198_v01_b.jpg',
        price: '5 490'
    },
    {
        name: 'Смартфон Samsung Galaxy A53 5G 8/256Gb,  SM-A536E,  голубой',
        image: 'https://cdn.citilink.ru/DUSStw4WHchGSBTP_szcmlwx-6ZmwF1pIsYK13f4R3g/fit/450/450/ce/1/plain/items/1782654_v01_b.jpg',
        price: '29 790'
    },
];

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View  style={styles.row}>
                {productList.map(prod => (
                <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.product}>
                    <Product style={styles.good} name={prod.name} price={prod.price} imageLink={prod.image} />
                </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    product: {
        width: '50%',
        marginBottom: 30
    }
});

export default HomeScreen;