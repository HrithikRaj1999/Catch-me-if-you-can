# Catch-me-if-you-can Project Overview

The Catch-me-if-you-can project is structured into two primary components, reflecting a typical modern web application's architecture. This structure supports a clear separation of concerns, with the frontend (`client`) focused on user interaction and the backend (`server`) handling data management and business logic.

## Project Structure

- `client`: Contains all frontend code, likely built with web technologies such as React for the user interface and Tailwind CSS for styling. This directory is structured to include essential configurations like `package.json` for dependency management, `.env` for environment variables, and a `src` directory for the source code.
- `server`: Hosts the backend code, which is responsible for API services, database interactions, and server-side logic. It likely utilizes Node.js with Express for routing and MongoDB for data storage. Key files include `server.ts` for the main server configuration, `mongoConnection.ts` for database connection setup, and a `src` directory for additional server logic.

## Key Technologies

- **Frontend**: React, Tailwind CSS, TypeScript
- **Backend**: Node.js, Express, MongoDB, TypeScript

## Getting Started
## Client Side
The project requires Node.js and npm installed to run both the client and server locally. Dependencies for each part of the application can be installed via npm, and environment variables need to be set up according to the `.env` files located in both the `client` and `server` directories.

## Usage

This application is designed to provide a robust web solution, with the frontend facilitating user interaction and the backend ensuring efficient data handling and business logic execution. The use of TypeScript across both ends enhances development by providing type safety and supporting modern JavaScript features.
# Application Routing Configuration

This document details the routing setup for a React application, utilizing `react-router-dom` for navigation and `Suspense` with `lazy` for component lazy loading. The setup aims to improve the application's performance by loading components only when they are needed.

## Overview

The application's routing is managed by `createBrowserRouter`, which defines routes for pages like the homepage, city selection, vehicle selection, and results, among others. Each route is associated with a specific component that is rendered when the route is matched. Lazy loading is implemented for these components to enhance the loading efficiency.



## Routing Configuration

- **Base Route (`"/"`)**: The homepage of the application. It uses the `HomePage` component wrapped in `Layout` for consistent page structure across the app.
- **City Selection (`"/city-selection"`)**: For selecting cities, rendered by the `CitySelectionPage` component.
- **Vehicle Selection (`"/Vehicle-selection"`)**: Handles the selection of vehicles, using the `VehicleSelectionPage` component.
- **Create City (`"/create-city"`)**: A form for creating new city entries, rendered by the `CreateCitySelectionPage` component.
- **Create Vehicle (`"/create-Vehicle"`)**: Similar to the create city route, but for adding new vehicles, using the `CreateVehicleSelectionPage`.
- **Results (`"/results"`)**: Displays the outcome of actions taken in previous steps, rendered by the `Results` component.
- **Fallback Route (`"*"`)**: Catches all unmatched routes and displays a simple "No Page Found" message.

## Lazy Loading

Components are loaded lazily using React's `lazy` function, which splits them into separate chunks that are loaded only when the route is navigated to. `Suspense` is used to display a `LoadingSpinner` as a fallback while the component is being loaded.

## Environment Variables for API Endpoints

API endpoints for fetching cities, vehicles, initiating a chase scenario, and creating cities or vehicles are constructed using environment variables to ensure flexibility and configurability:

- `GET_CITY_LIST`
- `GET_VEHICLE_LIST`
- `BEGIN_CHASE`
- `CREATE_CITY`
- `CREATE_VEHICLE`

## Conclusion

The application's routing setup is designed to offer a seamless user experience while optimizing load times through lazy loading. By structuring routes around the application's core functionalities and leveraging environment variables for API endpoints, the setup ensures maintainability and scalability.

## CopsContext and CopsContextProvider Documentation

### Overview

The `CopsContext` and its provider, `CopsContextProvider`, form the cornerstone of state management for cops' details within our React application. This approach leverages React's Context API to facilitate a global state that can be accessed throughout the application, thereby eliminating the need for prop drilling.

### Functionality

- **CopsContext**: Acts as a container for the application's global state concerning cops' details. It is created using React's `createContext` method. The context provides an interface for accessing and updating the cops' details from anywhere in the application.

