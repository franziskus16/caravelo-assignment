# Caravelo Front-end assignment

You are required to implement the scenarios included in this readme in this multi-tenant application.

## How the Application Works

In order to understand how this project works and give more context, please read the following information.

### Architecture Overview

This application implements a multi-tenant architecture where a single codebase can serve multiple tenants (clients) with different levels of customization. The application is structured into two main parts:

1. **Core (Default) Implementation**

   - Located in the `/src/core` directory
   - Contains all default modules, components, views, services, store, and styles
   - Represents the base application that runs when no specific tenant is specified

2. **Tenant-Specific Customizations**
   - Located in `/src/tenants/<tenant-id>` directories
   - Can override or extend any part of the core implementation
   - Only includes the files that differ from the core implementation

### Dynamic Loading System

The application uses a dynamic loading system that determines which components, views, and styles to load based on the current tenant:

1. **Component/View Loading (`loaderHelper.ts`)**

   - When a component or view is requested, the system first checks if a tenant-specific version exists
   - If found, the tenant version is loaded
   - If not found, it falls back to the core implementation
   - This is handled transparently through Vue's dynamic component system
   - You can have a look to `Subscription.view.vue` to understand how components/view should be loaded

2. **Theme Loading (`themeLoader.ts`)**
   - Similar to components, themes can be customized per tenant
   - The system attempts to load tenant-specific styles first
   - Falls back to default theme if no tenant-specific theme is found

### Running the Application

- **Default Mode**: `npm run dev`

  - Runs the application with core implementation
  - No tenant-specific overrides are applied

- **Tenant Mode**: `npm run dev:<tenant-id>`
  - Runs the application for a specific tenant (e.g., `npm run dev:va` for Veloair)
  - Automatically loads tenant-specific overrides
  - Falls back to core implementation for non-overridden parts

### Customization Levels

Tenants can customize the application at various levels:

1. **Theme Only**

   - Simplest customization
   - Only requires overriding theme variables

2. **Component Override**

   - Override specific component layouts while keeping core business logic

3. **View Override**

   - Customize entire page layouts
   - Can include tenant-specific components

4. **Full Feature Extension**
   - Add completely new features specific to a tenant
   - Extends core modules and adds new services/stores

## Scenarios

Please, implement the following scenarios for each tenant. Have a look to the existing example in `va`.

When creating a new tenant, make sure you follow the same directory structure that is used in `core`.

The scripts to run these tenants are already created for your convinience (you can have a look to the `package.json` and `config/tenants.js`).

Open the [figma file](https://www.figma.com/design/SQ5YdH1u7qEDzBNAt38hNN/Tech-Assignment?node-id=2207-111&p=f&t=TKQNoPWykDZGqLen-0) to follow the designs.

### VA - Veloair (this scenario is already created to be used as example)

#### Scenario

The tenant wants the application to be the same as our base application but with a different theme

#### Requirements

- Add theme values

### FM - Flymere

#### Scenario

The tenant asks for a component with a different layout but it has the same behavoiur of our base component (UserCard)

#### Requirements

- Create a custom component UserCard that overrides the default one, it must reuse the common business logic (UserModule)
- Add custom styles for the custom UserCard component
- Adds theme values

### AT - Aertis

#### Scenario

The tenant asks for a layout different than our base application and wants a component that we don't have on our base application (Hero)

#### Requirements

- Create a custom component Hero
- Create the custom view that reorders the elements and adds the custom component to the view
- Add custom styles on top of the defaults for UserCard and SubscriptionCard
- Add theme values

### SV - Skyver

#### Scenario

The tenant asks for a feature we don't have, you will need to develop it only for this tenant extending our current base application. The feature requested is to display milleage and points in the user card.
This information will be provided by them.

#### Requirements

- Create a custom component UserCard that overrides the default one, a new custom module for this tenant will be needed.
- Create a custom UserModule that extends from the base UserModule (using dependency injection to avoid coupling)
- Create a custom Service (Milleage) to retrieve the information
- Create a custom store to handle the milleage information
- Add the theme values
