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

## Install

### Pre-requisites

Make sure you have SQLlite installed

```sh
sudo apt-get install sqlite3 libsqlite3-dev
```

### Step to run the app

1.  Go to https://console.firebase.google.com/ and create a new project
2.  Create a Database in test mode
3.  Enable Authentication with email
4.  Add an .env file in the project root folder that is similar to .sample.env with your firebase config
5.  Run yarn install

```sh
yarn build-all or npm run build-all
```

6.  Start the aplication:

```sh
yarn dev
```

## Contributing

Before commiting please make sure:

-   Project still builds
-   TSLint reports no errors

```sh
yarn lint
```
