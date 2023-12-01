Warning: Some features are not optimised for edevices with extremely small widths or heights.

# Idol Tav Website

Idol page of a character named Idol Tav. It was done to prove a point that anyone can become an idol and have an idol website despite not actually being real.
 
## Design Process
 
This website is for fans or potential investors in the idol Tav, in which they would wish to learn more about her, book events, or find social media sites. They could also want to buy official merchandise.

Using some references from others, what thye would want from the site would be:
- As a fan, I want to be able to purchase things related to her, so that I can support her more.
- As a manager, I want the site to teach others about her, so I can attract more sponsors and investors.
- As a fan, I want a official and simplistic way to get tickets to events.

The About Page would be replaced with the concept design process, as I cannot come up with actual content for that.
# "about.html"
The wireframe was constructed by hand without the sue of 3rd party softwares, as drawing it by hand would allow for better flexibility.
# "wireframe.html"

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
Main Pages: 
Home (Index): Home page of the site.
- Some Welcome Text <!--Done -->
- A carousel showing some stuff <!-- Done -->
- a notice image for flavour <!-- Done -->
- Sponsor List at the bottom <!-- Done -->
--------------------------------------------
Ticketing: Main service of the site.
- Slider that shows all upcoming events <!-- Done -->
- Form page that takes:
    + Credit card details <!-- Done -->
    + Event select (Dropdown select) <!-- Done -->
    + Submit button <!-- Done --> <!-- Popup that says ticket details will be emailed (it won't) --> 
--------------------------------------------
About: About page.
- Some general info
    + Fake lore
    + Design inspirations
    + Story process
--------------------------------------------
Contacts: Contacts like social media
- Social media links
    + 4 side by side boxes (PC) linking to respective social media
    + Icon, Media name, Flavour text, wordlink (number, email, etc)

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

HTML, CSS, Javascript. Normalize.css.

- This site did not use any Online Templates. This includes:
    - Bootstrap
    - jQuery
    - Google API
- The only online material imported and used was "normalise.css".


## Testing

For testing:

1. Home Page:
    1. Load into the page.
    2. Resize the window to very small portions
    3. Try to navigate the navbar to "Ticketing"
    <!-- Not much features here apart from a carousel. -->

The layouts work for PC and mobile mostly, however some features are not optimised for extreme resizing (<~200px> width).

Known Bugs:
- Button overlapping after major resizing to extremely small window height
- Some niche bugs:
    - Navbar being out of place when:
    1. Resize the window of either "Ticketing" or "Events"
    2. Enter Developer mode
    3. Refresh the page
    4. While page is loading, manually resize (shrink) the window.
    5. The moment it finishes loading, there is abnout a 0.3s span of time to manually enlarge the window. (Not fullscreen)
    6. If done right the navbar will be shifted towards the side it was manually enlarged.
    - Memory reading issue
    1. Using live reload some scripts will fail to fetch the promise after being inactive for an extended period of time.
Interactions to note:
- Payment does not take into format to check whether credit card detail inputs are accurate. This is due to a skill issue and the lack of regexing.
- On submit the popup alert does not check if the email field is inputted correctly, and only after the popup alerts end will the website show that it was inputted wrongly.


## Credits
- Me, obviously
- L30N (@nijustat)
- Kira (@kirathechallenger)
- Iaian (@1939293)
- Jahn (@jaahn)
- Some online video help:
    - Hyperplexed YT: https://www.youtube.com/@Hyperplexed
    - Normalize.css: https://necolas.github.io/normalize.css/
    - Payment form: https://www.youtube.com/watch?v=G7_VTWnWz40
    - Carousel: W3Schools https://www.w3schools.com/
- Some item references from:
    - Kurone Mishima
    - Fate/Extra
    - The Natural History Museum of Helsinki
    - The Simpsons
    - Guardian Tales
### Content
- The text are all fictional and should not be taken seriously. This is basically the equivalent of a joke website.

### Media
- Backgrounds thanks to @kirathechallenegr on discord for making it together with me on blender (A lot of time, so many thanks)
    - "TavAltarBg.jpg" (ORIGINAL)
    - "TavernBgRender.png" (ORIGINAL)
- Gifs thanks to @nijustat on discord for making it together with me on Aseprite
    - "boing_boing.gif" (ORIGINAL)
    - "sacabamtavpis" (Reference to the sacabambaspis model by The Natural History Museum of Helsinki, Finland)
- Edits on photoshop with the help of @1939293 (Iaian) and @jaahn on discord
    - "DotForHer.png" (With reference from the "Do It For Her" meme template from The Simpsons)
    - "Tavoru.png" (With reference from Padoru coming from the Japanese Playstation RPG Fate/Extra)
    - "A4Tav.png" (With reference from Idol Eva from Guardian Tales)
    - "Tavha.png" (With reference from Eunha from Guardian Tales Superstar skin)
- Original Images
    - "AntPremiumLowQ.png"
    - "OnlyPans.png"
    - "Raid_End_Jahn.png" (Thanks Iaian and Jahn)
    - "tavSimpsClub.png" (Thanks Iaian and Jahn)
    - "tavernPoster.png" (Thanks Iaian and Kira <3>)
    - "beegTav.png" (Thanks Iaian)
    - "bronion.png" (Thanks Iaian)
    - "IaianIndustries.png" (Thanks Iaian)
    - "Tavern_2nd_Anniversary_Canvas_v3.png" (Thanks Everyone who helped)
    - "Raid_End_Jahn.png" (Thanks Jahn, Iaian)
    - "tavernLogo.png" (Thanks EmonPH)
- Online icons
    - Flaticon
        - "chip.png"
        - "discord.png"
        - "gmail.png"
        - "telegram.png"
        - "whatsapp.png"
- Images
    - Designs
        - "Design1.jpg" (From a poster illustrated by Kurone Mishima)
        - "Design3.jpg" (From another poster illustrated by kure~pu on Danbooru)
        - "CurrentDesign.jpg" ()
### Acknowledgements

- I received inspiration for this project from an online guild in a game, where they called a person the Idol Tav
- Special thanks to @kirathechallenger, @nijustat, @1939293 (Iaian), @jaahn, and of course @tav8 the person herself
- Other thanks to EmonPH https://www.youtube.com/@EmonPH for that great logo
