class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    areaOfSector(angle) {
        return (angle / 360) * Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }

    diameter() {
        return 2 * this.radius;
    }

    lengthOfArc(arcAngle) {
        return 2 * Math.PI * this.radius * (arcAngle / 360);
    }
}

module.exports = Circle;
