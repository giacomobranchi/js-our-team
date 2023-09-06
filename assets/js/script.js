// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
/* Dati:
Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg
Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg
Walter Gordon
Office Manager
walter-gordon-office-manager.jpg
Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg
Scott Estrada	
Developer	
scott-estrada-developer.jpg
Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg */

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    }
    ,
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < members.length; i++) {
    const teamMembers = members[i];
    // MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    let markup = `<div class="col-6 col-md-4 gap-4 py-4">
    <div class="card">
    <img src="./assets/img/${teamMembers.photo}" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">${teamMembers.name} </h5>
    <p class="card-text">${teamMembers.role}</p>
    </div>
    </div>`
    document.querySelector('.row').innerHTML += markup;
    /* for (const key in teamMembers) {
        console.log(key);
        let member = teamMembers[key]
        console.log(member);
    } */
}
/* for (iterator of members) {
    console.log(iterator);
} */
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva


// BONUS 2:
// Organizzare i singoli membri in card/schede