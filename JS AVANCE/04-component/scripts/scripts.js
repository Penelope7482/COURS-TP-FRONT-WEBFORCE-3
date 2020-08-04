class TestComponent extends HTMLElement {   //HTMLElement est une classe de JS
    constructor(){
        super();    //oblig même si rien dedans
            this.innerText = "test";
            this.id = "ancienneValeur";
            this.style.background= "red"

    }

    static get observedAttributes() { //les attributs à observer
        return ['id', 'style'];
    }

    connectedCallback() {  //surveille le cycle de vie 
        console.log("Ajoute la page");
    }
    disconnectedCallback() {
        console.log("Retiré de la page");
    }

    attributeChangedCallback(nom, ancienneValeur, nouvelleValeur){
        console.log(nom, ancienneValeur, nouvelleValeur);
    }

}

customElements.define("test-component", TestComponent);  //initialise la creation du composant HTML

// document.querySelector('test-component').remove();
 document.querySelector('test-component').setAttribute("id", "test");
 document.querySelector('test-component').setAttribute("style", "background : blue");
 document.querySelector('test-component').setAttribute("style", "background : green");
