class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

export { Circle, Triangle, Square };
