const list = () => {
    const brand = document.createElement('h3');
    brand.className = 'text-secondary';
    brand.textContent = 'Tesr!';
  
    return {
      brand
    };
  };
  
  module.exports = list();
  