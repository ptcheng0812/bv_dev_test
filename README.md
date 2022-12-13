# Binary Vision Dev Test

This exercise forms part of our interview process. It's a way for you to show
your skills as a developer and ability to work with an existing code base.

## Test
The test consists of a simple react app that should display the exoplanets
discovered by TESS in 2022.
The data source for this can be found at https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json

We want this data to be pulled in and displayed.
This can be a table or any other way you think is approriate.

The main pieces of info we want to see is:
Planet Name: `pl_name`
Release date: `releasedate`
Planet radius (earth units): `pl_rade`

The data should be sorted by `releasedate`

This can be displayed on the home page below the existing text or on a new page,
up to you. Something that fits in line with existing styling, but do also include some 'niceties' that you feel fits in with the general look and feel.

## Running

To run this app you will need `nodejs` and `yarn`.
Run `yarn` in this folder to install the dependencies and `yarn start` to start the app.

## Objectives
Imagine the application will be used for scientists or astronomy professionals to query and view Exo Planets details, it is important to present structural data and data visulization. Bsides from the functionality of viewing, searching planets and filtering would also be necessary when user want full deatils on one single planet. Therefore, I took the approach to build a dashboard platform with functionality from table querying, 3D modeling. Interactive card design to improve user-experience.

## Main Feature

### Exo Planets Table
![image info](https://i.imgur.com/pqPkqTc.png)
- Exo Planets Table show data set from TESS api. Data is fetched and then sorted based on release date.
- Filter Search funtionaslity is impllemented to query Planet Name, Planet Radius (earth units), Temperature (℃), Release Date
- Pagination for showing 10 rows of data, which is more user-friendly, and Refresh Filter Button to reset filter and re-render table.
- React hooks such as useEffect, useState and useCallback are being used to control state lifecycle logic, giving full component control based on table query rows, search keyword or selected planet, etc.
- Helper functions are written in helper.js for data converting, sorting, validating, etc.
- 3D modeling of planet sphere, created by using three.js can provide a cool visualization.

### Home View
![image info](https://i.imgur.com/Nl6AbP4.png)
- Summary of data is presented in card component so users can instantly view changes of data. In a real-life situation, scientists might need to inspect updates and newly released planets. An ovewrview caption of data can allow users to eaily spot changes and new data.
- Interactive and original design, such as hover effect and animation, to provide better user-experience.
- Tutorial card component on the right is to give new user the flow of using the dashboard. By laying out how to use the features and redirect, it provides more user-accessibility.

### Nav Search and Side bar Redirect
![image info](https://i.imgur.com/mqZyXa3.png)
- Type in Planet Name on Top Search Bar with get you to http://localhost:3000/data/data?keyword=something, which the query string would be used for finding corresponding planet in Data page
- Side Bar to navigate two different pages, dummy Logout button not implemented yet

## Denpendecies
mui/x-data-grid, threejs, tailwindcss, styled-components

## Cypress Testing
I also did a little bit of Cypress e2e testing. In order to run the tests, you need to run this in terminal under root directory:
```bash
yarn test
```

## Improvements
I actually planned some other features that has not be implemented yet. For example,
- More Validations on input
- Tooltip
- Responsive(mobile viewport)
- Authentication (imagine this is a real product, session token can provide a lot more on props or state's control)
- Modal (that can be used for authenticating)

## Demo
Demo Link: [https://cosmo-exoplanets.netlify.app/](https://cosmo-exoplanets.netlify.app/)
