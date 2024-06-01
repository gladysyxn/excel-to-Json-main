const showDetails = (header, data) => {
  console.log(data);
  const details = document.getElementById('details');
  details.innerHTML = data.map((cell, index) => `<div>${header[index]}: ${cell}</div>`).join('');
};

console.log('hello');


async function updateView(data) {
  try {
      
      const container = document.getElementById('dataList');
      container.innerHTML = '';

        
      data.forEach(item => {
        var element = '';

      	if (item.image) {
      		element += `<p><img class="itemImage" src="/images/${item.image}" </p>`;
      	}


		Object.keys(item)
		  .forEach(function eachKey(key) { 
		  	if (key !== 'image') {
		  		console.log(key);
		    	element += `<p >${key}: ${item[key]}</p>`;
			}
		  });

   
        container.innerHTML += `<div class="itemContainer"> ` + element + `</div>`;
          
      });
    } catch (error) {
    console.error('Fetch error:', error.message);
  }
}
