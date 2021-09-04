
<h1 align="center">  TYPE-WRITER </h1>

<p align="center">
  
 <img src="https://img.shields.io/github/languages/code-size/Abusayid693/Type-writer"  alt="size" />

 <img src="https://img.shields.io/github/languages/top/Abusayid693/Type-writer " alt="license" />
  
 <img src= "https://img.shields.io/github/issues/Abusayid693/Type-writer" /> 

<img src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white"/>
  
</p>


#### Short Brief

<p align="center">
Type-writer is a documenting web application with the support of many modern techniques to make documenting easier and faster. The web application itself contains clean and interactive UI making it easier to navigate. Some of the most promising features include markdown editing, copy pasting of images and resizing, mathematical equation formatting, syntax highlighter for code blocks etc. The application also contains user authentication through login/sign-up feature.
 Type-writer is also well equipped with version control to keep a track record for all saved versions of a file in the cloud. Users are also given choices in 3 different formats to download their files in local environment (i.e PDF format, text format, code block format).

  </p>

## Contents:
- [About]()
- [Project Starter]()
- [Features]()
- [Tools and Packages]()
- [Deployment]()

---

# ✊ About

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>

<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>

<img src ="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"/>

<img src ="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/>

</p>

> Type-writer is a documenting web application that supports markdown editing, copy pasting images etc.



