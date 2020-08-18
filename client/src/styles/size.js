export default {
    // from small and up
    up(size) {
        const sizes = {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1400px',
        }

        return `@media (min-width: ${sizes[size]}) `

    },
    // small and below
    down(size) {
        // Takes in size and returns string with the size combined
        const sizes = {
            sm: '575.98px',
            md: '767.98px',
            xl: '991.98px',
            xxl: '1199.98px',
            xl: '1600px',
        }
        return `@media (max-width: ${sizes[size]}) `
    }
}

// //MIN WIDTH
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

// // //MAX WIDTH 
// // Extra small devices (portrait phones, less than 576px)
// @media (max-width: 575.98px) { ... }

// // Small devices (landscape phones, less than 768px)
// @media (max-width: 767.98px) { ... }

// // Medium devices (tablets, less than 992px)
// @media (max-width: 991.98px) { ... }

// // Large devices (desktops, less than 1200px)
// @media (max-width: 1199.98px) { ... }


// https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints