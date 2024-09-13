# UI Extensions Industry Code Samples

Unlock the power of tailored digital experiences with our repository of industry-specific custom card samples created using HubSpot's UI Extensions. Discover solutions to enhance the education, finance, manufacturing, professional services, and healthcare sectors.

## Overview

[HubSpot's UI Extensions](https://developers.hubspot.com/docs/platform/ui-extensions-overview) uniquely enhance the HubSpot Customer Platform by integrating custom functionalities that quickly access crucial information and actions. This enables custom app cards to provide a highly personalized experience tailored to your business needs. UI Extensions are versatile React apps that can be embedded directly into the HubSpot CRM records page.

Within this repo, you will find a collection of static card samples representing various industries designed to get you started and spark your creativity, including:

* [**Education**](https://github.com/hubspotdev/uie-industry-card-samples/tree/main/education): Enhance administrative efficiency by tracking student recruitment progress, managing communication, and providing insights into course enrollment and student performance.
* [**Manufacturing**](https://github.com/hubspotdev/uie-industry-card-samples/tree/main/manufacturing): Streamline operations by managing furniture returns, reviewing product details and images, and tracking manufacturing order production status with progress indicators and detailed steps.
* [**Professional Services**](https://github.com/hubspotdev/uie-industry-card-samples/tree/main/professional_services): Track client interactions, manage service delivery schedules, and monitor project timelines by providing project snapshots, displaying project status and milestones, and logging billed hours with progress indicators.
* [**Healthcare**](https://github.com/hubspotdev/uie-industry-card-samples/tree/main/healthcare): Improve patient management with tools such as a patient referral form to streamline patient referrals.


## Installing the App Cards

Each directory contains a [private app](https://developers.hubspot.com/docs/api/private-apps), card template written in [React](https://react.dev/).

### Requirements

A few things must be set up before using these template cards.

* You must have an active HubSpot account with a Sales or Service Hub Enterprise subscription.
* You must have access to developer projects (developer projects are currently [in public beta under "CRM Development Tools"](https://app.hubspot.com/l/whats-new/betas)). View the [CRM Development Tools Guide](https://developers.hubspot.com/docs/platform/crm-development-tools-overview#get-started) to learn more about how to join the beta.
* You must install install [Node.js](https://nodejs.org/en/download/package-manager).
* You must have the [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cli) installed and set up.
* You must have access to [developer projects](https://developers.hubspot.com/docs/platform/developer-projects-setup).

### Usage

The HubSpot CLI enables you to run this project locally so that you may test and iterate quickly. Getting started is simple. Start by navigating to any of the project directories and following these steps:

1. Install required project dependencies

```
npm install
```

2. Initialize the project to generate the `hubspot.config.yml` which contains the portal information needed to run the project. Follow the prompts to select your desired portal and generate a personal access key.

```
hs project init
```

3. Start the server for local development

```
hs project dev
```

### Note

When making changes to configuration files (`{CARD_NAME}-card.json` and `app.json`), be sure to stop the development server and use `hs project upload` to update the project before restarting the development server.

### View the App Cards

These cards are configured to be viewed on Contact records. To view these cards for development, view any contact record and select `Customize record`. Select the view you would like to update from the table and choose `Add cards`.

<img width="665" alt="CRM record customization page" src="https://github.com/user-attachments/assets/22452203-f63a-45c4-84a7-17d240109258">

## Learn More About UI Extensions

To learn more about building apps cards, visit the [HubSpot UI Extensions landing page](https://developers.hubspot.com/build-app-cards) or the [HubSpot Developer UI Extensions documentation](https://developers.hubspot.com/beta-docs/guides/crm/ui-extensions/overview).









