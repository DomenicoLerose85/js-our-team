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

for (i = 0; i < teamMembers.length; i++) {
     document.getElementsByClassName("team-container")[0].innerHTML += `
      <div class="team-container">
            <div class"team-card">
             <img src="img/wayne-barnett-founder-ceo.jpg"${teamMembers[0]["foto"]}">
             <img src="img/angela-caroll-chief-editor.jpg"${teamMembers[1]["foto"]}">
             <img src="img/walter-gordon-office-manager.jpg"${teamMembers[2]["foto"]}">
             <img src="img/angela-lopez-social-media-manager.jpg"${teamMembers[3]["foto"]}">
             <img src="img/scott-estrada-developer.jpg"${teamMembers[4]["foto"]}">
             <img src="img/barbara-ramos-graphic-designer.jpg"${teamMembers[5]["foto"]}">
             <div class="card-text">
                 <h3 class="card-title text-center">${teamMembers[0]["nome"]}</h3>
                 <h3 class="card-title text-center">${teamMembers[1]["nome"]}</h3>
                 <h3 class="card-title text-center">${teamMembers[2]["nome"]}</h3>
                 <h3 class="card-title text-center">${teamMembers[3]["nome"]}</h3>
                 <h3 class="card-title text-center">${teamMembers[4]["nome"]}</h3>
                 <h3 class="card-title text-center">${teamMembers[5]["nome"]}</h3>
                 <p class="card-text text-center fw-light">${teamMembers[0]["ruolo"]}</p>
                 <p class="card-text text-center fw-light">${teamMembers[1]["ruolo"]}</p>        
                 <p class="card-text text-center fw-light">${teamMembers[2]["ruolo"]}</p>
                 <p class="card-text text-center fw-light">${teamMembers[3]["ruolo"]}</p>
                 <p class="card-text text-center fw-light">${teamMembers[4]["ruolo"]}</p>
                 <p class="card-text text-center fw-light">${teamMembers[5]["ruolo"]}</p>
             </div>
            </div> 
      </div>`;
    
}

  
