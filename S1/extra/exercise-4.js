const products = [
{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];
let sum = 0;
for (let i = 0; i < products.length; i++) {
    sum += products[(i)].sellCount; if (sum = (products[(0)].sellCount+products[(1)].sellCount+products[(2)].sellCount+products[(3)].sellCount)) {
    console.log (sum)}
}
