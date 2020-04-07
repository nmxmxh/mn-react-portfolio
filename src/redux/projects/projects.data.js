const PROJECTS_DATA =  {
            projects : [
                        {
                            id: 1,
                            linkUrl: 'react-portfolio',
                            title: 'React Portfolio',
                            shortDesc: 'My portfolio application created with React and Redux.',
                            longDesc: [
                                "This was my first personal React project. A big part of development I’ve discovered is practice! practice! practice! and don’t be afraid of failing.",
                                "This project introduced a few new React frameworks to me.",
                                "1. react-helmet: This can be used to set header and meta information within your application.",
                                "2. react-router-scroll: This helps with changing the default values in relation to scrolling and routing with your application.",
                                "I used both Hooks and Redux in the making of this projects, both technoligies I need to practice and get better at utilizing.",
                                "The UI/UX were both designed and coded by me so I hope you enjoy this unique experience.", "Improvements? Need to learn how to personalize styling, text and context coming from a database without harming the overall structure."
                            ],
                            imageUrl: "https://i.ibb.co/PWZtMzn/react-portfolio.png",
                            siteLink: 'https://momohnobert.xyz/',
                            repoLink: 'https://github.com/MomohNobert/mn-react-portfolio',
                            tags: ["react", "redux", "firestore"]
                        },
                        {
                            id: 2,
                            title: 'React Shop',
                            linkUrl: 'react-shop',
                            shortDesc: 'A shopping application created with React, Redux and Payment Integration.',
                            longDesc: [
                                "This project was built during the study of an Introduction to React course.",
                                "We integrated the React Application with Firebase and used it to also get authentication.", "During the course, the subject matter ranged from React introductions, redux, redux-sagas, redux-thunks, hooks, context api and Gatsby.",
                                "A few frameworks introduced by the course:",
                                "1. redux: A React State Managment framework, best described as the little man under the hood helping dispatch, store and manage the possible actions and changes within your application.",
                                "2. react-router: This imitates the history and location logic of server to client page functionality. Since React is a single page application, it doesn’t function properly with browsers meant for past methods of communication.",
                                "3. redux-persist: This is a redux function that allows you save current state whether locally (within the browser session) or globally (within the browser).",
                                "4. redux-sagas: This allows you more control over actions by allowing you use grenerator functions to interact with different state actions and behaviours.",
                                "5. gatsby: Like the create-react-app module, this allows you create React based static applications.",
                                "There was a lot more in the course but these are the frameworks I’m sure I won’t (completely) lose my head working with at the moment. "
                            ],
                            imageUrl: 'https://i.ibb.co/1rHFy4K/react-shop.png',
                            siteLink: 'https://mn-react-shop.herokuapp.com/',
                            repoLink: 'https://github.com/MomohNobert/react-shop',
                            tags: ["react", "redux", "firestore"]
                        },
                        {
                            id: 3,
                            title: 'Node Portfolio',
                            linkUrl: 'node-portfolio',
                            shortDesc: 'My portfolio application created with NodeJS, Express and Mongoose(MongoDB).',
                            longDesc: [
                                "I created this project with NodeJS, ExpressJS and PUG. PUG is a HTML templating engine, all the stylings, logic  and display were designed and implemented by me.",
                                "Creating back-end first allowed me to understand the logic behind routing, client to server communiciations and all the madness and errors that can happen in between.", "Sometimes the most simple design implementations can cause untold headache and I was happy I toughened through it all to successfully implement this one.", 
                                "Sometimes the most simple design implementations can cause untold headache and I was happy I toughened through it all to successfully implement this one.", "The data for the projects and blog is gotten from a MongoDB database with Mongoose framework in between to help with interactions.",
                                 "Some frameworks used during the creation?", 
                                 "1. helmet: This framework helps with the overall security of your NodeJS application.",
                                 "2. mongoose: This framework allows you write simple and easy to understand code to replace that from the MongoDB framework.",
                                 "3. compression: This compresses your application to manage size and efficiency between production, development and testing phases.",
                                 "Also, the application was deployed on Heroku. Heroku is a platform as a service (PaaS) that enables developers to build, run and operate application entirely in the cloud (tHe clOUd :D). Please don’t let “cloud” scare you like it did me at first, They just don’t need to be hosted locally by the developer.",
                                 "I enjoyed working through this application even if I’ve gone one step better and implemented it in React, it gave me a base to start from."
                            ],
                            imageUrl: 'https://i.ibb.co/RjncdK1/node-portfolio.png',
                            siteLink: 'https://mn-portfolio.herokuapp.com/',
                            repoLink: 'https://github.com/MomohNobert/node-portfolio',
                            tags: []
                        },
                        {
                            id: 4,
                            title: 'Pokemon App',
                            linkUrl: 'pokemon-app',
                            shortDesc: 'A simple pokemon app for displaying types of Pokemon after search.',
                            longDesc: [
                                "I really enjoyed making this application. It’s a pretty simple application. There’s a search button you click after choosing a Pokemon type and wham! you have some cute (and weird, some look really weird) pokemon at your service. Simple right?",
                                "Not really, a lot of work goes into making the frameworks you use and applications you develop easier to implement and manage. It’s a lot of work from various unseen workers that help you stand on your shaky feet when starting.",
                                "The PokeAPI is one of them, I looked through the documentation and implementation, and you can see the sheer scale of data that has been provided for your use freely depending on how you want to work with it.",
                                "API stands for Application Programming Interface. It is a software intermediary that allows two applications to talk to each other. (I mostly did the talking, PokeAPI was the brain in this relationship).",
                                "Like normal interactions, you send a request and the api provides you with a response. You make an order, demand or mostly a kind appeal to this software that has been developed by it’s own group of hands and it’s looks at you with pity, tries to understand your request and give you an adequate response. ",
                                "This requests are promised based in my Pokemon App with the help of Axios (A promise-based request handler).",
                                "While it might be simple from my end a lot of work was expended in creating the PokeAPI that I was communicating with, also it was my first introduction to properly communicating and working with Apis and I also really love Pokemon so here you go ... My Pokemon Application.",
                                "A lot of open source software is available for use and learning with the developer space so please try and say the occasional Thank You, donation or simply contribute to open source applications, they're a good learning experience and also helps you learn get better communiciation skills in development."
                            ],
                            imageUrl: 'https://i.ibb.co/GFw00qg/pokemon-app.png',
                            siteLink: 'https://mn-pokemon-app.netlify.com/',
                            repoLink: 'https://github.com/MomohNobert/pokemon-app',
                            tags: []
                        },
                        {
                            id: 5,
                            title: 'To-Do App',
                            linkUrl: 'to-do-app',
                            shortDesc: 'Created with NodeJS and MongoDB. A simple To-Do application.',
                            longDesc: [
                                "This was a NodeJS application developed with a tutorial for me to better understand development and working with databases.",
                                "The database used in this application is MongoDB, A non-relational database that is mostly hosted online (tHE clOUd strikes again), it is well maintained, provides great security and really takes a lot of burden when it comes to managing databases for developers.",
                                "This is a shameless plug as thank you for the free 500mb you’re given when you create an instance for development.",
                                "My NodeJS application simply assesed the database and ordered a bunch of items created by me sorted by time created. It can also delete a record (document) from my todo list when I’m done with it which affects the actual database.",
                                "I really like MongoDB and Mongoose because eventually with coming internet speeds and integration most applications will be hosted on the mighty cloud and it’s necessary to have a platform you can trust and learn from.",
                                "They also have an excellent developer community that you can learn and expand your horizons from."
                            ],
                            imageUrl: 'https://i.ibb.co/PxrvVP7/to-do-app.png',
                            siteLink: 'https://mn-todo-app.herokuapp.com/',
                            repoLink: 'https://github.com/MomohNobert/node-todo-app',
                            tags: []
                        },
                        {
                            id: 6,
                            title: 'Node Shop',
                            linkUrl: 'node-shop',
                            shortDesc: 'A shopping application created with NodeJS, ExpressJS and MongoDB.',
                            longDesc: [
                                "This shop application was my first intensive and strenuous project and introduction to development as a whole.",
                                "Programming used to scare me, a lot, but during this project I stopped looking at software and applications as a whole and instead started identifying then as a sum of parts that come together to create a unique experience.",
                                "When you can identify and divide those individual parts visually, plan properly and implement accordingly, you can conquer your fears of development (well in creating small applications, imagine what goes into making Photoshop).",
                                "This application was created with NodeJS, Express, MongoDB and EJS, a HTML templating engine. It is a shop application that allows you register users, create products that are saved in a database, select products to purchase, save to checkout and successfully order your products. That’s alot of steps and some frameworks were also involved.",
                                "Listing a few of the frameworks used in this application, please, this frameworks are more complicated and provide better documentation than my words do them justice so endeavour to go to the original sites:",
                                "1. mongoose, express-session and connect-mongodb-session: You either register or login to the application where your credentials are verified in the MongoDB database that is implemented by mongoose. express-session and connect-mongodb-session create cookies that help the browser understand and verify your status and the details are store in a MongoDB store.",
                                "2. bcrypt and crypto: Security is an important part of web applications and no user wants their information, especially passwords, easily accessible. bcrypt is a framework that helps you encrypt sensible material and compare then for later uses. crypto was used to generate a random sequence of characters in order to help with authentification in cases of forgotten passwords.",
                                "3. csrf: This is a token and secret based framework passed into individual pages to help authenticate that those pages and genuine, scams are common in the internet and it’s easy to divert a user’s attention to another page that can possibly take advantage of them. csrf helps you protect against such threats.",
                                "4. connect-flash: This framework assists in displaying and managing error messages within the application that easily notify and assist the user in navigating through the application.",
                                "5. helmet: This framework helps with the overall security of your NodeJS application.",
                                "6. compression: This compresses your application to manage size and efficiency between production, development and testing phases.",
                                "7. nodemailer and nodemailer-sendgrid-transport: You can check the Send Grid site for more details, these frameworks was responsible for dispatching emails and communication from the application. Send Grid is an organization that helps with giving you facilities and technologies to support dissemination through mail systems. They have excellent support and an easy to understand system to develop with.",
                                "These are just a few of the visible frameworks within this project, a summation of little’s that brought the big picture of this project together."
                            ],
                            imageUrl: 'https://i.ibb.co/bHQQvL7/node-shop.png',
                            siteLink: 'https://mn-node-shop.herokuapp.com/',
                            repoLink: 'https://github.com/MomohNobert/nodejs-shop',
                            tags: []
                        },
                        {
                            id: 7,
                            title: 'React Monsters',
                            linkUrl: 'react-monsters',
                            shortDesc: 'Introductory project to React. A Monster search field.',
                            longDesc: [
                                "This is the Hello World of React Applications (I really wonder why?!)",
                                "You're introduced to React's component based structure and making calls to API's for information. It also briefly touches on working with JSON data",
                                "Your job is to get some users from an API, attach to those users, monster Icons gotten from another open source API and use React to manage the state and filter through the users in the case of a specified event.",
                                "Okay, it is a pretty good Hello World project, it allows you to understand the need and benefit for React Applications and how these React components can be easily created and implemented with the right tools and knowledge."
                            ],
                            imageUrl: 'https://i.ibb.co/47TWBqX/react-monsters.png',
                            siteLink: 'https://momohnobert.github.io/react-monsters/',
                            repoLink: 'https://github.com/MomohNobert/react-monsters',
                            tags: []
                        },
                        {
                            id: 8,
                            title: 'Gatsby Blog',
                            linkUrl: 'gatsby-blog',
                            shortDesc: 'Introductoey project in Gatsby. Create a static blog site.',
                            longDesc: [
                                "Gatsby is a static site generating module or template from React",
                                "Pages are rendered via MD files and added to the routing within the overall application.",
                                "They are very effective for simple sites i.e Blogs, and are also very lightweight.",
                                "I'm still trying to get better and using Gatsby and at this time, this was the tutorial application created with it."
                        ],
                            imageUrl: 'https://i.ibb.co/YWk1tnM/gatsby-blog.png',
                            siteLink: 'https://nifty-hermann-870a09.netlify.com/',
                            repoLink: 'https://github.com/MomohNobert/react-gatsby-blog',
                            tags: []
                        } 
                    ],
        selectedProject : []
    }


export default PROJECTS_DATA;