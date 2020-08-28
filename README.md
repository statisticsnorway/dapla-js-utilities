# dapla-js-utilities
[![npm version](https://badge.fury.io/js/%40statisticsnorway%2Fdapla-js-utilities.svg)](https://badge.fury.io/js/%40statisticsnorway%2Fdapla-js-utilities)
[![Build Status](https://dev.azure.com/statisticsnorway/Dapla/_apis/build/status/Frontends/statisticsnorway.dapla-js-utilities?branchName=master)](https://dev.azure.com/statisticsnorway/Dapla/_build/latest?definitionId=37&branchName=master)

This library is mainly built for developers at Statistics Norway and it aims to bundle together commonly used 
JavaScript functions and configurations and React components used in various Statistics Norway Dataplatform related 
frontend applications.

- [Installing library](#installing-library)
- [Build and test locally](#build-and-test-locally)
- [Publish library](#publish-library)
- [Available stuff](#available-stuff)
    - [Components](#components)
        - [\<ErrorMessage\>](#errormessage)
        - [\<InfoPopup\>](#infopopup)
        - [\<SimpleFooter\>](#simplefooter)
        - [ssb-logo-rbg](#ssb-logo-rgb)
    - [Functions](#functions)
        - [getNestedObject()](#getnestedobjectinitialobject-pathtonestedobject)
        - [truncateString()](#truncatestringstring-length)
        - [reactTableCustomFilterMethod()](#reacttablecustomfiltermethodfilter-row)
    - [Configurations](#configurations)
        - [CSS](#css)
        - [SSB_STYLE](#ssb_style)
        - [SSB_COLORS](#ssb_colors)
    - [Enums](#enums)
        - [LANGUAGE](#language)
        - [REACT_TABLE_TEXT](#react_table_text)

----

## Installing library
If you want to use the library in your project, simply add it with yarn.

`yarn add @statisticsnorway/dapla-js-utilities`

In your project import any component, function or configuration.

`import { Component } from '@statisticsnorway/dapla-js-utilities'`

## Build and test locally
The first time you clone the repository, remember to run `yarn install`.

Run `yarn build` to build the library. A minified production ready version will be created in the `/lib` folder.

`yarn test` runs all tests and `yarn coverage` calculates (rather unreliably) test coverage.

## Publish library
To publish to [npm](https://www.npmjs.com/) you need a user and a membership in the `statisticsnorway` organization on 
npm. The user must also have 2FA authentication enabled. Steps to follow:

1. Login into your npm account in the terminal with `npm login`
2. Make sure all tests works (test components in the example application aswell, if you made a new one)
3. Bump version in `package.json`
4. Run `yarn build`
5. Dry run a release with `npm pack`
6. Publish with `npm publish --access public --otp=<code>` (`<code>` is your 2FA code, without `<>`)

## Available stuff
### Components
**Important!** Usage of components from this library requires your application to use React and Semantic UI since this
library does not include them. Examples can be viewed by running the example application in this project. `yarn start`
and navigate to `http://localhost:3000`.

#### `<ErrorMessage>`
This component takes an error response from any API and shows it in an error box. Use it like this:

```javascript
<ErrorMessage error={response} />
```

The component searches for the error message in multiple places in the response object. The title can be overridden by 
providing a title property to the component. A default title will be used if none is provided. You can decide what 
language the default title should be by providing a language property. By default this is in Norwegian if none is 
provided. Currently Norwegian and English is supported.

#### `<InfoPopup>`
This component is simply a wrapper for the Semantic UI `Popup` component which adds an info icon to the text displayed
in the popup. Use like this: 

```javascript
<InfoPopup 
  text='Information' 
  position='right center' 
  trigger={<p>Hover over me!</p>} 
/>
```

#### `<SimpleFooter>`
A very simple footer-like component showing a link to the projects repository, the version of the application, a 
convenient scroll to top button and Statistics Norway copyright:

```javascript
<SimpleFooter
  appVersion='1.0.0'
  sourceUrl='https://github.com/statisticsnorway/dapla-js-utilities'
/>
```

You can decide what language the texts should be by providing a language property. By default this is in 
Norwegian if none is provided. Currently Norwegian and English is supported.

#### `ssb-logo-rgb`
Import and use a Statistics Norway logo i svg format:
```javascript
import { Image } from 'semantic-ui-react'
import ssb_logo_rgb from '@statisticsnorway/dapla-js-utilities'

...

<Image 
  size='medium' 
  src={ssb_logo_rgb} 
/>
```

### Functions
#### `getNestedObject(initialObject, pathToNestedObject)`
This function provides a simple way to extract something deeply nested in an object and return it, or return `undefined`
if it does not exist. This function is very useful because simply referring to a deeply nested object within an object
in JavaScript will crash your application runtime if it does not exist unless you test every level down if the next 
level exists first. Use it like this:

```javascript
const initialObject = {
  firstLevel: {
    secondLevel: {
      text: 'Here I am!'
    }
  }
}

const text = getNestedObject(initialObject, ['firstLevel', 'secondLevel', 'text'])
const problem = getNestedObject(initialObject, ['firstLevel', 'text'])
```

In this case the variable `text` now contains `Here I am!` and `problem` is `undefined`. But your application will not
crash runtime when defining the variable `problem`.

#### `truncateString(string, length)`
This function takes two arguments, the first being the string you want to truncate, the second being at which point in 
the string do you want to cut it off and end it with `...`. If the function is provided with a non-string, it simply 
returns `...`.

**Example:** `truncateString('Hello World!', 5)` returns `'Hello...'`

#### `reactTableCustomFilterMethod(filter, row)`
This function is an enhancement on the default filter method provided in 
[React Table](https://github.com/tannerlinsley/react-table). Use it like this:

```javascript
<ReactTable
  defaultFilterMethod={reactTableCustomFilterMethod}
/>
```

#### `getLocalizedGsimObjectText(languageCode, object)`
This function searches through the commonly used `MultilingualText` type from the GSIM-model (when converted to JSON)
for text matching the language you wish to retrieve. When providing the function with a language code and the 
`MultilingualText`-object (which is an array) you want to retrieve the text from, it will return the text, like this:

```javascript
const object = [
  {
    'languageCode': 'en',
    'languageText': 'Text'
  },
  {
    'languageCode': 'nb',
    'languageText': 'Tekst'
  }
]

const string = getLocalizedGsimObjectText('nb', object)
```

In this case `string` will have the value `'Tekst'`. If a non-array or an empty array is provided, the function simply
returns `'-'`. If it is unable to find text matching a language code it will default to returning the text within the 
first entry of the array. In the case that also cannot be found, it returns `'-'`.

### Configurations
#### `CSS`
This handy CSS-snippet can be copied and used in your application to get the correct background color and some other 
minor tweaks to some Semantic UI components for them to work well with a different background color.

```css
body {
  background: #f0f8f9
}

.ui.loading.segment:before {
  background: transparent;
}

.ui.secondary.menu .active.item {
  font-weight: bold;
}
```

#### `SSB_STYLE`
In order to get the correct background color on components which does not inherit the bacground color from the CSS
above, you can conveniently import and use the `SSB_STYLE` enum like this `<Component style={SSB_STYLE}`.

#### `SSB_COLORS`
This enum contains commonly used colors straight from 
[SSBs Design](https://statisticsnorway.github.io/design-system/#/components/color) and can be used like this
`<Component style={{ color: SSB_COLORS.BLUE }} />`.

### Enums
#### `LANGUAGE`
Common setup for language choice with provided language and locale codes.

#### `REACT_TABLE_TEXT`
Translations for [React Table](https://github.com/tannerlinsley/react-table) used like this:

```javascript
<ReactTable
  ofText={REACT_TABLE_TEXT.OF[language]}
  nextText={REACT_TABLE_TEXT.NEXT[language]}
  pageText={REACT_TABLE_TEXT.PAGE[language]}
  rowsText={REACT_TABLE_TEXT.ROWS[language]}
  loadingText={REACT_TABLE_TEXT.LOADING[language]}
  previousText={REACT_TABLE_TEXT.PREVIOUS[language]}
  noDataText={REACT_TABLE_TEXT.NOTHING_FOUND[language]}
/>
```

`language` is the language code for the language you wish to display the text with. Currently `nb` (Norwegian) and
`en` (English) is supported.