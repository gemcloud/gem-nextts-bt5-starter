### Add PerLoading feature

1. install styled-components
   https://dev.to/rffaguiar/nextjs-typescript-styled-components-1i3m

```
>npm install --save styled-components
and
>@types/styled-components
```

2. create Component "LoadingScreeen.tsx"

3. create Component "PreloadContext.tsx"
4. using at layout and call layout on each page!
   not call at \_app.tsx

#### try react-spinners(https://www.npmjs.com/package/react-spinners)

```
>npm install --save react-spinners
```

and it need @emotion(https://github.com/emotion-js/emotion) : The Next Generation of CSS-in-JS

```
npm install --save @emotion/react
```

### Setting import "@" on tsconfig.json file!

    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    },
    "baseUrl_old": ".",
    "paths_old": {
      "@/components/*": ["src/components/*"],
      "@libs/*": ["src/libs/*"],
      "@styles/*": ["src/styles/*"],
      "@context/*": ["src/context/*"]
    }

###? skip-nav sayhello()?

###? localStorage & language on "\_app.tsx" or hooks?
mutli Language:https://stackoverflow.com/questions/68091841/store-selected-language-in-windows-localstorage
BT Model: https://devrecipes.net/modal-component-with-next-js/
https://developer.school/snippets/react/localstorage-is-not-defined-nextjs

localStorage.setItem("gem-language");
localStorage.getItem("gem-language");

### Homepage

react-animate-on-scroll

```
>npm install react-animate-on-scroll --save
looks old cannot install
```

try AOS - Animate on scroll library ()

```
> npm install aos --save
```