- **CopsContextProvider**: A component that wraps the application or parts of it where the cops' details are needed. It uses the `useState` hook to manage the cops' details state internally and provides a mechanism to update this state. The provider makes the `copsDetails` state and its updater function (`setCopsDetails`) available to all child components, enabling a centralized management of the state.

### Usage

To use this context:
1. Wrap your component or application with `CopsContextProvider`.
2. Access the context in any child component using the custom hook `useCopsContext`. This hook returns the current state of cops' details and a function to update it, allowing for a seamless integration of the global state in your component logic.

### Benefits

- Reduces the complexity and clutter associated with prop drilling, especially in large applications.
- Centralizes the state management of cops' details, making it easier to update and maintain.
- Enhances the scalability of the application by providing a straightforward way to manage state across multiple components.
# CitySelection Component Documentation

The `CitySelection` component is integral to a React application, providing an interactive interface for selecting cities associated with different cops. This document outlines its structure, functionality, and the custom components and hooks it leverages.

## Overview

`CitySelection` serves as a dynamic component that allows users to assign cities to cops from a predefined list. It employs a combination of custom components and hooks to deliver a seamless user experience:

- **CityDropdown**: A dropdown component for selecting a city for each cop.
- **ButtonWithSpinner**: A button component that displays a spinner animation to indicate a loading or processing state.
- **Spinner**: A visual indicator for loading states, shown when city data is being fetched.
- **useSelectCity**: A custom hook that encapsulates the logic for fetching city data, managing selection states, and handling city selection actions.

## Functionality

- **Initial Loading**: Displays a spinner animation centered on the screen if city data is being loaded.
- **City Selection per Cop**: Utilizes the `CityDropdown` component to render a dropdown list for each cop defined in the `COPS_NAME` array, allowing users to select a city for each cop.
- **Submit Button**: Incorporates the `ButtonWithSpinner` component for submitting selected cities. The button comes with integrated loading feedback and styled with Tailwind CSS for aesthetics.
- **City Details Display**: After selection, city details (including thumbnail, name, title, and description) are displayed in a flex container. Cities that have been selected are highlighted differently to signify selection status.

## Interaction Flow

1. **Loading State**: Initially, if the city data is being loaded, a spinner is displayed.
2. **City Selection**: For each cop, users can select a city from the dropdown list provided by the `CityDropdown` component.
3. **Submission**: Users can submit their selections using the `ButtonWithSpinner` component, which also indicates a loading state upon action.
4. **Display Selected Cities**: Post selection, detailed cards of selected cities are displayed, highlighting the selected ones distinctively.

## Design and Styling

This component makes extensive use of Tailwind CSS for styling, ensuring responsiveness and an engaging user interface. The layout adjustments are made to accommodate different screen sizes, from mobile to desktop, using Tailwind's utility classes.

## Integration

`CitySelection` exemplifies a modular approach to React development, showcasing how custom hooks and components can be combined to build complex features with clean and maintainable code.
# VehicleSelection Component Documentation

The `VehicleSelection` component is a pivotal element within a React application, designed to enable users to select vehicles for a set of cops, identified by their names. This document details the component's functionality, the custom components and hooks it utilizes, and its user interaction flow.

## Overview

`VehicleSelection` facilitates the process of assigning vehicles to cops for a hypothetical chase scenario. It makes use of several custom components (`VehicleDropdown`, `ButtonWithSpinner`, `Spinner`) and a custom hook (`useSelectVehicle`), alongside constants defined in the application to manage and display vehicle selections.

## Functionality

- **Initial State**: Displays a loading indicator (`Spinner`) when vehicle data is being fetched or is in a loading state.
- **Vehicle Selection**: Offers a dropdown list per cop (sourced from `COPS_NAME`) through the `VehicleDropdown` component, allowing users to select vehicles. It handles scenarios where no vehicles are found by displaying a relevant message.
- **Chase Initiation**: Incorporates a `ButtonWithSpinner` component to initiate the chase, featuring a custom loading state and styled with Tailwind CSS for visual consistency.
- **Vehicle Details Display**: Post-selection, details for the available vehicles are shown, including name, range, and available quantity. Vehicles that are selected or unavailable are highlighted distinctively to convey their status.

## Interaction Flow

