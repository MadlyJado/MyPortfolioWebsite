<script>
    import PortfolioPageComponent from "../../components/portfoliopage.svelte";

    import moonshaunted1 from "$lib/assets/moonshaunted1.png";

    import moonshaunted2 from "$lib/assets/moonshaunted2.png";

    import moonshaunted3 from "$lib/assets/moonshaunted3.png";

    import moonshaunted4 from "$lib/assets/moonshaunted4.png";
</script>

<PortfolioPageComponent worksActive="active"/>
<h1 class="textcolor-lunargreen text-center">My Works</h1>
<p class="text-center">My greatest achievement is a game jam I did back in the summer of 2021.</p>
<ul class="text-center">
    <li>We made it in 2 weeks!</li>
    <li>I was in charge of the level design and some of the coding</li>
    <li>We used our other programmer's global variable system to keep track of the user's info through levels</li>
    <li><img src={moonshaunted1} alt=""></li>
    <li><img src={moonshaunted2} alt=""></li>
    <li><img src={moonshaunted3} alt=""></li>
    <li><img src={moonshaunted4} alt=""></li>
    <li>It basically became a rogue-like rpg</li>
    <li>In two weeks, we created most of the enemies, the GUI, and even a final boss!</li>
    <li><a href="https://ferventprayers.itch.io/moons-haunted">Click Here to play the game jam game!</a></li>
</ul>
