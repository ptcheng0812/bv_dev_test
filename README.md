# Binary Vision Dev Test

This is excersise is part of our interview process. Its a way for you to show
your skills as a developer and ability to work with an existing code base.

## Test
The test consists of a simple react app that should display the exoplanets 
discovered by TESS in 2022.

The data source for this can be found at https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json

Simply we want this data to be pulled in, parsed and displayed. It can be displayed 
as a table or any other way you think approriate.

The main pieces of info we want to see is:  
Planet Name: `pl_name`
Release date: `releasedate`
Planet radius (earth units): `pl_rade`

This can be displayed on the home page below the existing text or on a new page, 
up to you.

## Running

To run this app you will need `nodejs` and `yarn`.
Run `yarn` in this folder to install the dependencies and `yarn start` to start 
the app.
