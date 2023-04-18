import { publish } from "gh-pages";

publish(
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
);