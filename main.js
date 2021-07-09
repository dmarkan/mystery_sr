let inventory = document.querySelector('.inventory');
let background = document.querySelector('.background');
let bed = document.querySelector('.bed');
let bedroom_door = document.querySelector('.bedroom_door');
let bedroom_door_open = document.querySelector('.bedroom_door_open');
let closet = document.querySelector('.closet');
let closet_open = document.querySelector('.closet_open');
let jacket = document.querySelector('.jacket');
let key = document.querySelector('.key');
let key_inv = document.querySelector('.key_inv');
let chest = document.querySelector('.chest');
let chest_open = document.querySelector('.chest_open');
let crowbar = document.querySelector('.crowbar');
let crowbar_inv = document.querySelector('.crowbar_inv');
let picture = document.querySelector('.picture');
let chains = document.querySelector('.chains');
let door_left = document.querySelector('.door_left');
let door_right = document.querySelector('.door_right');
let window_left = document.querySelector('.window_left');
let window_right = document.querySelector('.window_right');
let hall_left = document.querySelector('.hall_left');
let hall_right = document.querySelector('.hall_right');
let backyard_door = document.querySelector('.backyard_door');
let backyard_door_open = document.querySelector('.backyard_door_open');
let back_to_hall_right = document.querySelector('.back_to_hall_right');
let garage = document.querySelector('.garage');
let garage_open = document.querySelector('.garage_open');
let trash = document.querySelector('.trash');
let bulb = document.querySelector('.bulb');
let bulb_inv = document.querySelector('.bulb_inv');
let back_to_hallway = document.querySelector('.back_to_hallway');
let car = document.querySelector('.car');
let car_open = document.querySelector('.car_open');
let battery = document.querySelector('.battery');
let battery_inv = document.querySelector('.battery_inv');
let tire1 = document.querySelector('.tire1');
let tire2 = document.querySelector('.tire2');
let tire3 = document.querySelector('.tire3');
let cables = document.querySelector('.cables');
let cables_inv = document.querySelector('.cables_inv');
let back_to_yard = document.querySelector('.back_to_yard');
let fridge = document.querySelector('.fridge');
let fridge_open = document.querySelector('.fridge_open');
let kitchen = document.querySelector('.kitchen');
let knife = document.querySelector('.knife');
let knife_inv = document.querySelector('.knife_inv');
let drawer_left = document.querySelector('.drawer_left');
let drawer_right = document.querySelector('.drawer_right');
let oven = document.querySelector('.oven');
let kettle = document.querySelector('.kettle');
let dark = document.querySelector('.dark');
let back_to_hall_from_kitchen = document.querySelector('.back_to_hall_from_kitchen');
let stairs = document.querySelector('.stairs');
let washer = document.querySelector('.washer');
let hook = document.querySelector('.hook');
let rope = document.querySelector('.rope');
let hook_inv = document.querySelector('.hook_inv');
let hole = document.querySelector('.hole');
let rope_inv = document.querySelector('.rope_inv');
let spider = document.querySelector('.spider');
let back_to_basement = document.querySelector('.back_to_basement');
let mask = document.querySelector('.mask');
let mask_inv = document.querySelector('.mask_inv');
let back_to_cave_enterance = document.querySelector('.back_to_cave_enterance');
let water = document.querySelector('.water');
let cave_exit = document.querySelector('.cave_exit');
let to_cave_deeper = document.querySelector('.to_cave_deeper');
let harpoon = document.querySelector('.harpoon');
let harpoon_inv = document.querySelector('.harpoon_inv');
let plants = document.querySelector('.plants');
let back_to_surface = document.querySelector('.back_to_surface');
let back_to_underwater = document.querySelector('.back_to_underwater');
let underwater_cave = document.querySelector('.underwater_cave');
let shark = document.querySelector('.shark');
let paddle = document.querySelector('.paddle');
let paddle_inv = document.querySelector('.paddle_inv');
let rocks = document.querySelector('.rocks');
let back_to_cave_deeper = document.querySelector('.back_to_cave_deeper');
let woods = document.querySelector('.woods');
let wolf = document.querySelector('.wolf');
let police = document.querySelector('.police');
let intro = document.querySelector('.intro');
let outro = document.querySelector('.outro');

