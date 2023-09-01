var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/MadlyJado/MyPortfolioWebsite.git', // Update to point to your repository  
        user: {
            name: 'MadlyJado', // update to use your name
            email: 'jadonchenard@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)