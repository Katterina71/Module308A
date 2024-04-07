// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],

    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}


console.log(" Part 1: Humble Beginnings\n ")
console.log(`We could find a sword at  ${adventurer.inventory[0]}`);    

const  inventory = adventurer.inventory;
inventory.forEach(e => console.log(`${adventurer.name} has a ${e}`));

adventurer.roll();
adventurer.roll();


// Part 2: Class Fantasy

// Start with a Character class, which will define generic character entities. Robin and their companions all have a name, so the Character class should definitely include name as one of its properties. At this stage, we will also make the decision that every character should have health (which we will standardize to a maximum of 100, and an inventory (even if the inventory is empty). Every character should also be able to make rolls. Add the roll method to the Character class.

// class Character {
//     constructor (name) {
//         this.name = name,
//         this.health = 100,
//         this.inventory = [],
//         this.companions = []
//     }

//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }

//     addCompanion(companion) {
//         this.companions.push(companion);
//           }
// }

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// const leo = robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// const frank = robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log("\n Part 2: Class Fantasy\n")
// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();

// Part 3: Class Features &&  Part 4: Class Uniforms && Part 5: Gather your Party

console.log("\n Part 3: Class Features & Part 4: Class Uniforms\n")

class Character {
    constructor (name) {
        this.name = name,
        this.health = Character.MAX_HEALTH,
        this.inventory = [],
        this.companions = []
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }

    addCompanion(companion) {
        this.companions.push(companion);
          }
}

class Adventurer extends Character {
    constructor(name, role, skills) {
        super(name);
        debugger;
        if (role !== Adventurer.ROLES.find((e) => e === role)) {
            throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}.`)
        }
        this.role = role;
        this.friend = true;
        this.skills = skills;
        this.inventory.push("bedroll", "50 gold coins");
   
    }
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
        return this;
    }
    enemy() {
        this.friend = false;
        console.log(`Beware ${this.name} is nearby...`);
        return this;
    }    
}

class Companion extends Character {
    recovery(master){
        if (master.health < 10) {
        master.health=100;
        console.log(`${this.name} full recoverd ${master.name}`)
        } else {
            master.health += 10;
            console.log(`${this.name}  recoverd on 10 ${master.name}`)
        }
    }
}

Character.MAX_HEALTH = 100;
Adventurer.ROLES = ["Fighter","Healer","Wizard", "Warrior", "Healer", "Mage", "Dwarf"]

const robin = new Adventurer("Robin", "Mage");
robin.skills = "Magic";
console.log(robin);
const leo = new Companion("Leo", "cat");
const frank = new Companion("Frank", "flea");

frank.inventory = ["small hat", "sunglasses"];

robin.addCompanion(leo);
leo.addCompanion(frank);

console.log(robin);
const meetDwarf = new Adventurer("Gimly", "Dwarf", "Negotiation");
meetDwarf.scout();
const meetGoblin = new Adventurer("Goblin", "Fighter", "Fight");
meetGoblin.enemy().scout();

robin.health = 9;
leo.recovery(robin);

robin.health = 50;
leo.recovery(robin);