1. **Loading Indicator**: Upon component mount, if the application is fetching vehicle data, a centralized spinner is displayed as a placeholder.
2. **Vehicle Assignment**: Users are presented with a dropdown list for each cop to assign vehicles, with immediate feedback for unavailable options or in case no vehicles are found.
3. **Chase Simulation**: A button labeled "Let's see who wins the chase !!" allows users to proceed with the selected configurations. This button visually indicates a processing state to enhance user feedback.
4. **Vehicle Overview**: Following the selection process, a visual representation of all vehicles, including those selected for the chase, is displayed. This section uses conditional rendering to highlight the availability and selection status of each vehicle.

## Design Considerations

Styled predominantly with Tailwind CSS, `VehicleSelection` emphasizes responsiveness and user engagement through its visual design. It adapts seamlessly across devices and screen sizes, employing utility classes for layout, spacing, and conditional styling based on the application's state.

## Integration

By leveraging custom hooks and components, `VehicleSelection` demonstrates a modular and scalable approach to feature development in React applications. It encapsulates complex state management and user interactions in a user-friendly interface, contributing to the overall functionality of the application.

# Results Component Documentation

The `Results` component, along with its sub-components `CaptureSuccess` and `CriminalResults`, plays a crucial role in displaying the outcome of a chase scenario within a React application. This documentation delves into their functionalities, integration with React Router's `useLocation` for state management, and the dynamic rendering based on the chase outcome.

## Overview

The `Results` component is designed to display the final outcome of a chase scenario, indicating whether the chase was successful or not. It utilizes the `useLocation` hook from React Router to access the application state, which contains details about the chase outcome, including success status, a message, and details about the cop, city, and vehicle involved in the scenario.

## CaptureSuccess Component

### Purpose

Displays detailed information about a successful chase, including images and names of the cop, city, and vehicle involved.

### Features

- Dynamically generates image paths for the cop based on their name.
- Utilizes passed props to display the city and vehicle images along with their names.
- Presents the information in a responsive layout that adjusts from a column to a row alignment on wider screens.

## CriminalResults Component

### Purpose

Shows a humorous message and image indicating that the criminal managed to evade capture.

### Features

- Displays a fixed image representing the criminal.
- Includes a playful message taunting the user about the unsuccessful chase.

## Results Component

### Functionality

- Retrieves the chase outcome and related details from the application's state using the `useLocation` hook.
- Conditionally renders either the `CaptureSuccess` component for a successful chase or the `CriminalResults` component for a failed attempt based on the `isSuccess` flag.
- Displays a message reflecting the outcome of the chase, decorated with emoticons to visually represent the success or failure.

### Integration

This component demonstrates effective state management and conditional rendering in React applications. By leveraging the `useLocation` hook, `Results` can access and display chase outcomes without the need for prop drilling or complex state management solutions.

## Design and Styling

Styled with Tailwind CSS, the components prioritize a responsive and engaging user interface. They showcase the use of utility classes for layout, spacing, and conditional styling adjustments to ensure a cohesive and visually appealing experience across different devices.

## Conclusion

The `Results` component and its sub-components `CaptureSuccess` and `CriminalResults` embody a modular approach to React development. They encapsulate specific functionalities within the broader context of displaying chase outcomes, illustrating how custom hooks, conditional rendering, and external libraries can be harmoniously integrated to enhance user interaction within an application.

# Custom Hooks Documentation

This document covers three custom hooks (`useSelectVehicle`, `useCreateCity`, and `useCreateVehicle`) designed for managing vehicles and city data within a React application. Each hook serves a specific purpose, from selecting vehicles, creating city entries, to creating vehicle entries, integrating with external APIs, form handling, and navigation.

## useSelectVehicle Hook

### Overview
`useSelectVehicle` is responsible for fetching a list of vehicles from an API, managing vehicle selections, and initiating a chase scenario. It incorporates loading state management, Axios for data fetching, and React Router for navigation.

### Key Functionalities
- Fetches a list of vehicles upon component mount.
- Manages the selection of vehicles for a chase scenario.
- Submits the final selections and navigates to the results page.

### Integration
- Uses Axios for GET and POST requests.
- Integrates with `useCopsContext` for global state management.
- Utilizes React Router's `useNavigate` for navigation to the results page.

