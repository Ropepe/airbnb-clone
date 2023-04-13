# Airbnb Clone with Next.js 13, Next-Auth, Prisma with MongoDB and Tailwind CSS

Hi, my name is Perica Vrhovac, and this is my Airbnb clone project, built with Next.js, Next-Auth, Prisma with MongoDB, and Tailwind CSS.

The purpose of this project is to showcase my skills as a frontend developer using Next.js and React.js, as well as my proficiency in using Next-Auth for authentication, Prisma with MongoDB for database management, and Tailwind CSS for styling.

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can see the live demo of this project at [https://airbnb-clone-perica-vrhovac.vercel.app/](https://airbnb-clone-perica-vrhovac.vercel.app/)

## Technologies Used

- Next.js 13 - React framework for server-side rendering and static site generation
- Next-Auth - Authentication library for Next.js
- Prisma with MongoDB - ORM for database management
- Tailwind CSS - Utility-first CSS framework

## Features

- User authentication with Next-Auth
- Display of available properties with details and images
- Filtering of properties based on location, price range, number of guests, and other criteria
- Search functionality to find properties by keyword
- Integration with Google Maps API to display the location of properties
- Booking functionality with date range selection and total price calculation
- Dashboard for managing properties and bookings (currently only accessible by administrators)

## Getting Started

To run this project locally, you need to have Node.js and npm installed on your machine. 

### 1. Clone the repository

Clone the repository to your local machine using:

git clone https://github.com/pericavrhovac/airbnb-clone.git


### 2. Install dependencies

Navigate to the project directory and install the dependencies using:

cd airbnb-clone
npm install


### 3. Set up environment variables

Create a `.env.local` file in the project root directory and add the following environment variables:

DATABASE_URL=your_mongodb_url
NEXTAUTH_SECRET="NEXTAUTH_SECRET"


### 4. Run the development server

Start the development server using:

npm run dev


Open [http://localhost:3000](http://localhost:3000) in your browser to see the project running.

## Contributing

If you find any issues or have any suggestions for improvement, please feel free to submit a pull request or open an issue. 

## License

This project is licensed under the MIT License.
