class Etudiant {
    constructor(prenom, nom) {
      // prenom est un paramètre
      this.prenom = prenom; // this.prenom est une propriété
      this.nom = nom;
    }
    fullName() {
      // fullName est une méthode
      return `${this.prenom} ${this.nom}`;
    }
  }
  
  class Resultat extends Etudiant {
    constructor(prenom, nom, note) {
      super(prenom, nom);
      this.note = note;
    }
    resultat() {
      if (this.note > 10) {
        console.log(`${this.prenom} ${this.nom} a réussi son examen`);
      } else {
        console.log(`${super.fullName()} doit repasser son examen`);
      }
    }
  }
  
  const jeandupont = new Resultat("Jean", "Dupont", 15);
  jeandupont.resultat();