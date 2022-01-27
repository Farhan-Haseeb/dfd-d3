# Boilerplate

Basic Structure for React Application.

## Install dependencies

```
npm install
```

## Start App

```
npm run start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Any lint errors will be visible in the console.

## Build Bundle

```
npm run build
```

## Environment Configurations
### Development env variables
- Create `.env` file in root directory
- Added required env variables; must be all caps in snake_case and starts with `REACT_APP_` e.g `REACT_APP_BRAND_NAME=productbox`.

### Production env variables
- Define all required envs in remote as per requirement.

## API requests with Axios
- An axios configuration has been placed with basic configs and headers, this will be used in every API call with axios.
- Every response will be handled with a success and error handler.
- Success handler is being used as a default `.then` and will deconstruct data from response.
- Error handler is being used as a default `.catch`, it will out the error as `console.error`, this is according to the requirements.
- Default error handler will be skipped for request containing `errorHandle = false` in the config.

## Contributing
- We use `sass` as our styles compiler.
- Bootstrap is used for its styled components and existing styles.
- Resources(Images, Icons and Fonts) have been added to Assets directory. All assets must be placed in their respective directories.