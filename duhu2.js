// Functie om willekeurige temperatuur te genereren tussen 0 en 40 graden Celsius
function generateRandomTemperature() {
    return Math.floor(Math.random() * 41); // Genereer een willekeurig getal tussen 0 en 40
}

// Functie om de temperatuurmeters bij te werken met nieuwe waarden
function updateMeters() {
    var meter1Value = generateRandomTemperature() + '°C'; // Genereer een nieuwe waarde voor meter 1
    var meter2Value = generateRandomTemperature() + '°C'; // Genereer een nieuwe waarde voor meter 2

    document.getElementById('meter1').getElementsByClassName('value')[0].innerText = meter1Value; // Werk de waarde van meter 1 bij
    document.getElementById('meter2').getElementsByClassName('value')[0].innerText = meter2Value; // Werk de waarde van meter 2 bij
}

// Functie om de grafiek te tekenen met nieuwe temperatuurwaarden
function drawChart() {
    var ctx = document.getElementById('temperature-chart').getContext('2d');
    var temperatureData = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Temperatuur',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [generateRandomTemperature(), generateRandomTemperature(), generateRandomTemperature(), generateRandomTemperature(), generateRandomTemperature()],
            borderWidth: 1
        }]
    };
    var chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    var chart = new Chart(ctx, {
        type: 'line',
        data: temperatureData,
        options: chartOptions
    });
}

// Functie om de gegevens periodiek bij te werken en de grafiek opnieuw te tekenen
function updateDataAndChart() {
    updateMeters(); // Werk de temperatuurmeters bij
    drawChart(); // Teken de grafiek opnieuw met nieuwe gegevens
}

// Initialisatie
updateDataAndChart();

// Vernieuw de gegevens en teken de grafiek elke 5 seconden
setInterval(updateDataAndChart, 5000);
