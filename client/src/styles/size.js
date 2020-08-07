


export default {
    // from small and up
    up() {
        const sizes = {
            xs: '576px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1400px',
        }
        return `@media (min-width: ${sizes[size]}) `
    },
    // small and below
    down(size) {
        // Takes in size and returns string with the size combined
        const sizes = {
            xs: '575.98px',
            sm: '767.98px',
            md: '991.98px',
            lg: '1199.98px',
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