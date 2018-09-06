[![Build Status](https://travis-ci.org/itforlife/exapp.svg?branch=master)](https://travis-ci.org/itforlife/exapp)

## Mission

Enable a deeper connection between NGOs, institutional sponsors and individual donors to promote social/cultural causes and secure funding in a fun and rewarding way.

## How

By leveraging a charity social network like platform where NGOs can:

-   Start campaigns
-   In each campaign add **challenges**.
-   Challenges can be sponsored by institional sponsors(firms, other NGOs) or individual donors
-   Users can join and checkin on challenges using a Web or Mobile app.

Currently it is publicly accesible at [exapp.io](exapp.io) .

### Campaigns

Have a clear goal and description. They represent a 'theme' under which challenges are posted onto the platform.

### Challenges

They represent an actionable call to action and are tied to a campaign.

Examples of challenges:

1.  Post daily picture of your healthy lunch and a comment with the recipe
2.  Checkin each day you stay smoke free
3.  Visit national park and do a GPS checkin
4.  Share this campaign on Facebook and make a difference

Upon a challenge completion users are rewarded points which unlock badges that get posted on the users profile.

## Contributing

The application is a classic server rendered app.
The reason is so uncool by todays standards is that it values simplicity
above all else in order to produce a software that it's easy to maintain.

## Application structure

The server logic together with templating resides in `server` folder.
The client side is as thin as possible and resides in `client` folder.

### Running the app

The commands must be run from within the **root folder** of the project.

#### Compile the client side code(starts a file watcher)

```sh
npm run client:dev
```

This will compile everything in `client\controllers` and put the result in
the server document root from where it can be served to the browser(thats `server\public\assets\js`).

#### Compile the server( starts a watcher with Nodemon)

Prior to running the server create a `.env` file in the project root and populate with a content similar to the `sample.env` file.

At least you should set a proper port for the server(controlled via PORT environment variable).

After that run the server in dev mode.

```sh
npm run dev
```

## Important concepts

1. `React` is used as a template engine on the server side.

React is **NOT** used and will not be used as a client side library.
React is **NOT**
This means **no state** or **event handlers** can be used in the React views: just pass props and return JSX.

We try hard to keep the client as thin as posssible and push as much of the bussines logic to the server.

Why `React` as a server side template engine ?

Because we want type safetiness between controllers and views and full e flexibility of Javascript to create our server side templates.

As a bonus, the server side templates can be shown in tools like React Storybook.

2. Client side controllers

The client side JS interactions are achieved using re-usable controller objects implemented using [Stimulus JS](https://stimulusjs.org/).

The controllers all live in `client/controllers` directory.

Why `Stimulus` as a client side library ?

Because it has no opinion where the HTML comes from, is super light and has a declarative approach for attaching behaviours to DOM elements( and simplifying the amount of Javascript to be written ).

3. Client side controllers are automatically injected into the page as needed

The server has some logic that injectecs the client side controllers used on a page automatically.
So to add a new client side behaviour just write a controller and use it using `data-controller` attribute.

4. We build a platform, not an app

We want an easily maintainable, modular platform.
We want to adjust fast to changing market conditions.
We strive for low maintanance and running cost of the product since the vision is to be used in a non-profit context where such qualities are extremely important.

## Commit checklist

Before commiting please make sure:

-   Project still builds
-   TSLint reports no errors

```sh
cd client
yarn lint
```