intro.addEventListener('click', function () {
    intro.style.visibility = "hidden";
});
bed.addEventListener('click', function () {
    alert('Krevet izgleda udobno');
});
bedroom_door.addEventListener('click', function () {
    if (chains.style.visibility == "hidden") {
        bedroom_door.style.visibility = "hidden";
        bedroom_door_open.style.visibility = "visible";
    } else {
        alert("Lanac je na vratima, moram da nadjem način da ga uklonim");
    }
});
closet.addEventListener('click', function () {
    closet.style.visibility = "hidden";
    closet_open.style.visibility = "visible";
    jacket.style.visibility = "visible";
    key.style.visibility = "visible";
});
closet_open.addEventListener('click', function () {
    alert("Unutra je jakna");
});
jacket.addEventListener('click', function () {
    alert("Lepa, topla jakna");
});
key_inv.addEventListener('click', function () {
    alert("Mali ključić, pitam se šta otključava");
});
crowbar_inv.addEventListener('click', function () {
    alert("Veoma koristan alat, dobar za lomljenje stvari");
});
chest.addEventListener('click', function () {
    if (key == true) {
        chest.style.visibility = "hidden";
        key_inv.style.visibility = "hidden";
        chest_open.style.visibility = "visible";
        crowbar.style.visibility = "visible";
    } else {
        alert("Kovčeg je zaključan");
    }
});
chest_open.addEventListener('click', function () {
    alert("Pogledaj bolje šta ima unutra");
});
picture.addEventListener('click', function () {
    alert("Slika je preslatka");
});
chains.addEventListener('click', function () {
    if (crowbar == true) {
        chains.style.visibility = "hidden";
        crowbar_inv.style.visibility = "hidden";
        bedroom_door.style.cursor = "pointer";
    } else {
        alert("Lanac deluje veoma jako");
    }
});
key.addEventListener('click', function () {
    key.style.visibility = "hidden";
    key_inv.style.visibility = "visible";
    chest.style.cursor = "pointer";
    key = true;
});
crowbar.addEventListener('click', function () {
    crowbar.style.visibility = "hidden";
    crowbar_inv.style.visibility = "visible";
    chains.style.cursor = "pointer";
    crowbar = true;
});
bedroom_door_open.addEventListener('click', function () {
    background.src = "images/hallway.jpg";
    bed.style.visibility = "hidden";
    picture.style.visibility = "hidden";
    closet_open.style.visibility = "hidden";
    chest_open.style.visibility = "hidden";
    bedroom_door_open.style.visibility = "hidden";
    jacket.style.visibility = "hidden";
    door_left.style.visibility = "visible";
    door_right.style.visibility = "visible";
    window_left.style.visibility = "visible";
    window_right.style.visibility = "visible";
    hall_left.style.visibility = "visible";
    hall_right.style.visibility = "visible";
});
door_left.addEventListener('click', function () {
    background.src = "images/bedroom.jpg";
    bed.style.visibility = "visible";
    picture.style.visibility = "visible";
    closet_open.style.visibility = "visible";
    chest_open.style.visibility = "visible";
    bedroom_door_open.style.visibility = "visible";
    jacket.style.visibility = "visible";
    door_left.style.visibility = "hidden";
    door_right.style.visibility = "hidden";
    window_left.style.visibility = "hidden";
    window_right.style.visibility = "hidden";
    hall_left.style.visibility = "hidden";
    hall_right.style.visibility = "hidden";
});
window_left.addEventListener('click', function () {
    alert("Prozori su prljavi, ne vidi se ništa napolju");
});
window_right.addEventListener('click', function () {
    alert("Prozori su prljavi, ne vidi se ništa napolju");
});
hall_left.addEventListener('click', function () {
    background.src = "images/hall_background.jpg";
    door_left.style.visibility = "hidden";
    door_right.style.visibility = "hidden";
    window_left.style.visibility = "hidden";
    window_right.style.visibility = "hidden";
    hall_left.style.visibility = "hidden";
    hall_right.style.visibility = "hidden";
    backyard_door.style.visibility = "visible";
    back_to_hall_right.style.visibility = "visible";
});
backyard_door.addEventListener('click', function () {
    backyard_door.style.visibility = "hidden";
    backyard_door_open.style.visibility = "visible";
});
backyard_door_open.addEventListener('click', function () {
    background.src = "images/backyard.jpg";
    backyard_door_open.style.visibility = "hidden";
    back_to_hall_right.style.visibility = "hidden";
    back_to_hallway.style.visibility = "visible";
    trash.style.visibility = "visible";
    garage.style.visibility = "visible";
    bulb.style.visibility = "visible";
});
back_to_hall_right.addEventListener('click', function () {
    background.src = "images/hallway.jpg";
    back_to_hall_right.style.visibility = "hidden";
    door_left.style.visibility = "visible";
    door_right.style.visibility = "visible";
    window_left.style.visibility = "visible";
    window_right.style.visibility = "visible";
    hall_left.style.visibility = "visible";
    hall_right.style.visibility = "visible";
    backyard_door.style.visibility = "hidden";
    backyard_door_open.style.visibility = "hidden";
});
garage.addEventListener('click', function () {
    garage.style.visibility = "hidden";
    garage_open.style.visibility = "visible";
});
trash.addEventListener('click', function () {
    alert("Kanta za djubre, možda nešto ima u njoj");
});
bulb.addEventListener('click', function () {
    bulb.style.visibility = "hidden";
    bulb_inv.style.visibility = "visible";
    bulb = true;
});
bulb_inv.addEventListener('click', function () {
    alert("Sijalica, pitam se da li i dalje radi");
});
garage_open.addEventListener('click', function () {
    let bulb = document.querySelector('.bulb');
    let cables = document.querySelector('.cables');
    background.src = "images/garage_inside.jpg";
    garage_open.style.visibility = "hidden";
    trash.style.visibility = "hidden";
    car.style.visibility = "visible";
    tire1.style.visibility = "visible";
    tire2.style.visibility = "visible";
    tire3.style.visibility = "visible";
    back_to_yard.style.visibility = "visible";
    cables.style.visibility = "visible";
    if (bulb.style.visibility == "visible") {
        bulb.style.visibility = "hidden";
    }
    if (cables_inv.style.visibility == "visible") {
        cables.style.visibility = "hidden";
    }
    if (back_to_hallway.style.visibility == "visible") {
        back_to_hallway.style.visibility = "hidden";
    }
});
back_to_yard.addEventListener('click', function () {
    let bulb = document.querySelector('.bulb');
    let battery = document.querySelector('.battery');
    let cables = document.querySelector('.cables');
    background.src = "images/backyard.jpg";
    back_to_hallway.style.visibility = "visible";
    trash.style.visibility = "visible";
    garage_open.style.visibility = "visible";
    car.style.visibility = "hidden";
    car_open.style.visibility = "hidden";
    tire1.style.visibility = "hidden";
    tire2.style.visibility = "hidden";
    tire3.style.visibility = "hidden";
    if (bulb_inv.style.visibility == "visible") {
        bulb.style.visibility = "hidden";
    } else {
        bulb.style.visibility = "visible";
    }
    if (cables.style.visibility == "visible") {
        cables.style.visibility = "hidden";
    }
    if (battery.style.visibility == "visible") {
        battery.style.visibility = "hidden";
    }
    if (back_to_hallway.style.visibility == "hidden") {
        back_to_hallway.style.visibility == "visible";
    }
});
back_to_hallway.addEventListener('click', function () {
    let bulb = document.querySelector('.bulb');
    background.src = "images/hall_background.jpg";
    back_to_hallway.style.visibility = "hidden";
    back_to_yard.style.visibility = "hidden";
    backyard_door_open.style.visibility = "visible";
    back_to_hall_right.style.visibility = "visible";
    trash.style.visibility = "hidden";
    if (garage.style.visibility == "visible") {
        garage.style.visibility = "hidden";
    }
    if (garage_open.style.visibility == "visible") {
        garage_open.style.visibility = "hidden";
    }
    if (bulb.style.visibility == "visible") {
        bulb.style.visibility = "hidden";
    }
    if (back_to_hallway.style.visibility == "hidden") {
        back_to_hallway.style.visibility == "visible";
    }
});
car.addEventListener('click', function () {
    let battery = document.querySelector('.battery');
    car.style.visibility = "hidden";
    car_open.style.visibility = "visible";
    if (battery_inv.style.visibility == "visible") {
        battery.style.visibility = "hidden";
    } else {
        battery.style.visibility = "visible";
    }
});
battery.addEventListener('click', function () {
    battery.style.visibility = "hidden";
    battery_inv.style.visibility = "visible";
    battery = true;
});
battery_inv.addEventListener('click', function () {
    alert("Akumulator, pitam se da li je napunjen");
});
tire1.addEventListener('click', function () {
    alert("Gume, gume, gume");
});
tire2.addEventListener('click', function () {
    alert("Gume, gume, gume");
});
tire3.addEventListener('click', function () {
    alert("Gume, gume, gume");
});
cables.addEventListener('click', function () {
    cables.style.visibility = "hidden";
    cables_inv.style.visibility = "visible";
    cables = true;
});
cables_inv.addEventListener('click', function () {
    alert("Kablovi, mogu se iskoristiti da se povežu sa nečim");
});
door_right.addEventListener('click', function () {
    let knife = document.querySelector('.knife');
    background.src = "images/kitchen_background.jpg";
    door_left.style.visibility = "hidden";
    door_right.style.visibility = "hidden";
    window_left.style.visibility = "hidden";
    window_right.style.visibility = "hidden";
    hall_left.style.visibility = "hidden";
    hall_right.style.visibility = "hidden";
    kitchen.style.visibility = "visible";
    knife.style.visibility = "visible";
    kettle.style.visibility = "visible";
    oven.style.visibility = "visible";
    drawer_left.style.visibility = "visible";
    drawer_right.style.visibility = "visible";
    dark.style.visibility = "visible";
    back_to_hall_from_kitchen.style.visibility = "visible";
    if (battery == true && bulb == true && cables == true) {
        dark.style.visibility = "hidden";
        battery_inv.style.visibility = "hidden";
        bulb_inv.style.visibility = "hidden";
        cables_inv.style.visibility = "hidden";
    } else {
        dark.style.visibility = "visible";
    }
    if (fridge.style.visibility == "hidden") {
        fridge.style.visibility = "visible";
    } else {
        fridge.style.visibility = "visible";
    }
});
fridge.addEventListener('click', function () {
    fridge.style.visibility = "hidden";
    fridge_open.style.visibility = "visible";
});
fridge_open.addEventListener('click', function () {
    alert("Izgleda da je frižider prazan");
});
knife.addEventListener('click', function () {
    knife.style.visibility = "hidden";
    knife_inv.style.visibility = "visible";
    knife = true;
});
knife_inv.addEventListener('click', function () {
    alert("Veoma oštar nož");
});
drawer_left.addEventListener('click', function () {
    alert("Fioke su prazne");
});
drawer_right.addEventListener('click', function () {
    alert("Fioke su prazne");
});
oven.addEventListener('click', function () {
    alert("Nema ništa u rerni");
});
kettle.addEventListener('click', function () {
    alert("Ketler je hladan");
});
dark.addEventListener('click', function () {
    alert("Nema svetla, ne vidi se ništa");
});
back_to_hall_from_kitchen.addEventListener('click', function () {
    let knife = document.querySelector('.knife');
    background.src = "images/hallway.jpg";
    back_to_hall_from_kitchen.style.visibility = "hidden";
    door_left.style.visibility = "visible";
    door_right.style.visibility = "visible";
    window_left.style.visibility = "visible";
    window_right.style.visibility = "visible";
    hall_left.style.visibility = "visible";
    hall_right.style.visibility = "visible";
    fridge.style.visibility = "hidden";
    oven.style.visibility = "hidden";
    if (fridge_open.style.visibility == "visible") {
        fridge_open.style.visibility = "hidden";
    }
    if (knife.style.visibility == "visible") {
        knife.style.visibility = "hidden";
    }
    if (dark.style.visibility == "visible") {
        dark.style.visibility = "hidden";
    }
    kitchen.style.visibility = "hidden";
    drawer_left.style.visibility = "hidden";
    drawer_right.style.visibility = "hidden";
    kettle.style.visibility = "hidden";
});
hall_right.addEventListener('click', function () {
    let hook = document.querySelector('.hook');
    let rope = document.querySelector('.rope');
    let stairs = document.querySelector('.stairs');
    background.src = "images/basement.jpg";
    washer.style.visibility = "visible";
    door_left.style.visibility = "hidden";
    door_right.style.visibility = "hidden";
    window_left.style.visibility = "hidden";
    window_right.style.visibility = "hidden";
    hall_right.style.visibility = "hidden";
    hall_left.style.visibility = "hidden";
    hole.style.visibility = "visible";
    hook.style.visibility = "visible";
    rope.style.visibility = "visible";
    stairs.style.visibility = "visible";
    if (hook_inv.style.visibility == "visible") {
        hook.style.visibility = "hidden";
    }
    if (rope_inv.style.visibility == "visible") {
        rope.style.visibility = "hidden";
    }
});
washer.addEventListener('click', function () {
    alert("Mašina za pranje veša, izgleda da ne radi");
});
hole.addEventListener('click', function () {
    let hook = document.querySelector('.hook');
    let rope = document.querySelector('.rope');
    if (hook == true && rope == true) {
        hole.style.cursor = "pointer";
    }
    if (hole.style.cursor == "pointer") {
        background.src = "images/cave_enterance.jpg";
        stairs.style.visibility = "hidden";
        spider.style.visibility = "visible";
        washer.style.visibility = "hidden";
        hook_inv.style.visibility = "hidden";
        rope_inv.style.visibility = "hidden";
        hole.style.visibility = "hidden";
        back_to_basement.style.visibility = "visible";
    } else {
        alert("Mogla bih da probam da sidjem dole kad bih imala odgovarajuću opremu");
    }
    if (knife_inv.style.visibility == "visible") {
        hook.style.visibility = "hidden";
        rope.style.visibility = "hidden";
    }
});
hook.addEventListener('click', function () {
    hook.style.visibility = "hidden";
    hook_inv.style.visibility = "visible";
    hook = true;
});
rope.addEventListener('click', function () {
    rope.style.visibility = "hidden";
    rope_inv.style.visibility = "visible";
    rope = true;
});
hook_inv.addEventListener('click', function () {
    alert("Kuka od čelika");
});
rope_inv.addEventListener('click', function () {
    alert("Konopac izgleda jako i dugačko");
});
stairs.addEventListener('click', function () {
    let hook = document.querySelector('.hook');
    let rope = document.querySelector('.rope');
    background.src = "images/hallway.jpg";
    stairs.style.visibility = "hidden";
    door_left.style.visibility = "visible";
    door_right.style.visibility = "visible";
    window_left.style.visibility = "visible";
    window_right.style.visibility = "visible";
    hall_left.style.visibility = "visible";
    hall_right.style.visibility = "visible";
    washer.style.visibility = "hidden";
    hole.style.visibility = "hidden";
    if (hook.style.visibility == "visible") {
        hook.style.visibility = "hidden";
    }
    if (rope.style.visibility == "visible") {
        rope.style.visibility = "hidden";
    }
});
hole.addEventListener('mouseover', function () {
    if (hook == true && rope == true) {
        hole.style.cursor = "pointer";
    }
});
spider.addEventListener('click', function () {
    if (knife == true) {
        spider.style.cursor = "pointer";
    } else {
        alert("Tu je ogroman pauk, pitam se da li mogu nekako da prodjem iza njega");
    }
    if (spider.style.cursor == "pointer") {
        spider.style.visibility = "hidden";
        knife_inv.style.visibility = "hidden";
        to_cave_deeper.style.visibility = "visible";
    }
});
to_cave_deeper.addEventListener('click', function () {
    let mask = document.querySelector('.mask');
    background.src = "images/cave_deeper.jpg";
    water.style.visibility = "visible";
    back_to_cave_enterance.style.visibility = "visible";
    cave_exit.style.visibility = "visible";
    to_cave_deeper.style.visibility = "hidden";
    if (mask_inv.style.visibility == "visible") {
        mask.style.visibility = "hidden";
    } else {
        mask.style.visibility = "visible";
    }
});
spider.addEventListener('mouseover', function () {
    if (knife == true) {
        spider.style.cursor = "pointer";
    }
});
back_to_basement.addEventListener('click', function () {
    let hook = document.querySelector('.hook');
    let rope = document.querySelector('.rope');
    background.src = "images/basement.jpg";
    washer.style.visibility = "visible";
    hole.style.visibility = "visible";
    stairs.style.visibility = "visible";
    back_to_basement.style.visibility = "hidden";
    if (hook.style.visibility == "visible") {
        hook.style.visibility = "hidden";
    }
    if (rope.style.visibility == "visible") {
        rope.style.visibility = "hidden";
    }
    if (spider.style.visibility == "visible") {
        spider.style.visibility = "hidden";
    }
});
back_to_cave_enterance.addEventListener('click', function () {
    let mask = document.querySelector('.mask');
    background.src = "images/cave_enterance.jpg";
    if (rocks.style.visibility == "visible") {
        rocks.style.visibility = "hidden";
    }
    water.style.visibility = "hidden";
    back_to_cave_enterance.style.visibility = "hidden";
    cave_exit.style.visibility = "hidden";
    to_cave_deeper.style.visibility = "visible";
    if (mask.style.visibility == "visible") {
        mask.style.visibility = "hidden";
    }
});
mask.addEventListener('click', function () {
    mask.style.visibility = "hidden";
    mask_inv.style.visibility = "visible";
    mask = true;
});
mask_inv.addEventListener('click', function () {
    alert("Maska za ronjenje, sada mogu da idem u vodu");
});
water.addEventListener('mouseover', function () {
    if (mask == true) {
        water.style.cursor = "pointer";
    }
});
water.addEventListener('click', function () {
    let harpoon = document.querySelector('.harpoon');
    if (rocks.style.visibility == "visible") {
        rocks.style.visibility = "hidden";
    }
    if (mask == true) {
        water.style.cursor = "pointer";
    } else {
        alert("Ne ulazim u vodu bez odgovarajuće opreme");
    }
    if (water.style.cursor == "pointer") {
        background.src = "images/underwater.jpg";
        water.style.visibility = "hidden";
        mask_inv.style.visibility = "hidden";
        back_to_cave_enterance.style.visibility = "hidden";
        cave_exit.style.visibility = "hidden";
        back_to_surface.style.visibility = "visible";
        underwater_cave.style.visibility = "visible";
        plants.style.visibility = "visible";
        if (harpoon_inv.style.visibility == "visible") {
            harpoon.style.visibility = "hidden";
        } else {
            harpoon.style.visibility = "visible";
        }
    }
    if (back_to_basement.style.visibility == "visible") {
        back_to_basement.style.visibility = "hidden";
    }
});
harpoon.addEventListener('click', function () {
    harpoon.style.visibility = "hidden";
    harpoon_inv.style.visibility = "visible";
    harpoon = true;
});
harpoon_inv.addEventListener('click', function () {
    alert("Neko je izgubio harpun ovde, mogu ga iskoristiti da se odbranim od velikih riba");
});
plants.addEventListener('click', function () {
    alert("Podvodne biljke, prilično uobičajna pojava u vodi");
});
back_to_surface.addEventListener('click', function () {
    let harpoon = document.querySelector('.harpoon');
    background.src = "images/cave_deeper.jpg";
    if (harpoon.style.visibility == "visible") {
        harpoon.style.visibility = "hidden";
    } else {
        harpoon.style.visibility = "hidden";
    }
    water.style.visibility = "visible";
    water.style.cursor = "pointer";
    cave_exit.style.visibility = "visible";
    back_to_cave_enterance.style.visibility = "visible";
    underwater_cave.style.visibility = "hidden";
    plants.style.visibility = "hidden";
    back_to_surface.style.visibility = "hidden";
});
underwater_cave.addEventListener('click', function () {
    let harpoon = document.querySelector('.harpoon');
    background.src = "images/underwater_cave_inside.jpg";
    shark.style.visibility = "visible";
    back_to_underwater.style.visibility = "visible";
    if (harpoon.style.visibility == "visible") {
        harpoon.style.visibility = "hidden";
    } else {
        harpoon.style.visibility = "hidden";
    }
    underwater_cave.style.visibility = "hidden";
    plants.style.visibility = "hidden";
    back_to_surface.style.visibility = "hidden";
});
shark.addEventListener('click', function () {
    let paddle = document.querySelector('.paddle');
    if (harpoon == true) {
        shark.style.cursor = "pointer";
    } else {
        alert("AAAh, ogromna ajkula, nemam sa čim da se odbranim ako me napadne");
    }
    if (shark.style.cursor == "pointer") {
        shark.style.visibility = "hidden";
        harpoon_inv.style.visibility = "hidden";
        paddle.style.visibility = "visible";
    }
});
shark.addEventListener('mouseover', function () {
    if (harpoon == true) {
        shark.style.cursor = "pointer";
    }
});
back_to_underwater.addEventListener('click', function () {
    let paddle = document.querySelector('.paddle');
    let harpoon = document.querySelector('.harpoon');
    if (harpoon_inv.style.visibility == "visible") {
        harpoon.style.visibility = "hidden";
    } else {
        harpoon.style.visibility = "visible";
    }
    background.src = "images/underwater.jpg";
    back_to_underwater.style.visibility = "hidden";
    if (paddle.style.visibility == "visible") {
        paddle.style.visibility = "hidden";
    } else {
        paddle.style.visibility = "hidden";
    }
    if (shark.style.visibility == "visible") {
        shark.style.visibility = "hidden";
    } else {
        shark.style.visibility = "hidden";
    }
    underwater_cave.style.visibility = "visible";
    plants.style.visibility = "visible";
    back_to_surface.style.visibility = "visible";
});
paddle.addEventListener('click', function () {
    paddle.style.visibility = "hidden";
    paddle_inv.style.visibility = "visible";
    paddle = true;
});
paddle_inv.addEventListener('click', function () {
    alert("Drveno veslo, veoma jako, može poslužiti da se nešto gurne sa njim");
});
rocks.addEventListener('click', function () {
    if (paddle == true) {
        rocks.style.cursor = "pointer";
    } else {
        alert("Velika gomila kamenja, pitam se da li mogu da ih poguram sa nečim");
    }
    if (rocks.style.cursor == "pointer") {
        woods.style.visibility = "visible";
        rocks.style.visibility = "hidden";
        paddle_inv.style.visibility = "hidden";
    }
});
rocks.addEventListener('mouseover', function () {
    if (paddle == true) {
        rocks.style.cursor = "pointer";
    }
});
cave_exit.addEventListener('click', function () {
    let mask = document.querySelector('.mask');
    background.src = "images/cave_exit.jpg";
    if (mask.style.visibility == "visible") {
        mask.style.visibility = "hidden";
    }
    back_to_cave_deeper.style.visibility = "visible";
    water.style.visibility = "hidden";
    cave_exit.style.visibility = "hidden";
    rocks.style.visibility = "visible";
    if (back_to_cave_enterance.style.visibility == "visible") {
        back_to_cave_enterance.style.visibility = "hidden";
    }
    if (back_to_basement.style.visibility == "visible") {
        back_to_basement.style.visibility = "hidden";
    }
});
back_to_cave_deeper.addEventListener('click', function () {
    let mask = document.querySelector('.mask');
    background.src = "images/cave_deeper.jpg";
    water.style.visibility = "visible";
    cave_exit.style.visibility = "visible";
    back_to_cave_enterance.style.visibility = "visible";
    rocks.style.visibility = "hidden";
    back_to_cave_deeper.style.visibility = "hidden";
    if (mask_inv.style.visibility == "visible") {
        mask.style.visibility = "hidden";
    } else {
        mask.style.visibility = "visible";
    }
});
woods.addEventListener('click', function () {
    background.src = "images/woods.jpg";
    woods.style.visibility = "hidden";
    back_to_cave_deeper.style.visibility = "hidden";
    rocks.style.visibility = "hidden";
    wolf.style.visibility = "visible";
    if (back_to_cave_enterance.style.visibility == "visible") {
        back_to_cave_enterance.style.visibility = "hidden";
    }
});
wolf.addEventListener('click', function () {
    wolf.style.visibility = "hidden";
    police.style.visibility = "visible";
});
police.addEventListener('click', function () {
    outro.style.visibility = "visible";
    alert("Ćao mala devojčice, kako si ti došla do ovde?");
    alert("Svi smo te tražili");
    alert("Podji sa nama, odvešćemo te kod tvojih roditelja");
});
outro.addEventListener('click', function () {
    location.reload();
});