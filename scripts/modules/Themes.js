class Themes {
    constructor() {
        this.themeElements = document.getElementsByName("theme");
        this.calculatorElement = document.querySelector(".calculator");
        this.bodyElement = document.querySelector("body");
        this.pickerElement = document.querySelector(".theme-picker");
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
    }

    updateToTheme2() {
        this.calculatorElement.classList.add("theme-2");
        this.bodyElement.classList.add("theme-2");
        this.pickerElement.classList.add("theme-2");
    }

    resetThemes() {
        this.resetTheme2();
        this.resetTheme3();
    }

    resetTheme2() {
        this.calculatorElement.classList.remove("theme-2");
        this.bodyElement.classList.remove("theme-2");
        this.pickerElement.classList.remove("theme-2");
    }

    resetTheme3() {
        this.calculatorElement.classList.remove("theme-3");
        this.bodyElement.classList.remove("theme-3");
        this.pickerElement.classList.remove("theme-3");
    }
}

export default Themes;