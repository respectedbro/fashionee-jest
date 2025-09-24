import React from 'react'

export const Sort = ({ onSort, value }) => <select name="sort" id="" onChange={onSort} value={value}>
  <option value="NAME_ASC">По имени A-Z</option>
  <option value="NAME_DESC">По имени Z-A</option>
  <option value="PRICE_ASC">Сначала дешевле</option>
  <option value="PRICE_DESC">Сначала дороже</option>
</select>
