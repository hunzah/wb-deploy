export const cards = {
    products: [
        {
            id: 1,
            img: '../../assets/images/card-photo-2.png',
            name: 'Футболка UZcotton мужская',
            color: 'белый',
            size: '56',
            address: 'Каледино WB',
            companyName: 'OOO Вайлдберриз',
            companyInfo: {
                title: 'OOO «ВАЙЛДБЕРРИЗ»',
                regNumber: 'ОГРН: 5167746237148',
                address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
            },
            price: '1051', priceWithDiscount: '522',
            currency: 'сом',
            count: 1,
            left: 2,
            discount:'40%',
            buyerDiscount: "10%",
            discountValue: '419',
            buyerDiscountValue: '109',
        },
        {
            id: 2,
            img: '../../assets/images/card-photo-1.png',
            name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
            color: 'прозрачный',
            address: 'Каледино WB',
            companyName: 'OOO Мегапрофстиль',
            companyInfo: {
                title: 'OOO «МЕГАПРОФСТИЛЬ»',
                regNumber: 'ОГРН: 5167746237148',
                address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
            },
            price: '2 300 047',
            priceWithDiscount: '2 100 047',
            currency: 'сом',
            count: 200,
            left: 200,
            discount:'5%',
            buyerDiscount: "4.4%",
            discountValue: '111 034',
            buyerDiscountValue: '89 013',
        },
        {
            id: 3,
            img: '../../assets/images/card-photo-3.png',
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
            address: 'Каледино WB',
            companyName: 'OOO Вайлдберриз',
            companyInfo: {
                title: 'OOO «ВАЙЛДБЕРРИЗ»',
                regNumber: 'ОГРН: 5167746237148',
                address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
            },
            price: '905',
            priceWithDiscount: '494',
            currency: 'сом',
            count: 2,
            left: 2,
            discount:'30%',
            buyerDiscount: "10%",
            discountValue: '313',
            buyerDiscountValue: '96',
        },
    ],
    notAvailableProducts: [
        {
            id: "not-available-1",
            name: "Футболка UZcotton мужская",
            color: "Цвет: белый",
            size: "56",
            count: 0,
            img: '../../assets/images/card-photo-2.png',
            isFavorite: false
        }, {
            id: "not-available-2",
            name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
            color: "Цвет: прозрачный",
            count: 0,
            img: '../../assets/images/card-photo-1.png',
            isFavorite: false
        }, {
            id: "not-available-3",
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
            count: 0,
            img: '../../assets/images/card-photo-3.png',
            isFavorite: false
        }
    ]
}

export function updateCardState(updatedState) {
    cards.products = updatedState.products;
    cards.notAvailableProducts = updatedState.notAvailableProducts;
}
