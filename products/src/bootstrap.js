import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  console.log(products);

  el.innerHTML = products;
};

//for dev and isolated run
if (process.env.NODE_ENV === "development") {
  //id unique for each micro app
  const el = document.getElementById("dev-products-micro");
  if (el) {
    mount(el);
  }
}

export { mount };
