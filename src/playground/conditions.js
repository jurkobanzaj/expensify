const user = {
    name: "",
    age: 19,
    location: "Little Winging"
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    };
};

const templateTwo = (
    <div>
    <h1>{user.name ? user.name.toUpperCase() : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);

const magicWand = {
    name: "Elder wand",
    description: "Unbeatable magic wand, one of Deathly Hallows",
    options: ["One", "Two"]
}

const templateThree = (
    <div>
    <h1>{magicWand.name}</h1>
    {magicWand.description && <p>{magicWand.description}</p>}
    <p>{magicWand.options.length > 0 ? "Here are your options" : "No options" }</p>
    </div>
);
