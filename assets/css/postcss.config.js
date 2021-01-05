const themeDir = __dirname + "/../../";

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        themeDir + 'layouts/**/*.html',
        themeDir + 'content/**/*.html',
        'layouts/**/*.html',
        'content/**/*.html',
        'exampleSite/layouts/**/*.html',
        'exampleSite/content/**/*.html',
    ],
    defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
        return broadMatches.concat(innerMatches)
    }
})

module.exports = {    
    plugins: [        
        require('postcss-import')({path: [themeDir]}),
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({path: [themeDir]}),
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
    ]
}