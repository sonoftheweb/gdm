<!-- # Write a readme about this project. -->

# Sanity VUE Project

This is meant to be a simple sanity project to test out the sanity studio and the sanity client.

## Getting Started

- Clone the repo
- Rename the `sanity.json.example` to `sanity.json` and add your project id
- Run `npm install`
- Run `npm run dev`
- Open `http://localhost:3000` in your browser

## Steps I took to complete this project

- Relied heavily on the sanity module and the sanity documentation. Made sure to query data from the sanity client and display it on the page based on what was needed for that page.
- SCSS was used for styling. I used the BEM naming convention for the (some) class names.
- Leaned in heavily on Tailwind CSS for the styling of the components.
- Used the `@nuxtjs/tailwindcss` module to integrate Tailwind CSS into the project.
- One of the things I'd love to achieve is the server side sorting and pagination. I was able to get the sorting to work on the client side, but I'd love to get it to work on the server side as well.
- Since Using SSR, I noticed that programatical routing was not working. I had to use the `<nuxt-link>` component to get the routing to work.

