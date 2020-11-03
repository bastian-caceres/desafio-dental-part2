var traumatologia = [
    {hora: "09:00", especialista: "RENÉ POBLETE",paciente: "ANA GELLONA",rut: "13123329-7",prevision: "ISAPRE"},
    {hora: "09:30", especialista: "MARIA SOLAR",paciente: "RAMIRO ANDRADE",rut: "9878789-2",prevision: "FONASA"},
    {hora: "10:00", especialista: "RAUL LOYOLA",paciente: "CARMEN ISLA ",rut: "12221451-K",prevision: "ISAPRE"},
    {hora: "10:30", especialista: "FRANCISCO VON TEUBER",paciente: "KARIN FERNANDEZ",rut: "10112348-3",prevision: "ISAPRE"},
    {hora: "12:00", especialista: "ANTONIO LARENAS",paciente: "PABLO LOAYZA",rut: "13453234-1",prevision: "FONASA"}
];

// traumatologia
document.write(`
<main class="container pt-5">  
    <h1 class="text-center">traumatologia</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">Hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">rut</th>
                <th scope="col">prevision</th>
            </tr>
        </thead>
        <tbody>
`);
traumatologia.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.hora}</td>
            <td>${elementos.especialista}</td>
            <td>${elementos.paciente}</td>
            <td>${elementos.rut}</td>
            <td>${elementos.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);

traumatologia.pop();
traumatologia.shift();

// eliminar el primer y ultimo pasciente
document.write(`
<main class="container pt-5">    
    <h1 class="text-center">eliminar el primer y ultimo pasciente</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">Hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">rut</th>
                <th scope="col">prevision</th>
            </tr>
        </thead>
        <tbody>
`);
traumatologia.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.hora}</td>
            <td>${elementos.especialista}</td>
            <td>${elementos.paciente}</td>
            <td>${elementos.rut}</td>
            <td>${elementos.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);

var traumatologia = [
    {hora: "09:00", especialista: "RENÉ POBLETE",paciente: "ANA GELLONA",rut: "13123329-7",prevision: "ISAPRE"},
    {hora: "09:30", especialista: "MARIA SOLAR",paciente: "RAMIRO ANDRADE",rut: "9878789-2",prevision: "FONASA"},
    {hora: "10:00", especialista: "RAUL LOYOLA",paciente: "CARMEN ISLA ",rut: "12221451-K",prevision: "ISAPRE"},
    {hora: "10:30", especialista: "FRANCISCO VON TEUBER",paciente: "KARIN FERNANDEZ",rut: "10112348-3",prevision: "ISAPRE"},
    {hora: "12:00", especialista: "ANTONIO LARENAS",paciente: "PABLO LOAYZA",rut: "13453234-1",prevision: "FONASA"}
];

var dental = [
    {hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
    {hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
    {hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
    {hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
    {hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
    {hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE"}
];

// listado por guion
document.write(`
<main class="container pt-5">    
    <h1 class="text-center">listado por guion</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">paciente</th>
            </tr>
        </thead>
        <tbody>
`);
dental.forEach(function (e) {
    document.write(`
        <tr>
            <td>${e.hora} ${e.especialista} ${e.paciente} ${e.rut} ${e.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);

// listado paciente
var listPacientes = dental.concat(traumatologia);

document.write(`
<main class="container pt-5">    
    <h1 class="text-center">listado Paciente Atendidos</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">paciente</th>
            </tr>
        </thead>
        <tbody>
`);
listPacientes.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.paciente}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);

// clientes fonasa
var clientFonasa = dental.filter(function(elemento){
    return elemento.prevision == 'FONASA';
});

document.write(`
<main class="container pt-5">    
    <h1 class="text-center">Listado Fonasa</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">Hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">rut</th>
                <th scope="col">prevision</th>
            </tr>
        </thead>
        <tbody>
`);
clientFonasa.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.hora}</td>
            <td>${elementos.especialista}</td>
            <td>${elementos.paciente}</td>
            <td>${elementos.rut}</td>
            <td>${elementos.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);

// clientes isapre
var clientFonasa = dental.filter(function(elemento){
    return elemento.prevision == 'ISAPRE';
});

document.write(`
<main class="container pt-5">    
    <h1 class="text-center">Listado Isapre</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">Hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">rut</th>
                <th scope="col">prevision</th>
            </tr>
        </thead>
        <tbody>
`);
clientFonasa.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.hora}</td>
            <td>${elementos.especialista}</td>
            <td>${elementos.paciente}</td>
            <td>${elementos.rut}</td>
            <td>${elementos.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);