## useCreateCity Hook

### Overview
`useCreateCity` facilitates the creation of new city entries through a form. It handles form inputs for city details, including image uploads, and submits this data to an API.

### Key Functionalities
- Manages form state for city creation.
- Handles image file input and conversion to Base64 for embedding within form data.
- Submits city data to an API and navigates to the city selection page upon success.

### Integration
- Leverages Axios for the POST request to create a new city.
- Utilizes React Router's `useNavigate` for post-submission navigation.

## useCreateVehicle Hook

### Overview
Similar to `useCreateCity`, `useCreateVehicle` is designed for creating vehicle entries. It manages a form for vehicle details, including image uploads.

### Key Functionalities
- Maintains form state for vehicle creation, including handling changes to form fields and image file inputs.
- Submits the vehicle form data to an API and handles navigation upon successful submission.

### Integration
- Uses Axios for sending the POST request to create a new vehicle.
- Implements navigation with React Router's `useNavigate` following successful form submission.

## Common Themes and Practices
Across these hooks, several best practices and common functionalities are evident:
- **State Management**: Utilizing `useState` for local state management of form inputs, selections, and loading indicators.
- **Data Fetching and Submission**: Employing Axios for asynchronous data interactions with APIs.
- **Navigation**: Leveraging `useNavigate` from React Router for controlling page navigation based on user actions or API responses.
- **Global State Interaction**: Accessing and updating global state through context (`useCopsContext`).
- **User Feedback**: Providing immediate feedback to users via toast notifications for actions such as successful submissions or errors.

These hooks illustrate a structured approach to handling specific aspects of application functionality, emphasizing reusability, separation of concerns, and integration with external APIs and application-wide state management.

# useSelectCity Hook Documentation

The `useSelectCity` hook is designed to manage the selection of cities in a React application, specifically within a context where cops are assigned to different cities. This documentation provides an overview of its functionalities, how it manages state and side effects, and its integration with other parts of the application.

## Overview

`useSelectCity` serves as a pivotal hook for fetching, displaying, and selecting cities from an external source. It leverages React's `useState`, `useEffect`, and `useMemo` hooks for state management and side effect handling, and integrates with Axios for data fetching and React Router for navigation.

## Functionality

### State Management

- **cities**: Holds the list of city objects fetched from an API.
- **selectedCities**: Manages the selection state of cities associated with specific cops.
- **loading**: Indicates the loading state of the city data fetching process.

### Data Fetching

Upon initialization, the hook triggers an asynchronous function to fetch city data from a predefined API endpoint (`GET_CITY_LIST`). It utilizes Axios for making the HTTP GET request and updates the `cities` state with the fetched data, handling loading state and errors appropriately.

### City Selection

Provides a mechanism for updating the `selectedCities` state based on user interactions. This state is used to track the cities selected for each cop.

### Navigation and Context Integration

- After selecting cities, the `handleCitySelection` function updates the global state (`CopsContext`) with the selected cities and navigates to the next route (`/Vehicle-selection`), facilitating a multi-step selection process.
- Uses the `useCopsContext` to access and update the cops' details context.

### Optimization

- Utilizes `useMemo` to derive `selectedCityNames` from the `selectedCities` state, ensuring this computation is memoized and only re-evaluated when `selectedCities` or `cities` changes.

## Integration

- **React Router's `useNavigate`**: Used for navigating to the vehicle selection step upon successful city selection.
- **Axios**: For fetching city data from the API.
- **React Hot Toast**: For displaying error messages in case of an exception during the city selection process.
- **CopsContext**: Integrates with a global context to manage the state of selected cities across the application.

## Usage

`useSelectCity` is intended to be used within components that require city selection functionality, streamlining the process of fetching, displaying, and selecting cities, and handling the subsequent navigation and global state updates.

## Conclusion

The `useSelectCity` hook exemplifies a structured approach to handling asynchronous data fetching, state management, and application-wide state updates in React applications. It showcases how custom hooks can encapsulate and simplify complex functionalities, making them reusable across different components.


## Build
npm i && npm run build



## Server Side

# Server-Side Logic Documentation

