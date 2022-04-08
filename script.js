// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. 
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// array con object contenente dati dei componenti del team

let teamMembers = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }

];
console.log(teamMembers);

// funzione per stampare i membri del team nel console log 

for (let i = 0; i < teamMembers.length; i++) {
    for (const key in teamMembers[i]) {
        console.log(`${key}:  ${teamMembers[i][key]}`)

    };
};

// stampa card nel DOM per ogni membro del team
const teamContainer = document.querySelector('.team-container');
function printTeam(){
     let item;
     for (i = 0; i < teamMembers.length; i++){
        item += `
        <div class"team-card">
            <div class="card-image">
              <img src="./img/${teamMembers[i].foto}">
            </div> 
            <div class="card-text">
               <h3 class="card-title text-center">${teamMembers[i].nome}</h3>
               <p class="card-text text-center fw-light">${teamMembers[i].ruolo}</p>
            </div> 
        </div>
        `
    }
    teamContainer.innerHTML = item;
}
printTeam();
