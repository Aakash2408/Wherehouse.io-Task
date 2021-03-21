# :milky_way: :rocket: SpaceX Launches!

## Description
This website  displays data about SpaceX rocket launches fetched from api.

Using the SpaceX API: https://api.spacexdata.com/v3/launches.


**Demo**
[Demo](https://warehouseio-spacex.web.app/)


Built with:

- [React](https://reactjs.org/)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
- [Material-Ui](https://material-ui.com/)
- [react-cool-img](https://www.npmjs.com/package/react-cool-img)

Hosted on:
- [Firebase](https://www.firebase.com/)


> Desktop Version

![Screenshot (53)](https://user-images.githubusercontent.com/47134609/111905783-6b3d8c80-8a73-11eb-907d-f9e6e915f6bf.png)



> LightHouse Score(Desktop)

 ![Screenshot (51)](https://user-images.githubusercontent.com/47134609/111905691-fff3ba80-8a72-11eb-9566-fc792baa0c48.png)

### Features of application
* Application Fetches spacex 100 missions details when app is initialized
* Fiters are provided in the application
* Single filter and combined filter
* Filter colour change on selection
* Material Ui is used for UI framwork to give application a better look.
* Responsive UI for all kind of device
* Skeleton Component also added to improve user experience

### Development Approach
* Used Functional Components with Hooks
* Sending API calls ony when state changes
* Used React lazy and Suspense for code spliting on component level with dynamic imports
### Performance optimization
* lazy loading of Images implemented for each flight detail added
* Memoiztion of Components added, 
* Avoided unncessary API call for the same filter again again.


## Getting Started

1. Clone the Repo

   ```bash
   git clone https://github.com/Aakash2408/Wherehouse.io-Task
     ```

2. Install dependencies

   ```bash
   npm i 
   ```

3. Fire up the server and watch files

   ```bash
   npm start
   ```

