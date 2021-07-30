![](https://i.imgur.com/EpGyFsb.png)

# TYPE-WRITER


<p>
    <a href="https://www.npmjs.com/package/color-calendar">
        <img src="https://img.shields.io/npm/v/color-calendar?style=flat-square" alt="npm version" />
    </a>
    <a href="https://www.npmjs.com/package/color-calendar">
        <img src="https://img.shields.io/npm/dw/color-calendar?style=flat-square" alt="npm downloads" />
    </a>
    <img src="https://img.shields.io/bundlephobia/min/color-calendar?style=flat-square" alt="size" />
    <a href="https://www.jsdelivr.com/package/npm/color-calendar">
        <img src="https://data.jsdelivr.com/v1/package/npm/color-calendar/badge" alt="jsdelivr" />
    </a>
    <img src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2FPawanKolhe%2Fcolor-calendar" alt="Hits">
    <img src="https://img.shields.io/npm/l/color-calendar?style=flat-square" alt="license" />
</p>

![](https://i.imgur.com/BSqv59r.gif)

Type writer is a modern documentating Application with support of prefix-edit-text.

Get youtube [demo]() here
## Contents:
- [Features]()
- [Project Starter]()
- [Getting Started]()
- [Deployment]()
--- 
# 👨‍💻 Getting started


This section will work you through how you can get started with the project.

### Directory Layout


<pre>
.
├── <strong>Backend</strong>
│   ├── <strong>Models</strong>
│   │   └── models.js
│   ├── package.json
│   └── index.js
├── <strong>App</strong>
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── index.html
│   │   └── manifest.json
│   └── <strong>src</strong>
│       ├── <strong>components</strong>
│       │   ├── <strong>Assets</strong>
│       │   │  
│       │   ├── <strong>Downloading-formats</strong>
│       │   │    └── Download.jsx
│       │   │  
│       │   ├── <strong>Format-equation</strong>
│       │   │    └── Format-equation.jsx
│       │   │  
│       │   ├── <strong>Primary Sidebar</strong>
│       │   │    ├── <strong>Styles</strong>
│       │   │    ├── control.jsx
│       │   │    └── Imports.jsx
│       │   │  
│       │   ├── <strong>Pages</strong>
│       │   │       ├──<strong>Main</strong>
│       │   │       │  ├── Main.jsx
│       │   │       │  └── Imports.jsx
│       │   │       │   
│       │   │       └──<strong>Home-page</strong>
│       │   │          ├── home.jsx
│       │   │          └── home.css
│       │   │  
│       │   ├── <strong>Side bar routes</strong>
│       │   │    └── Sidebar-routes.jsx
│       │   │ 
│       │   ├── <strong>Version-control</strong>
│       │   │       ├──<strong>sub-components</strong>
│       │   │       ├── Imports.jsx
│       │   │       ├── Version-control.css
│       │   │       └── Version-control.jsx
│       │   │ 
│       │   ├── <strong>Code-block</strong>
│       │   │       ├── code.jsx
│       │   │       ├── code.css
│       │   │       └── syntaxhighlighter.jsx
│       │   │ 
│       │   ├── <strong>Image-capture</strong>
│       │   │       ├── ClipboardAPI.jsx
│       │   │       └── img.css
│       │   │ 
│       │   ├──<strong>sub-components</strong>
│       │   │          ├──<strong>page-padding</strong>
│       │   │          ├──<strong>check-boxes</strong>
│       │   │          ├──<strong>color-picker</strong>
│       │   │          └──<strong>yping-effect</strong> 
│       │   │ 
│       │   ├── <strong>Modules</strong>
│       │   │       ├── header.js
│       │   │       ├── horizontal-ruller.js
│       │   │       ├── lists.js
│       │   │       ├── node-delete.js
│       │   │       ├── paragraph.js
│       │   │       └── text-format.js
│       │   ├── App.js
│       │   └── index.css
│       └── index.js
└── README.md
</pre>

### Run on your local server

`You will need NodeJS, MongoDB installed to run this project locally`

1. Clone the repo

        git clone https://github.com/Abusayid693/Type-writer.git

2. Starting the server application.

        Cd Type-writer && Cd Backend 
        npm install
        Nodemon index.js
   `This will start server on localhost:8000`     

3. Starting the Client application.

        Cd Type-writer && Cd App 
        npm install
        npm start
   `This will start client app on localhost:3000`  


---
# 🚀 Features
## 1. [Prefix edit text support]()

### Heading tags
For heading user can use prefix "#"


    Prefix " # "                                          -- For H1 tags
    prefix " ## "                                         -- For H2 tags
    prefix " ### "                                        -- for H3 tags
    prefix " #### "                                       -- for H4 tags.  
`user must press Space after entering prefix`    
 ### Lists tags
#### Unordered Lists 

        prefix " - "                                          -- for Unordered Lists elements 
#### Ordered Lists 

    prefix " Numerical digits "                           -- for Ordered Lists elements     
`user must press Space after entering prefix`    



### Eqation formatting
![](https://i.imgur.com/9DsfOrD.gif)

The eqation formating features supports all Algebric, triagnometric and metrix formatting, following with prefix " $ ".

- ####  Algebric equations
![](https://i.imgur.com/5oCKi1G.png)
- ####  Tragnometric and  equations
![](https://i.imgur.com/ZCj3MkC.png)
- ####  Matrices 

![](https://i.imgur.com/dQE81Qr.png)
     
### Horizontal lines
      prefix " --- "                                     --  for Horizontal lines
### Coding Blocks
The coding blocks supports syntaxhighlighter for `javascript code only` ( will be updated in future versions).

![](https://i.imgur.com/NtA7xDG.gif)

       prefix " ''' "                                  -- for syntaxhighlighting editor
![](https://i.imgur.com/fThdc0x.png)    

---

## 2. [Image copy pasting and resizing]()

Type-writer supports copy pasting images over browsers and reszie them accordingly.

![](https://i.imgur.com/sPs84G1.gif)

## 3. [color palette]()

Customize background colours,text colours as per your need, the color palette also supports hex codes.

![](https://i.imgur.com/B1BecXb.gif)

![](https://i.imgur.com/nLEJadt.png)

## 4. [Version control]()


** Version Control ** tracks and manage changes in your typewriter files,it keeps track of every modification to the files in our database hosted on the cloud , So user dont need to hustle over loosing their data. It also allows sharing of files with others for *** modification keeping the original version safe. ***

![Gif here](https://i.imgur.com/tHYRZdx.gif)

*** Iterate through different versions of your files ***

![Gif here](https://i.imgur.com/9aLyRDi.png)



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
  | ------------ | ------------- |
  | [axios](https://www.npmjs.com/package/axios) |Promise based HTTP client for the browser and node.js|  0.21.1 |
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
  | ------------ | ------------- |
  | [mongoose](https://mongoosejs.com) | elegant mongodb object modeling for node.js | 5.13.3 |
  | [morgan](https://www.npmjs.com/package/morgan) |HTTP request logger middleware for node.js | 1.10.0 |
  | [express](https://expressjs.com) | Node.js web application framework for server side scripting | 4.17.1 |
  | [MongoDB](https://www.mongodb.com) | a NoSQL database | 4.4.3 |

