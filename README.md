# csvPeek
csvPeek is a tool for automatically visualizing data, originally created by
the Product Science team at [Pastry Labs]. Provide the
link to a data file and Charted returns a beautiful, interactive,
and shareable chart of the data.

csvPeek is deliberately sparse in formatting and data transformation options,
and instead gives you a few powerful core features:
* Rendering well on all screen sizes, including monitors
* Re-fetching the data and updating the chart every 30 minutes
* Moving data series into separate charts
* Adjusting the chart type, labels/titles, and background

## Supported files
csvPeek currently supports the following file types:
* .csv files
* .tsv files
* Google Spreadsheets (set to shareable)
* Dropbox share links to supported files

## Data structure
csvPeek treats the first column of the data file as the labels for the
x-axis. All subsequent columns are added as y-series. csvPeek does not
parse the first column (x-axis), but instead always equally spaces the
data points along the x-axis.

## Running csvPeek
To try csvPeek out, simply download the repo and run `npm install`
to install dependencies. After that you will be able to run
`npm start`. This will start a server at localhost:3000.

If you install [Watchman](https://facebook.github.io/watchman/), you can
run bin/watch to automatically recompile whenever you change JavaScript
or LESS files.

### On Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/praveensastry/csvPeek)

### With Docker

You can also run csvPeek via _docker_ by running
`docker build -t csvPeek .` in the repo to build the container. You
will then be able to run the container using
`docker run -p 3000:3000 csvPeek`. Server will be accessible at
localhost:3000


