## Animate your website

### 1. useing react-spinners : Loading Page or Animate button when to click

office URL:(https://github.com/davidhu2000/react-spinners)
-install npm

```
>npm i react-spinners
```

- import it

```
import { ScaleLoader } from "react-spinners";
```

### 2. reveal scroll animations in NextJs(React)

there are several libs

- react-animation-on-scroll (not worked not support)
- react-reveal
- react-spring
- framer-motion
- aos
  etc

#### AOS works fine!

https://github.com/BrunoS3D/nextjs-with-aos-example

- 1.install

```
> npm i aos --save
> npm i @types/aos --save
> npm uninstall aos --save
```

- 2. Initialize AOS with your page on "\_app.tsx"
- 3. // import aos styles
     import "aos/dist/aos.css";
- 4. Infer styles for AOS to work on browsers whose javascript has been disabled on <Head> tag.
-
- 5. using at your codes.
  - data-aos="fade-in"
  - data-aos-delay="1700"

#### Failed: react-animate-on-scroll : I do not see any anmination?

```
>npm config set legacy-peer-deps true
>npm install react-reveal --save
>npm i @types/react-animate-on-scroll
```

#### Failed: react-reveal does NOT support TypeScript

```
you must put  '>npm config set legacy-peer-deps true" and install it!!!
>npm config set legacy-peer-deps true
>npm install react-reveal --save
>npm uninstall react-reveal
```

fixed installation issue:(https://stackoverflow.com/questions/68016188/problem-to-install-react-reveal-animation-on-terminal-visual-studio-code)

You are having this problem probably because of cache or npm version so I will try to give you most feasible solution.

1-Delete your node_modules and package-lock.json files from your project.

2-Run npm cache clean --force in termial

```
>npm cache clean --force
```

3-Run npm install

4-Run npm install react-reveal --save

#### Failed: react-animation-on-scroll

threw Error "error - ReferenceError: window is not defined"

```
>npm install react-animate-on-scroll --save
>npm uninstall react-animation-on-scroll
and
>npm install --save animate.css
```
