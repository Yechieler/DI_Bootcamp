const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

const root = document.getElementById('root');
const nav = document.createElement('DIV');
const grid = document.createElement('DIV');
const title = document.createElement('H1');
const input = document.createElement('INPUT');

input.setAttribute('id', 'input')
nav.setAttribute('id','nav');
grid.setAttribute('id','grid');

input.setAttribute('placeholder','robot');
title.innerText='Search and Destroy'

root.appendChild(nav);
root.appendChild(grid);
nav.appendChild(title);
nav.appendChild(input);

const forever = (robots) => {
for (let i = 0; i < robots.length; i++) {
    const card = document.createElement('DIV');
    card.setAttribute('id','robo');
    let robotName = document.createElement('H2');
    let robotEmail = document.createElement('H4');
    let roboimg = document.createElement('img');
    robotName.innerText=robots[i].name
    robotEmail.innerText=robots[i].email
    roboimg.setAttribute('src',robots[i].image);
    card.append(roboimg);
    grid.appendChild(card);
    card.appendChild(robotName);
    card.append(robotEmail)
}    
}
forever(robots);

const searchbox = () => {
    let myInput = document.getElementById('input').value.toLowerCase();

    let allRobots = document.querySelectorAll('#grid > div');
    for (div of allRobots){
      div.remove();
    }
    

    let filterRobot = robots.filter(item => {
        if (item.name.toLowerCase().includes(myInput)){
            return item;
        } 
    }) 
    console.log(filterRobot);
}



input.addEventListener('keyup',searchbox)
  
