const products = ['Camiseta de Pokemon', 
'Pantalón coquinero', 'Gorra de gansta', 
'Camiseta de Basket', 'Cinrurón de Orión', 
'AC/DC Camiseta']
let shirt = [];
for (let i = 0; i < 6; i++) { if (products[i].includes('Camiseta'))
    {shirt.splice(i,1,products[i])};
};
console.log (shirt)