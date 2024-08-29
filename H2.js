import "./styles.css";
 
const myjson = [
  {
    Car: {
      Color: "Rose Red",
      "Tinted windows": false,
      Wheels: "4",
      "Roof cargo": null,
      Entertainment: [
        "FM Radio",
        "MP3 ,MP4 and MKV player",
        "harman/kardon speakers",
      ],
      Accessories: "satnav, cruise control",
    },
    Car1: {
      Color: "Navy blue",
      "Tinted windows": true,
      Wheels: "4",
      "Roof cargo": true,
      Entertainment: [
        "FM Radio",
        "Apple CarPlay/Android Auto",
        "Bowers & Wilkins Premium Sound speakers",
      ],
      Accessories: "self drive system, luggage cover",
    },
  },
];
 
document.getElementById("app").innerHTML = `
<div id="json">
    <h1> Car properties </h1>
    <p>Color: ${myjson[0].Car.Color}</p>
    <p>Tinted windows: ${myjson[0].Car["Tinted windows"]}</p>
    <p>Wheels: ${myjson[0].Car.Wheels}</p>
    <p>Roof cargo: ${myjson[0].Car["Roof cargo"]}</p>
    <p>Entertainment: ${myjson[0].Car["Entertainment"]}</p>
    <p>Accessories: ${myjson[0].Car["Accessories"]}</p>
    </div>
    <div id="json">
    <h1> Car1 properties </h1>
    <p>Color: ${myjson[0].Car1.Color}</p>
    <p>Tinted windows: ${myjson[0].Car1["Tinted windows"]}</p>
    <p>Wheels: ${myjson[0].Car1.Wheels}</p>
    <p>Roof cargo: ${myjson[0].Car1["Roof cargo"]}</p>
    <p>Entertainment: ${myjson[0].Car1["Entertainment"]}</p>
    <p>Accessories: ${myjson[0].Car1["Accessories"]}</p>
    </div>
`;
