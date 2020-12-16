class Animate {
    constructor(object) {
        this.object = object;
    }
    fadeInTop() {
        const { opacity, translateY } = this.object;
        return `opacity: ${opacity}; transform: translateY(${translateY}px); !important`;
    }
}