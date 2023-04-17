var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/MadlyJado/MyPortfolioWebsite.git',
        user: {
            name: 'MadlyJado',
            email: 'jadonchenard@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log("Deploy Complete!")
    }
)