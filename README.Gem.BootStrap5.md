## BootStrap 5 on Nextjs_TS : The bootstrap need javascript lib!!!

## install bootstrap 5

#### Approach #1 : CDN put css+ js on "\_document.tsx"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

#### Approach #2 : Nodejs

1. npm install

   ```
      > npm i --save bootstrap@latest
      > npm install --save @types/bootstrap
   ```

   ```not use below
   > npm i bootstrap npm@latest
   > npm install --save bootstrap@latest
   ? error> npm i @type/bootstrap
   >npm install --save @types/bootstrap
   ```

2. import bootstrap.css on file "\_app.tsx"
   ```
    import "bootstrap/dist/css/bootstrap.css";   // import bootstrap.css
   ```
3. import bootstrap-js on file "\_app.tsx"

   ```
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
   ```

4. testing page404

### Add Mobile Navbar

    includes/navigations/baseNavigation.tsx ==>worked!

### ESLint issue tsx file

https://reactjs.org/docs/hooks-rules.html

```
npm install eslint-plugin-react-hooks --save-dev
```

### install fortawesome

```
npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons  @fortawesome/free-regular-svg-icons  @fortawesome/free-brands-svg-icons  @fortawesome/react-fontawesome

```

    "@fortawesome/fontawesome-svg-core": "^1.2.36",
    "@fortawesome/free-brands-svg-icons": "^5.15.4",
    "@fortawesome/free-regular-svg-icons": "^5.15.4",
    "@fortawesome/free-solid-svg-icons": "^5.15.4",
    "@fortawesome/react-fontawesome": "^0.1.15",

## 2021-12-22 todo

done 1. install bootstrap
done 2. add mobile navbar
done 3. firstlanding landing page

done 4. favicon icon on SeoMeta.tsx used emoji

5. animantion hello
6. floyet.com header

C:\VGuanSampleJam\ixartzNext-JS-Landing-Page

1. add env cross for webpack_V5
2. site-map
3. read md file
4. boot nav bar

5. blog
6.
