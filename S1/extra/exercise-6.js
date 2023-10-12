const goodProducts = [];
const badProducts = [];
const products = [
{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];
for (let i = 0; i < products.length; i++) { if (products[i].sellCount > 20)
    {goodProducts.splice(i,1,products[i])} 
    else if (products[i].sellCount < 20 ) 
    {badProducts.splice(i,1,products[i])}
};
console.log(goodProducts);
console.log(badProducts);