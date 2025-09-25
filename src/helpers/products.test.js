import data from '../products.json';
import {getProducts, onSort} from './products';

const ITEMS_PER_PAGE = 12;

const pagination = {
    page: 0,
    itemsPerPage: ITEMS_PER_PAGE
};


const sortType = 'PRICE_ASC';

const {products} = data;

describe('Проверка работы фильтра Colors', () => {
    test('По фильтру Red вернулись товары с фильтром Red', () => {
        const filters = {
            prices: {},
            search: '',
            category: '',
            colors: ['Red']
        };

        const info = getProducts(pagination, sortType, filters);
        const filteredByRedColor = products.filter((product) => product.color === 'Red');
        onSort(filteredByRedColor, sortType);
        expect(info.products).toEqual(filteredByRedColor);

    })

    test('По фильтру Brown, Red, Blue вернулись товары с данными цветами' , () => {
        const filters = {
            prices: {},
            search: '',
            category: '',
            colors: ['Red', 'Brown', 'Blue']
        };

        const info = getProducts(pagination, sortType, filters);
        const filteredByRedColor = products.filter((product) => product.color === 'Red' || product.color === 'Brown' || product.color === 'Blue');

        onSort(filteredByRedColor, sortType);
        const startIndex = pagination.page * pagination.itemsPerPage
        const slicedProducts = filteredByRedColor.slice(startIndex, startIndex + pagination.itemsPerPage)


        expect(info.products).toEqual(slicedProducts);

    });
});

describe('Проверка работы фильтра Categories', () => {
    test('По фильтру Men вернулись товары по данной категории', () => {
        const filters = {
            prices: {},
            search: '',
            category: '',
            colors: ['Red', 'Brown', 'Blue']
        }


        const info = getProducts(pagination, sortType, filters);

        info.products.map(product => {
            expect(product.categories).toContain('Men');
        });

        const total = products.filter(product =>
            product.categories.includes('Men')
        ).length;

        expect(info.total).toBe(total);
    })

})