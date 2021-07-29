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

Type writer is a modern documentating Application with support of prefix-edit-text.

Get youtube [demo]() here
## Contents:
- [Features]()
- [Project Starter]()
- [Getting Started]()
- [Deployment]()
--- 
### Directory layout

<pre>
.
├── <strong>Backend</strong>
│   ├── <strong>Models</strong>
│   │   └── models.js
│   ├── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
├── <strong>App</strong>
│   ├── README.md
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── index.html
│   │   └── manifest.json
│   └── <strong>src</strong>
│       ├── <strong>components</strong>
│       │   ├── <strong>Assets</strong>
│       │   │    ├── Group.svg
│       │   │    ├── Code.svg
│       │   │    └── vector.svg
│       │   ├── <strong>Downloading-formats</strong>
│       │   │    └── Download.jsx
│       │   ├── <strong>Format-equation</strong>
│       │   │    └── Format-equation.jsx
│       │   ├── <strong>General</strong>
│       │   │    ├── <strong>Styles</strong>
│       │   │    │    ├── control.css
│       │   │    │    └── fonts.css
│       │   │    ├── control.jsx
│       │   │    └── Imports.jsx
│       │   ├── <strong>Pages</strong>
│       │   │       ├──<strong>Main</strong>
│       │   │       │  ├── Main.jsx
│       │   │       │  └── Imports.jsx
│       │   │       ├──<strong>Home-page</strong>
│       │   │       └──<strong>Projects</strong>
│       │   ├── <strong>Side bar</strong>
│       │   │    └── Sidebar-routes.jsx
│       │   ├── <strong>Version-control</strong>
│       │   │       ├──<strong>sub-components</strong>
│       │   │       │   ├── Payload.jsx
│       │   │       │   └── Version-button.jsx
│       │   │       ├── Imports.jsx
│       │   │       ├── Version-control.css
│       │   │       └── Version-control.jsx
│       │   ├── <strong>Code-block</strong>
│       │   │       ├── code.jsx
│       │   │       ├── code.css
│       │   │       └── syntaxhighlighter.jsx
│       │   ├── <strong>Image-capture</strong>
│       │   │       ├── ClipboardAPI.jsx
│       │   │       └── img.css
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

---
# 🚀 Features
##  [Prefix edit text support]()

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
The eqation formating features supports all Algebric, triagnometric and metrix formatting, following with prefix " $ ".

#### 1. Algebric equations

#### 1. Tragnometric and  equations

#### 1. Matrices 


     
  