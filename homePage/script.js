let img = [
    {
      name: 'Anu',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
    },
    {
      name: 'Purvi',
      image: 'https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg'
    },
    {
      name:'Kavya',
      image:'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
    }
   
];

let center = document.querySelector('.center');

img.forEach(item => {
   
    let container = document.createElement('div');
    container.classList.add('item'); 

  
    let imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.alt = item.name;
    container.appendChild(imageElement);
    let nameElement = document.createElement('p');
    nameElement.textContent = item.name;
    container.appendChild(nameElement);
    center.appendChild(container);
    
    imageElement.addEventListener('click',function(e){
      console.log(e,"hey")
      window.location.href = '/NetflixLoginPage/index.html'
    })
});
