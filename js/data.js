const data = [
    {
        team: 'A komanda',
        points: 2,
    },
    {
        team: 'B komanda',
        points: 1,
    },
    {
        team: 'B komanda',
        points: 3,
    },
    {
        team: 'A komanda',
        points: 3,
    },
    {
        team: 'A komanda',
        points: 2,
    },
    {
        team: 'B komanda',
        points: 1,
    },
];


let HTML = '';

for (let i = 0; i < data.length; i++) {
    HTML += `
    <div> 
    <p>${data[i].team}</p>
    <p>${data[i].points}</p>
    </div>
    `
}