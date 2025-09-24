import React, { useState } from "react";

import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";

import * as SC from "./styles";
import { Button } from "./components/ui/Button";

function App() {
  const [page, setPage] = useState("cart");

  const onPageChange = () => {
    setPage(page === "shop" ? "cart" : "shop");
  };

  return (
    <SC.App>
      <Button onClick={onPageChange}>Change Page</Button>
      {page === "shop" && <Shop />}
      {page === "cart" && <Cart />}
    </SC.App>
  );
}

export default App;