![](https://i.imgur.com/07t6nFn.png)

![](https://i.imgur.com/TtSRRF0.png)


Get youtube [demo]() here



--- 
# 👨‍💻 Getting started


This section will work you through how you can get started with the project.

### Directory Layout


<pre>
.
├── <strong>Backend</strong>
│   │  
│   ├── <strong>Controllers</strong>
│   │
│   ├── <strong>Models</strong>
│   │
│   ├── <strong>middlewares</strong>
│   │
│   ├── <strong>Routes</strong>
│   │
│   ├── <strong>Utils</strong>
│   │  
│   └── index.js
│ 
├── <strong>App</strong>
│   ├── <strong>public</strong>
│   └── <strong>src</strong>
│       ├── <strong>components</strong>
│       │   │  
│       │   ├── <strong>Assets</strong>
│       │   │  
│       │   ├── <strong>Downloading-formats</strong>
│       │   │  
│       │   ├── <strong>Primary Sidebar</strong>
│       │   │   
│       │   ├── <strong>Side bar routes</strong>
│       │   │  
│       │   ├── <strong>resizable</strong>
│       │   │ 
│       │   ├── <strong>Version-control</strong>
│       │   │ 
│       │   ├── <strong>Code-block</strong>
│       │   │ 
│       │   ├── <strong>User</strong>
│       │   │ 
│       │   └──<strong>sub-components</strong>
│       │              ├──<strong>page-padding</strong>
│       │              ├──<strong>check-boxes</strong>
│       │              ├──<strong>color-picker</strong>
│       │              └──<strong>yping-effect</strong> 
│       │    
│       ├── <strong>Pages</strong>
│       │     ├── <strong>Main</strong>  
│       │     └──<strong>Home-page</strong>
│       │  
│       ├── <strong> lib</strong>
│       │      ├── <strong>header</strong>
│       │      ├── <strong>horizontal-ruller.js</strong>
│       │      ├── <strong>lists.js</strong>
│       │      ├── <strong>node-delete.js</strong>
│       │      ├── <strong>paragraph.js</strong>
│       │      └── <strong>text-format.js</strong> 
│       │ 
│       ├── <strong> Renders</strong>
│       │      ├── <strong>Format equation</strong>
│       │      ├── <strong>Code-block</strong>
│       │      └── <strong>image-capture</strong>
│       │ 
│       ├── <strong> Actions</strong>
│       │ 
│       ├── <strong> Constants</strong>
│       │ 
│       └── <strong> Reducers</strong>
└── README.md
</pre>






### Run on your local server

You will need [NodeJS](), [Git]() and [MongoDB]() installed to run this project locally

      node@v10.16.0 or higher
      npm@6.9.0 or higher
      git@2.17.1 or higher

If you dont have [MongoDB]() you use [MongoDB Atls]()


1. Clone the repo
 ```bash
 git clone https://github.com/Abusayid693/Type-writer.git
```

2. Create a file called .env in the Backend directory of your project:


       Backend
       └──- Controllers
           - Models
           - .env         <-- create it here
           - .gitignore
           - index.js
           - package-lock.json
           - package.json



3. Inside the .env file, add key `DB_CONNECTION` and assign your MongoDB local host or Mongo Atls like this, also add `NODE_ENV` and `JWT_SECRET`.


```bash
# .env
DB_CONNECTION = "YOUR_DB_LOCAL_HOST" 
# eg : mongodb://localhost/typewriter1 or mongodb+srv://"Your username ":" your password "....

JWT_SECRET = "YOUR_JWT_SECRET"
NODE_ENV = development
```


Warning: Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.


4. Starting the server application.
```bash
cd Type-writer && cd Backend 
npm install
Nodemon index.js
```
   `This will start server on localhost:8000`     

5. Starting the Client application.
```bash
cd Type-writer && cd App 
npm install
npm start
```
   `This will start client app on localhost:3000`  





---
# 🚀 Features
## 1. [Markdown rules]()

### Heading tags
For heading user can use prefix "#"

```bash
Prefix " # "                                          -- For H1 tags
prefix " ## "                                         -- For H2 tags
prefix " ### "                                        -- For H3 tags
prefix " #### "                                       -- For H4 tags.  
```
`user must press Space after entering prefix`    
 ### [Lists tags]()
#### Unordered Lists 

```bash
prefix " - "                                          -- for Unordered Lists elements 
```
#### Ordered Lists 
```bash
prefix " Numerical digits "                           -- for Ordered Lists elements   
```
`user must press Space after entering prefix`    



### [Equation formatting]()

> ***The equation formatting features supports all Algebric, triagnometric and Matrices formatting, following with prefix " $ ".***

![](https://i.imgur.com/9DsfOrD.gif)



- ####  Algebric equations
![](https://i.imgur.com/5oCKi1G.png)
- ####  Tragnometric and  equations
![](https://i.imgur.com/ZCj3MkC.png)
- ####  Matrices 

![](https://i.imgur.com/dQE81Qr.png)
     
### [Horizontal lines]()

 ```bash
prefix " --- "                                     --  for Horizontal lines
```

### [Coding Blocks]()

> The coding blocks supports syntaxhighlighter for `javascript code only` ( will be updated in future versions).

![](https://i.imgur.com/TL7GjRn.gif)

```bash
 prefix " ''' "                                  -- for syntaxhighlighting editor
 ```
![](https://i.imgur.com/fThdc0x.png)    


---

## 2. [Image copy pasting and resizing]()

Type-writer supports copy pasting images over browsers and resize them accordingly.

- ***Copy images over internet and paste them.***
- ***Resize them accoring to your need.***

![](https://i.imgur.com/7gpaZTo.gif)


## 3. [color palette]()

Customize background colours,text colours as per your need, the color palette also supports hex codes.

![](https://i.imgur.com/B1BecXb.gif)

![](https://i.imgur.com/nLEJadt.png)

## 4. [Version control]()


**Version Control** tracks and manage changes in your typewriter files,it keeps track of every modification to the files in our database hosted on the cloud , So user dont need to hustle over loosing their data. It also allows sharing of files with others for ***modification keeping the original version safe.***

![Gif here](https://i.imgur.com/lMv7Awg.png)

***The sidebar contains date and time of saved versions for iterating through different versions of your files***





## 5. [Additional features]()

- #### Choose your fonts - The fonts support can be furthur extended by adding additional fonts.

![](https://i.imgur.com/AK9GuTC.png)

- #### Get downloadable document

|                 |            |
| --------------- | --------------- 
| PDF|  Whole type-writer contents in pdf formats |
| Text| Only text contents of the type-writer. |
| Code block | Downloads coding blocks only in .js format |


![](https://i.imgur.com/y6fsQfD.png)

---

# 🧰 Tools & Packages

## Client 


  | Package | Description | version |
  | ------------ | ------------- | ------------- |
  | [axios](https://www.npmjs.com/package/axios) |Promise based HTTP client for the browser and node.js|  0.21.1 |
   | [React-redux](https://react-redux.js.org) |A predictable state container for JavaScript applications|  0.21.1 |
  | [react-equation](https://www.npmjs.com/package/react-equation) | Used of displaying equations over webpages | 0.2.1 |
  | [react-resizable](https://www.npmjs.com/package/react-resizable) | To make resizable react components |3.0.4 |
  | [react-dropdown](https://www.npmjs.com/package/react-dropdown) | React dropdown menu      | 1.9.2 |
  | [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) | Used for syntaxhighlighting in coding blocks,texts etc | 11.0.3 |
  | [react-typed](https://www.npmjs.com/package/react-typed) | Typing annimation in react | 1.2.0 |
  | [file-saver](https://www.npmjs.com/package/file-saver) | provides downloadable formats of files  | 2.0.5 |
  | [jsPDF](https://www.npmjs.com/package/jspdf) |A library to generate PDFs in JavaScript.  | 2.3.1 |
  | [material-ui](https://material-ui.com)| Customized React components | 4.12.2 |
  | [react-color](https://casesandberg.github.io/react-color/) | color palette | 2.19.3 |


## Server



  | Package | Description | version |
  | ------------ | ------------- | ------------- |
  | [mongoose](https://mongoosejs.com) | elegant mongodb object modeling for node.js | 5.13.3 |
  | [morgan](https://www.npmjs.com/package/morgan) |HTTP request logger middleware for node.js | 1.10.0 |
  | [express](https://expressjs.com) | Node.js web application framework for server side scripting | 4.17.1 |
  | [MongoDB](https://www.mongodb.com) | a NoSQL database | 4.4.3 |
  | [bcryptjs](https://www.npmjs.com/package/bcrypt) | A library to help you hash password | 4.4.3 |
  | [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | An implementation of JSON Web Tokens | 8.5.1 |  

