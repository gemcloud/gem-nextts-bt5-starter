## Guide to internationalization (multiple languages) in Next.js with Lingui.js library

Because I am using Windows, I must install "npm i cross-env" on every my project to fixed Webpark issue( path , NODE_ENV=development).

```
> npm i cross-env
```

https://blog.logrocket.com/complete-guide-internationalization-nextjs/
https://codesandbox.io/s/nextjs-lingui-djzqm?file=/.babelrc

There, we support static rendering and on-demand language switching.

### Setup

1. Git : .gitignore Added
   ```
   # lingui js
   /src/translations/**/*.js
   ```

#### 1. Setup

- 1. install all required modules

```
>npm install --save-dev @lingui/cli @lingui/loader @lingui/macro babel-plugin-macros @babel/core

>npm install --save @lingui/react make-plural
```

#### Internationalized routing in Next.js

Next.js supports two types of internationalized routing

1. subpath routing: subpath (www.myapp.com/{language}/blog) marks the language
   e.g. http://www.myapp.com/en/tasks
2. Domain routing: you can have multiple domains for the same app.
   e.g. en.myapp.com/tasks

#### How Next.js detects the user’s language

Next.js auto detect location on the Accept-Language header. If next.js does not find out then the default by used!
and The framework can also use a cookie (NEXT_LOCALE cookie) to determine the user’s language.
and the Accept-Language header will be ignored.

#### Configuring our sample Next.js app

##### 2. config i18n on next.config.js what you wanted to support.

```
//next.config.js

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'ch', 'jp','pseudo'],
    defaultLocale: 'en'
  }
}
```

##### 3. Configuring Lingui.js

lingui.config.js: The Lingui.js configuration is more complicated than Next.js

##### How Lingui.js works with React

There are 2 approaches:
-1. use regular React components provided by the library.
-2. use Babel macros

#### To extract all the messages

```
> npx lingui compile

> npx lingui extract
```

#### Working with plurals

```
import { Plural } from '@lingui/macro'
```

#### Next.js and Lingui.js integration

-1. First, we are going to initialize Lingui.js on "utils.ts".
-2. Second, call "utils.ts" on "\_app.tsx"
-3. To load and activate the appropriate language on "\_app.tsx"
-4.

#### Changing the language dynamically

#### Pseudolocalization: Pseudo localization is a software testing method

#### issue:

> npx lingui compile ==> worked done

##### issue one: when execute "> npx lingui extract"

-symptem:

> npx lingui extract
> Cannot process file C:\VGuanProjectJam\gem-nextts-bt5-starter\src\components\AboutText.tsx: Support for the experimental syntax 'jsx' isn't currently enabled

Cannot process Support for the experimental syntax 'jsx' isn't currently enabled

- solution: create a .babelrc file and add:
- reason: Support for the experimental syntax 'jsx' isn't currently enabled (https://stackoverflow.com/questions/63005011/support-for-the-experimental-syntax-jsx-isnt-currently-enabled)

```
{
  "presets": ["next/babel"],
  "plugins": ["macros"]
}

```

##### issue two: when execute "> npx lingui extract"

- symptem:
  Cannot process file C:\VGuanProjectJam\gem-nextts-bt5-starter\src\components\AboutText.tsx: Duplicate declaration "Trans"
  Cannot process Duplicate declaration "Trans"

- Solution:
  1. install "npm i cross-env" on windows system (windows 10, 11).
  2. use below command on "package.json"
  ```
      "lang:extract": "cross-env NODE_ENV=development lingui extract --clean",
  ```
  3. run "> yarn lang:extract"
  4. installed package version as below
     "@lingui/react": "^3.13.0",
     "@lingui/cli": "^3.13.0",
     "@lingui/loader": "^3.13.0",
     "@lingui/macro": "^3.13.0",

#### Issue 3:

useLingui hook was used without I18nProvider.

#### Add LangSwitcher.tsx and demo + plural

#### Summary 2021-12-28

1. Install related @lingui
2. Setup your project files

   1. ".gitignore"
   2. ".babelrc"
   3. "package.json"
   4. "next.config.js"

3. Configuring lingui. We have 2 options; "lingui.config.js" or ".linguirc"

   1. "lingui.config.js"
   2. ".linguirc"

4. To compile & extract all the messages
5. Next.js and Lingui.js integration (Demo and use lingui)

6. we have to use nextjs "next/link" or "next/route"
