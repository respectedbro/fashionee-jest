import data from "../products.json";
import { getProducts, onSort } from "./products";

const ITEMS_PER_PAGE = 12;

const pagination = {
  page: 0,
  itemsPerPage: ITEMS_PER_PAGE,
};

const sortType = "PRICE_ASC";

const { products } = data;

describe("Проверка работы фильтра Colors", () => {
  test("По фильтру Red вернулись товары с фильтром Red", () => {
    const filters = {
      prices: {},
      search: "",
      category: "",
      colors: ["Red"],
    };

    const info = getProducts(pagination, sortType, filters);
    const filteredByRedColor = products.filter(
      (product) => product.color === "Red"
    );
    onSort(filteredByRedColor, sortType);
    expect(info.products).toEqual(filteredByRedColor);
  });

  test("По фильтру Brown, Red, Blue вернулись товары с данными цветами", () => {
    const filters = {
      prices: {},
      search: "",
      category: "",
      colors: ["Red", "Brown", "Blue"],
    };

    const info = getProducts(pagination, sortType, filters);
    const filteredByColors = products.filter(
      (product) =>
        product.color === "Red" ||
        product.color === "Brown" ||
        product.color === "Blue"
    );

    onSort(filteredByColors, sortType);
    const startIndex = pagination.page * pagination.itemsPerPage;
    const slicedProducts = filteredByColors.slice(
      startIndex,
      startIndex + pagination.itemsPerPage
    );

    expect(info.products).toEqual(slicedProducts);
  });
});

describe("Проверка работы фильтра Categories", () => {
  test("По фильтру Men вернулись товары по данной категории", () => {
    const filters = {
      prices: {},
      search: "",
      category: "Men",
      colors: [],
    };

    const info = getProducts(pagination, sortType, filters);

    const filteredByMen = products.filter((product) =>
      product.categories.includes("Men")
    );

    onSort(filteredByMen, sortType);

    const startIndex = pagination.page * pagination.itemsPerPage;
    const expectedProducts = filteredByMen.slice(
      startIndex,
      startIndex + pagination.itemsPerPage
    );

    expect(info.products).toEqual(expectedProducts);
  });

  test("По фильтру Women вернулись товары по данной категории", () => {
    const filters = {
      prices: {},
      search: "",
      category: "Women",
      colors: [],
    };

    const info = getProducts(pagination, sortType, filters);

    const filteredByWomen = products.filter((product) =>
      product.categories.includes("Women")
    );

    onSort(filteredByWomen, sortType);

    const startIndex = pagination.page * pagination.itemsPerPage;
    const expectedProducts = filteredByWomen.slice(
      startIndex,
      startIndex + pagination.itemsPerPage
    );

    expect(info.products).toEqual(expectedProducts);
  });

  test("По фильтру Accessories вернулись товары по данной категории", () => {
    const filters = {
      prices: {},
      search: "",
      category: "Accessories",
      colors: [],
    };

    const info = getProducts(pagination, sortType, filters);

    const filteredByAccessories = products.filter((product) =>
      product.categories.includes("Accessories")
    );

    onSort(filteredByAccessories, sortType);

    const startIndex = pagination.page * pagination.itemsPerPage;
    const expectedProducts = filteredByAccessories.slice(
      startIndex,
      startIndex + pagination.itemsPerPage
    );

    expect(info.products).toEqual(expectedProducts);
  });

  test("По фильтру All вернулись товары по данной категории", () => {
    const filters = {
      prices: {},
      search: "",
      category: "All",
      colors: [],
    };

    const info = getProducts(pagination, sortType, filters);

    const filteredByAll = products.filter((product) =>
      product.categories.includes("All")
    );

    onSort(filteredByAll, sortType);

    const startIndex = pagination.page * pagination.itemsPerPage;
    const expectedProducts = filteredByAll.slice(
      startIndex,
      startIndex + pagination.itemsPerPage
    );

    expect(info.products).toEqual(expectedProducts);
  });
});

describe("Проверка работы фильтра Search", () => {
  test("По поиску 'shirt' вернулись товары", () => {
    const filters = {
      prices: {},
      search: "shirt",
      category: "",
      colors: [],
    };

    const info = getProducts(pagination, sortType, filters);
    const productsForModify = products.filter(
      (product) => product.name.indexOf(filters.search) !== -1
    );
    onSort(productsForModify, sortType);
    expect(info.products).toEqual(productsForModify);
  });

  test("По поиску 'skirt' вернулись товары", () => {
    const filters = {
      prices: {},
      search: "skirt",
      category: "",
      colors: [],
    };

    const info = getProducts(pagination, sortType, filters);
    const productsForModify = products.filter(
      (product) => product.name.indexOf(filters.search) !== -1
    );
    onSort(productsForModify, sortType);
    expect(info.products).toEqual(productsForModify);
  });
});
