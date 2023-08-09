document.addEventListener('DOMContentLoaded', () => {
    let url = "https://pokeapi.co/api/v2/ability";
  
    fetch(url)
      .then((response) => response.json())
      .then(json => {console.log(json);
        let res = json.results;
        let title = document.querySelector('.title');
        let head = document.createElement('h1');
        head.innerHTML = "API FETCHING";
        title.appendChild(head);
  
        let selects = document.querySelector('.select');
        res.forEach(item => {
          let options = document.createElement('option');
          options.value = item.url;
          options.innerHTML = item.name;
          selects.appendChild(options);
        });
        selects.addEventListener('click', (event) => {
          const selected = event.target.value;
          fetch(selected)
            .then((response) => response.json())
            .then(data => {console.log(data);
                let heading=document.createElement('h1');
                heading.innerHTML="Pokemon";
                let dataContent = document.querySelector('.data');
                dataContent.innerHTML = JSON.stringify(data.pokemon);
                dataContent.prepend(heading)
            
            })
            .catch(error => {
              console.error('Error fetching selected data:', error);
            });
        });
      })
      .catch(error => {
        alert('Error fetching data:', error.message);
        let select = document.querySelector('.select');
        select.style.display = "none";
        let errorMessage = document.querySelector(".errorMsg");
        let message = document.createElement('h2');
        let image = document.createElement('img');
        image.src = "oopsimg.jpg";
        message.innerHTML = "Oops! Something went wrong, Please check it.";
        errorMessage.appendChild(message);
        errorMessage.appendChild(image);
      });
  });
  
