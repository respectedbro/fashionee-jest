import data from '../products.json'

export const getProducts = (pagination, sortType, filters) => {
  const { products } = data

  // фильтрация
  const productsForModify = onFilter(filters, products)

  // сортировка
  onSort(productsForModify, sortType)

  // пагинация
  const startIndex = pagination.page * pagination.itemsPerPage
  const slicedProducts = productsForModify.slice(startIndex, startIndex + pagination.itemsPerPage)

  return {
    products: slicedProducts,
    total: productsForModify.length
  }
}
export const onSort = (products, type) => {
  switch (type) {
    case 'NAME_ASC':
      products.sort((a, b) => a.name > b.name ? 1 : -1)
      break
    case 'NAME_DESC':
      products.sort((a, b) => a.name < b.name ? 1 : -1)
      break
    case 'PRICE_ASC':
      products.sort((a, b) => a.price > b.price ? 1 : -1)
      break
    case 'PRICE_DESC':
      products.sort((a, b) => a.price < b.price ? 1 : -1)
      break
    default:
      return 'Неизвестный статус';
  }
}

const onFilter = (filters, products) => {
  let productsForModify = [...products]
  if (filters.search) {
    productsForModify = productsForModify.filter((product) => product.name.indexOf(filters.search) !== -1)
  }

  if (filters.category) {
    productsForModify = productsForModify.filter((product) => product.categories.includes(filters.category))
  }

  if (filters.prices.min && filters.prices.max) {
    productsForModify = productsForModify.filter((product) => {
      return product.price >= filters.prices.min && product.price <= filters.prices.max
    })
  } else if (filters.prices.min) {
    productsForModify = productsForModify.filter((product) => product.price >= filters.prices.min)
  } else if (filters.prices.max) {
    productsForModify = productsForModify.filter((product) => product.price <= filters.prices.max)
  }

  if (filters.colors.length > 0) {
    productsForModify = productsForModify.filter((product) => filters.colors.includes(product.color))
  }

  return productsForModify
}

export const getFilterInfo = () => {
  const { products } = data
  const info = {
    categories: [],
    prices: {
      min: 0,
      max: 0
    },
    colors: []
  }

  products.forEach((product) => {
    product.categories.forEach((category) => {
      if (!info.categories.includes(category)) {
        info.categories.push(category)
      }
    })

    if (product.price > info.prices.max) {
      info.prices.max = product.price
    }

    if (!info.colors.includes(product.color)) {
      info.colors.push(product.color)
    }

  })

  return info
}
