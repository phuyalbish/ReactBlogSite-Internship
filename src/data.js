   
import Thumb1 from './images/thumb1.jpg';
import Thumb2 from './images/thumb2.jpg';
import Thumb3 from './images/thumb3.jpg';
import Thumb4 from './images/thumb4.jpg';
import Thumb5 from './images/thumb5.jpg';
import Thumb6 from './images/thumb6.jpg';
import Thumb7 from './images/thumb7.jpg';
import Thumb8 from './images/thumb8.jpg';
import Thumb9 from './images/thumb9.jpg';
import Thumb10 from './images/thumb10.jpg';

import writer10 from './images/profile10.jpg';
import writer1 from './images/profile1.jpg';
import writer2 from './images/profile2.jpg';
import writer3 from './images/profile3.jpg';
import writer4 from './images/profile4.jpg';
import writer5 from './images/profile5.jpg';
import writer6 from './images/profile6.jpg';
import writer7 from './images/profile7.jpg';
import writer8 from './images/profile8.jpg';
import writer9 from './images/profile9.jpg';

export const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized"]

  export const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'], // Corrected 'strike' spelling
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

 export const formats = [
  'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'link', 'image', 'video'
];
export const DUMMY_WRITER = [
    {
        "id": 1,
        "post": 3,
        "thumbnail": writer1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "post": 3,
        "thumbnail": writer2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "post": 3,
        "thumbnail": writer3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "post": 3,
        "thumbnail": writer4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "post": 3,
        
        "thumbnail": writer5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "post": 3,
        "thumbnail": writer6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        
        "post": 3,
        "thumbnail": writer7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        
        "post": 3,
        "thumbnail": writer8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        
        "post": 3,
        "thumbnail": writer9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        
        "post": 3,
        "thumbnail": writer10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
export const DUMMY_JSON = [
    {
        "userId": 1,
        "id": 1,
        "category":"Agriculture",
        "thumbnail": Thumb1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 9,
        "id": 2,
        "category":"Business",
        "thumbnail": Thumb2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 10,
        "id": 3,
        "category":"Education",
        "thumbnail": Thumb3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 9,
        "id": 4,
        "category":"Entertainment",
        "thumbnail": Thumb4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId":1 ,
        "id": 5,
        "category":"Business",
        "thumbnail": Thumb5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId":8 ,
        "id": 6,
        "category":"Entertainment",
        "thumbnail": Thumb6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "userId": 10,
        "id": 7,
        "category":"Art",
        "thumbnail": Thumb7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "userId": 8,
        "id": 8,
        "category":"Business",
        "thumbnail": Thumb8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "userId": 6,
        "id": 9,
        "category":"Education",
        "thumbnail": Thumb9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        "userId": 9,
        "id": 10,
        "category":"Investment",
        "thumbnail": Thumb10,
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        "userId": 8,
        "id": 11,
        "category":"Art",
        "thumbnail": Thumb1,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        "userId": 6,
        "id": 12,
        "category":"Investment",
        "thumbnail": Thumb2,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        "userId": 1,
        "id": 13,
        "category":"Business",
        "thumbnail": Thumb3,
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        "userId": 5,
        "id": 14,
        "category":"Education",
        "thumbnail": Thumb4,
        "title": "voluptatem eligendi optio",
        "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
        "userId": 7,
        "id": 15,
        "category":"Entertainment",
        "thumbnail": Thumb5,
        "title": "eveniet quod temporibus",
        "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
        "userId": 2,
        "id": 16,
        "category":"Art",
        "thumbnail": Thumb6,
        "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
        "userId": 5,
        "id": 17,
        "category":"Investment",
        "thumbnail": Thumb7,
        "title": "fugit voluptas sed molestias voluptatem provident",
        "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
        "userId": 2,
        "id": 18,
        "category":"Investment",
        "thumbnail": Thumb8,
        "title": "voluptate et itaque vero tempora molestiae",
        "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
        "userId": 5,
        "id": 19,
        "category":"Entertainment",
        "thumbnail": Thumb9,
        "title": "adipisci placeat illum aut reiciendis qui",
        "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
        "userId": 1,
        "id": 20,
        "category":"Education",
        "thumbnail": Thumb10,
        "title": "doloribus ad provident suscipit at",
        "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
        "userId": 2,
        "id": 21,
        "category":"Art",
        "thumbnail": Thumb1,
        "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
        "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
        "userId": 4,
        "id": 22,
        "category":"Investment",
        "thumbnail": Thumb2,
        "title": "dolor sint quo a velit explicabo quia nam",
        "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
        "userId": 6,
        "id": 23,
        "category":"Agriculture",
        "thumbnail": Thumb3,
        "title": "maxime id vitae nihil numquam",
        "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
        "userId": 3,
        "id": 24,
        "category":"Agriculture",
        "thumbnail": Thumb4,
        "title": "autem hic labore sunt dolores incidunt",
        "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
        "userId": 4,
        "id": 25,
        "category":"Art",
        "thumbnail": Thumb5,
        "title": "rem alias distinctio quo quis",
        "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    },
    {
        "userId": 7,
        "id": 26,
        "category":"Agriculture",
        "thumbnail": Thumb6,
        "title": "est et quae odit qui non",
        "body": "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
    },
    {
        "userId": 3,
        "id": 27,
        "category":"Education",
        "thumbnail": Thumb7,
        "title": "quasi id et eos tenetur aut quo autem",
        "body": "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
    },
    {
        "userId": 7,
        "id": 28,
        "category":"Agriculture",
        "thumbnail": Thumb8,
        "title": "delectus ullam et corporis nulla voluptas sequi",
        "body": "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
    },
    {
        "userId": 4,
        "id": 29,
        "category":"Entertainment",
        "thumbnail": Thumb9,
        "title": "iusto eius quod necessitatibus culpa ea",
        "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
    },
    {
        "userId": 3,
        "id": 30,
        "category":"Agriculture",
        "thumbnail": Thumb10,
        "title": "a quo magni similique perferendis",
        "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
    },]
