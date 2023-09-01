import { c as create_ssr_component, d as add_attribute, e as escape } from './index-41dea004.js';
import { b as base } from './paths-05fee424.js';

const logo = "/_app/immutable/assets/myface.c59350aa.jpg";
const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADGUlEQVQ4TzWS3WscZRTGf+98726yxm7IRzFpU02i2AQDoVilFEpBi4K1oFRQBC/0wksvvPQ/8A/wWsQr0eKFRqleqKWKxVhaDAYbV2O7bTdrdzY7+zEzr89sceAM8555z/M85znH/HO7ZbMsw3Uc0ixXpASBjzGGPM8ZpEOs8gZ0x8VxlLeWofJGNaa+e8sGQaDfYPVjdFPFOuC6Lr4XkOk76SUCzwh9n+FgQCbwNM0wW/Vd66igYPZUECg8z5OKgF6vR56JTZdzez884TtiLris8uZG/W9bJP5/hoUIASZJwmDQJ4wiIkVRIAS9Uok0FKRWZ7N9Y8cWih33PkiuaNR3uHjhM7pSMFarce6lVyhVy4ULmDwdgckWhQB+vLolBUIoQApTnJSNjz/koBfiBxH1uw2W1p/iyOoaakasKhRAntqRIPPuB5+MWihAfM/FFVBv6wpTvTaVsbKMGtCs1rCzj6o8H7Hmos8KgELBuXfeswWsqxaMO1LJSmRZdj35kOKXQ77e3WLPPYDvB3KguK5RZjKxGO/zb72tTEpUzpQccG+vwaCb8OrRY1RMQMe3vP/F50zO1qhWJnHLFenXFHJPCjTGZ19/zvaH9zQ2AQw94taQf3td3jhxCr/TY+qhKf5ILH/u3ZKBduSJtaFML2zTwq2dWbf9JCcMEYi2se9wev04Tx86TLsdY6MyXX9MBSFByWM/67Lx7Qbt7j5ZFmMWj6/awHfw/IyF+UXOnjqrZdIStVvagyFdOR3Kj3iQ0rpzR41DZbLC5c1viOObmEeOHbXV8Yi5mSleeOY8pbBML27TiGOauzcJHphkenxMzPt02wlxp0UUVumScPnap5i5lUXruzknnjzJytIaqdYz0Dj/ajT56tcG0fg0C+FdCv+XF+fZazXVagnr9vlh8wLmyOqSNnHAyy++RqcZMy42rzzBR19eYb/2OKW8z4Kps3xoholqwOYvl3h47rB2BC5e/w5z/s0z1mocTzx2mqs/X2f24Ayb17bY7hyQL1AtaSceLDE/PyFlATv1S5ycXuan1u98v/0b/wFCfn20QovDrAAAAABJRU5ErkJggg==";
const Portfoliopage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { homeActive = "" } = $$props;
  let { worksActive = "" } = $$props;
  let { githubActive = "" } = $$props;
  if ($$props.homeActive === void 0 && $$bindings.homeActive && homeActive !== void 0)
    $$bindings.homeActive(homeActive);
  if ($$props.worksActive === void 0 && $$bindings.worksActive && worksActive !== void 0)
    $$bindings.worksActive(worksActive);
  if ($$props.githubActive === void 0 && $$bindings.githubActive && githubActive !== void 0)
    $$bindings.githubActive(githubActive);
  return `<head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width, intial-scale=1">
    <title>Jadon Chenard - Coding Portfolio</title>
    <link rel="icon"${add_attribute("href", icon, 0)}>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"><\/script></head>

<body class="bg-ebb"><nav class="navbar navbar-expand bg-copper"><div class="container-fluid"><a class="navbar-brand" href="/"><img class="roundedcorners" alt="My face!"${add_attribute("src", logo, 0)} width="30" height="50"></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item"><a class="${"nav-link " + escape(homeActive, true) + " textcolor-copper"}" href="/">Home</a></li>
                    <li class="nav-item"><a class="${"nav-link " + escape(worksActive, true) + " textcolor-copper"}" href="${escape(base, true) + "/works"}">Works</a></li>
                    <li class="nav-item"><a class="${"nav-link " + escape(githubActive, true) + " textcolor-copper"}" href="https://github.com/MadlyJado?tab=repositories">GitHub</a></li></ul></div></div></nav></body>`;
});

export { Portfoliopage as P };
//# sourceMappingURL=portfoliopage-2ea05124.js.map