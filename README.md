## Mission

Enable a deeper connection between NGOs, institutional sponsors and individual donors to promote social/cultural causes and secure funding in a fun and rewarding way.

## How

By leveraging a charity social network like platform where NGOs can:

- Start campaigns
- In each campaign add **challenges**.
- Challenges can be sponsored by institional sponsors(firms, other NGOs) or individual donors
- Users can join and checkin on challenges using a Web or Mobile app.

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

1.  Go to https://console.firebase.google.com/ and create a new project
2.  Create a Database in test mode
3.  Add an .env file in `src/app` that is similar to .sample.env with your firebase config
4.  Run npm install in the root of the project

```sh
npm install
```

5.  Start the aplication:

```sh
npm run dev
```
