# Contributing

## Development

We follow the standard `Develop` > `Main` development workflow.

![Feature Branches](<https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20(2).svg?cdnVersion=1521>)

<https://www.atlassian.com/de/git/tutorials/comparing-workflows/gitflow-workflow>

### Creating A Release / Push to Production

Releases are automatically deployed to vercel to:
`https://ares-frontend-v2.vercel.app`

and Storybook to:
`https://ares-storybook-v2.vercel.app`

## Components

To create a new component we use [hygen](https://github.com/jondot/hygen) in the background

```bash
yarn component ExampleComponent
```

Which will generate the following:

```ascii
components/
┣ Directory/
┃ ┗ ExampleComponent/
┃ ┃   ┣ ExampleComponent.scss
┃ ┃   ┣ ExampleComponent.spec.tsx
┃ ┃   ┗ ExampleComponent.tsx
┃ ┃   ┗ ExampleComponent.stories.tsx
```

## Sass

Please ensure you're familiar with the new modular system introduced by Sass in 2019

<https://sass-lang.com/blog/the-module-system-is-launched>

### Naming Conventions

In this project we use the `camelCase` to structure the styling and css/scss class names since nextjs css modules wouldn't allow us to use standard convention without a workaround

#### Colors

When adding new colors ensure it's named using one of the following tools:

- <https://chir.ag/projects/name-that-color/>
- <https://github.com/guillaumedoutriaux/name-that-color>

#### @extend

`@extend` should be used sparingly and not often. Please understand the difference between extends and mixins, also we dont use @import:

<https://sass-lang.com/documentation/at-rules/extend#extends-or-mixins>

## Architecture

- Please use yarn instead of npm
- We're using nextjs as react framework and storybook to display all of our components

## Husky

Pre-commit and pre-push hooks are managed via [husky](https://github.com/typicode/husky) in the main `package.json`

Tests and linting will be run before every commit and push.
