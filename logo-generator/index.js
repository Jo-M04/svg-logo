import fs from "fs";
import inquirer from "inquirer";
import { Circle, Triangle, Square } from "./lib/shapes.js";

const shapeClasses = {
  circle: Circle,
  triangle: Triangle,
  square: Square,
};

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) =>
        input.length <= 3 ? true : "Please enter up to three characters.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color (keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color (keyword or hexadecimal):",
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const ShapeClass = shapeClasses[shape];
    const shapeInstance = new ShapeClass(shapeColor);

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

    fs.writeFileSync("examples/logo.svg", svgContent.trim());
    console.log("Generated logo.svg");
  });
