class Themes {
    constructor() {
        this.themeElements = document.getElementsByName("theme");
        this.calculatorElement = document.querySelector(".calculator");
        this.bodyElement = document.querySelector("body");
        this.pickerElement = document.querySelector(".theme-picker");
        this.optionElements = document.querySelectorAll(".option");
        this.equalElement = document.querySelector(".equal");
        this.keypadElement = document.querySelector(".keypad");
        this.buttonElements = document.querySelectorAll("button");
        this.screenElement = document.querySelector(".display input");
        this.toggleArea = document.querySelector(".theme-selectors");
        this.toggleButtonElements = document.querySelectorAll(".theme-selectors input");
        this.headerElement = document.querySelector(".calc-header");
        this.events();
    }

    events() {
        this.themeElements.forEach(theme => {
            theme.addEventListener("change", (e) => this.updateThemes(e.target));
        });
    }

    updateThemes(theme) {
        this.resetThemes();

        if (theme.value == 2) {
            this.updateToTheme2();
        }

        if (theme.value == 3) {
            this.updateToTheme3();
        }
    }

    updateToTheme2() {
        this.calculatorElement.classList.add("theme-2");
        this.bodyElement.classList.add("theme-2");
        this.pickerElement.classList.add("theme-2");
        this.equalElement.classList.add("theme-2");
        this.keypadElement.classList.add("theme-2");
        this.screenElement.classList.add("theme-2");
        this.toggleArea.classList.add("theme-2");
        this.headerElement.classList.add("theme-2");

        this.buttonElements.forEach(el => {
            el.classList.add("theme-2");
        });

        this.optionElements.forEach(el => {
            el.classList.add("theme-2");
        });

        this.toggleButtonElements.forEach(el => {
            el.classList.add("theme-2");
        });
    }

    updateToTheme3() {
        this.calculatorElement.classList.add("theme-3");
        this.bodyElement.classList.add("theme-3");
        this.pickerElement.classList.add("theme-3");
        this.equalElement.classList.add("theme-3");
        this.keypadElement.classList.add("theme-3");
        this.screenElement.classList.add("theme-3");
        this.toggleArea.classList.add("theme-3");
        this.headerElement.classList.add("theme-3");

        this.buttonElements.forEach(el => {
            el.classList.add("theme-3");
        });

        this.optionElements.forEach(el => {
            el.classList.add("theme-3");
        });

        this.toggleButtonElements.forEach(el => {
            el.classList.add("theme-3");
        });
    }

    resetThemes() {
        this.resetTheme2();
        this.resetTheme3();
    }

    resetTheme2() {
        this.calculatorElement.classList.remove("theme-2");
        this.bodyElement.classList.remove("theme-2");
        this.pickerElement.classList.remove("theme-2");
        this.equalElement.classList.remove("theme-2");
        this.keypadElement.classList.remove("theme-2");
        this.screenElement.classList.remove("theme-2");
        this.toggleArea.classList.remove("theme-2");
        this.headerElement.classList.remove("theme-2");

        this.buttonElements.forEach(el => {
            el.classList.remove("theme-2");
        });

        this.optionElements.forEach(el => {
            el.classList.remove("theme-2");
        });

        this.toggleButtonElements.forEach(el => {
            el.classList.remove("theme-2");
        });
    }

    resetTheme3() {
        this.calculatorElement.classList.remove("theme-3");
        this.bodyElement.classList.remove("theme-3");
        this.pickerElement.classList.remove("theme-3");
        this.equalElement.classList.remove("theme-3");
        this.keypadElement.classList.remove("theme-3");
        this.screenElement.classList.remove("theme-3");
        this.toggleArea.classList.remove("theme-3");
        this.headerElement.classList.remove("theme-3");

        this.buttonElements.forEach(el => {
            el.classList.remove("theme-3");
        });

        this.optionElements.forEach(el => {
            el.classList.remove("theme-3");
        });

        this.toggleButtonElements.forEach(el => {
            el.classList.remove("theme-3");
        });
    }
}

export default Themes;