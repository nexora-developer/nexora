const products = Array.from({ length: 29 }, (_, i) => ({
  id: i + 1,
  name: Product ${i + 1},
  price: 100 + i * 50,
  color: hsl(${(i + 1) * 12}, 70%, 50%),
  image: /images/product${i + 1}.png,
}));

export default products;