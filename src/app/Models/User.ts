export class User {
	nom : string;
	prenom : string;
	// age : number;
	adress : string;
	cp : "";
	ville : string;
	tel : string;
	email : string;
	civilite : string;
	mdp : string= '';
	confirmMdp: String = '';
	login : string;
	pays : string;
	

	

	constructor () {
		this.nom = "";
		this.prenom = "";
		//this.age = 0;
		this.adress ="";
		this.cp="";
		this.ville="";
		this.tel="";
		this.email="";
		this.civilite="";
		this.mdp="";
		this.login="";
		this.pays="";
	}

}