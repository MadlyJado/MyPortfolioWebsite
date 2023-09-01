import { c as create_ssr_component, v as validate_component, d as add_attribute } from './index-41dea004.js';
import { P as Portfoliopage } from './portfoliopage-2ea05124.js';
import './paths-05fee424.js';

const moonshaunted1 = "/_app/immutable/assets/moonshaunted1.b2dd932a.png";
const moonshaunted2 = "/_app/immutable/assets/moonshaunted2.2f57a14a.png";
const moonshaunted3 = "/_app/immutable/assets/moonshaunted3.2cdf7160.png";
const moonshaunted4 = "/_app/immutable/assets/moonshaunted4.2f40208b.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Portfoliopage, "PortfolioPageComponent").$$render($$result, { worksActive: "active" }, {}, {})}
<h1 class="textcolor-lunargreen text-center">My Works</h1>
<p class="text-center">My greatest achievement is a game jam I did back in the summer of 2021.</p>
<ul class="text-center"><li>We made it in 2 weeks!</li>
    <li>I was in charge of the level design and some of the coding</li>
    <li>We used our other programmer&#39;s global variable system to keep track of the user&#39;s info through levels</li>
    <li><img${add_attribute("src", moonshaunted1, 0)} alt=""></li>
    <li><img${add_attribute("src", moonshaunted2, 0)} alt=""></li>
    <li><img${add_attribute("src", moonshaunted3, 0)} alt=""></li>
    <li><img${add_attribute("src", moonshaunted4, 0)} alt=""></li>
    <li>It basically became a rogue-like rpg</li>
    <li>In two weeks, we created most of the enemies, the GUI, and even a final boss!</li>
    <li><a href="https://ferventprayers.itch.io/moons-haunted">Click Here to play the game jam game!</a></li></ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2e6609e0.js.map
