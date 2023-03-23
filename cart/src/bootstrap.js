import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV !== "production") {
  const el = document.getElementById("dev-cart-micro");
  if (el) {
    mount(el);
  }
}

export { mount };
