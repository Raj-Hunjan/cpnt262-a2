const image = [
{
    Id: 01,
    Title: 'Some Wavy Waves',
    Description: 'Cool Looking Waves',
    Width: 640,
    Height: 640,
    pathURL: 'assets/images/sm/01.jpg',
    linkURL:'https://unsplash.com/photos/AQ9-jKmebjM',
    credit:'USGS',
    creditURL:'https://unsplash.com/@usgs',
},
{
    Id: 02,
    Title:'A City Skyline at Night',
    Description: 'City Skyline at Night',
    Width: 640,
    Height: 428,
    pathURL: 'assets/images/sm/02.jpg',
    linkURL:'https://unsplash.com/photos/QEDXqtje6fw',
    credit:'Samuel Ferrara',
    creditURL:'https://unsplash.com/@samferrara', 
},
{
    Id: 03,
    Title: 'Nice Looking Art',
    Description: 'Bear Graffiti',
    Width: 640,
    Height: 480,
    pathURL: 'assets/images/sm/03.jpg',
    linkURL:'https://unsplash.com/photos/J2SS313SbMk',
    credit:'Ioana Cristiana',
    creditURL:'https://unsplash.com/@yoyoqua',
},
{
    Id: 04,
    Title: 'A Person Looking Out a Window',
    Description: 'Person looking out window',
    Width: 640,
    Height: 465,
    pathURL: 'assets/images/sm/04.jpg',
    linkURL:'https://unsplash.com/photos/ds9Pd0IChac',
    credit:'Ioana Cristiana',
    creditURL:'https://unsplash.com/@yoyoqua',
},
{
  Id: 05,
  Title:'Blue BMW Passing Through a Forest',
  Description: 'Blue car driving through a forest',
  Width: 640,
  Height: 427,
  pathURL: 'assets/images/sm/05.jpg',
  linkURL:'https://unsplash.com/photos/Sr-0bIyNkWc',
  credit:'Luemen Rutkowski',
  creditURL:'https://unsplash.com/@lulusphotography',
},
{
  Id: 06,
  Title: 'Downtown Tokyo at Night',
  Description: 'Tokyo at night',
  Width: 640,
  Height: 427,
  pathURL: 'assets/images/sm/06.jpg',
  linkURL:'https://unsplash.com/photos/uhhwuQRoQp4',
  credit:'Pema Lama',
  creditURL:'https://unsplash.com/@peemag_lama',
},
{
  Id: 07,
  Title: 'Some Montains',
  Description: 'Nice looking mountains',
  Width: 640,
  Height: 426,
  pathURL: 'assets/images/sm/07.jpg',
  linkURL:'https://unsplash.com/photos/JgOeRuGD_Y4',
  credit:'JOHN TOWNER',
  creditURL:'https://unsplash.com/@heytowner',
},
{
  Id: 08,
  Title: 'Nice Looking Mustang SUV',
  Description: 'Silver car in a parking lot with buildings behind it',
  Width: 640,
  Height: 436,
  pathURL: 'assets/images/sm/08.jpg',
  linkURL:'https://unsplash.com/photos/MdPlet5ce0U',
  credit:'Adrian N',
  creditURL:'https://unsplash.com/@anewevisual',
},
{
  Id: 09,
  Title: '2 Friends Just Chillin',
  Description: '2 dogs hanging out with each other',
  Width: 640,
  Height: 427,
  pathURL: 'assets/images/sm/09.jpg',
  linkURL:'https://unsplash.com/photos/9vc4dQHFU8I',
  credit:'Adrian N',
  creditURL:'https://unsplash.com/@anewevisual',
}
  ];
  
  let output = '';
  
  image.forEach(function(imageId){
  
    output += 
    
    `<figure><a href="${imageId.linkURL}">
    <img src="${imageId.pathURL}" alt="${imageId.Description}">
    <figcaption>${imageId.Title}</figcaption>
    </a></figure>`
  });
  
  const gallery = document.querySelector('.gallery');
  
  gallery.innerHTML = output;