This documentation provides an overview of the server-side components of a game application, detailing the Express routes, Mongoose schema definitions, error handling mechanisms, and controller functions.

## Routes Configuration (`gameRouter`)

The application defines several routes for creating cities and vehicles, fetching lists of cities and vehicles, and checking whether a criminal has been caught. These routes are defined using the `Router` function from Express and are associated with specific controller functions imported from `../controller/game.controller`.

- **POST `/createCity`**: For creating a new city entry.
- **POST `/createVehicle`**: For creating a new vehicle entry.
- **GET `/fetchCities`**: To fetch a list of all cities.
- **GET `/fetchVehicles`**: To fetch a list of all vehicles.
- **POST `/checkWhetherCrimalCaught`**: To determine if the criminal has been caught based on selections.

## Mongoose Schema Definitions

### City Schema

Defines the schema for city documents, including fields for thumbnail, name, title, description, distance, and unit. Ensures uniqueness for name, title, and description to prevent duplicate entries.

### Vehicle Schema

Similar to the City schema, it defines the structure for vehicle documents, including fields for thumbnail, name, range, unit, and available count.

## Error Handling

### `handleAllError` Middleware

A generic error handling middleware that captures and processes both application-specific errors and unexpected errors, formatting them into a consistent JSON response structure.

## Controller Functions

### `fetchCities` and `fetchVehicles`

Asynchronously fetch lists of cities and vehicles from the database, returning them in the response.

### `checkWhetherCrimalCaught`

Determines whether a criminal has been caught based on the selections made (cities and vehicles), leveraging utility functions for random selection and logic determination.

### `createCity` and `createVehicle`

Handle the creation of new city and vehicle entries, validating request bodies for required fields and inserting new documents into the respective collections.

## Utility Functions and Error Handling Classes

Includes custom utility functions like `determineFugitivesLocation` and `checkCapture` for game logic, and `ErrorHandler` class for standardized error handling across the application.

## Conclusion

This server-side setup provides a robust foundation for the game application, facilitating data management, application logic, and error handling. It illustrates an organized approach to structuring a Node.js application using Express for routing, Mongoose for ORM, and structured error handling for resilience and maintainability.
# Utility Functions Overview

This document provides an in-depth analysis of three key utility functions used in the game's backend logic for determining the outcome of a cop's chase after a fugitive. These functions include `checkCapture`, `getCityDistance`, and `determineFugitivesLocation`.

## checkCapture

### Purpose

Determines the success of the chase by analyzing each cop's selection against the fugitive's actual location and the operational range of the selected vehicle.

### Functionality

- **Vehicle Range Mapping**: Initializes an object (`VehicleAndRangeObj`) mapping each vehicle's name to its operational range.
- **Selection Evaluation**: Iterates through each cop's selection, comprising the cop's name, the city selected for the chase, and the vehicle chosen.
- **Distance Calculation**: Calculates the round-trip distance to the selected city using the `getCityDistance` function and compares it against the vehicle's range.
- **Success Condition**: Checks if the selected city matches the fugitive's location and whether the vehicle has enough range for a round trip. If so, it returns a success message along with details of the cop, city, and vehicle.
- **Failure Condition**: If no selection meets the success criteria, it returns a failure message.

## getCityDistance

### Purpose

Fetches the distance to a selected city from a list of all cities.

### Functionality

- **Distance Mapping**: Creates an object (`cityAndDistanceObj`) mapping each city's name to its distance.
- **Distance Retrieval**: Looks up the distance to the selected city from the mapping and returns it. If the city is not found, it defaults to `0`.

## determineFugitivesLocation

### Purpose

Randomly selects the fugitive's location from a list of cities.

### Functionality

- **Random Selection**: Generates a random index based on the length of the city list and uses it to pick a random city as the fugitive's location.

## Integration and Flow

These functions work together to form the core logic of the game's chase mechanic. Upon initiating a chase, `determineFugitivesLocation` randomly sets the fugitive's location. `checkCapture` then assesses each cop's ability to capture the fugitive based on their selections and the fugitive's location, utilizing `getCityDistance` to determine the necessary travel distances.

This logic ensures a dynamic and unpredictable game outcome, emphasizing strategic selection of vehicles and cities by the players.

