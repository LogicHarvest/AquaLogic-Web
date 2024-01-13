var fishData;

fetch('fish-data.json')
    .then(response => response.json())
    .then(data => {
        fishData = data;
    })
    .catch(error => console.error('Error fetching and parsing crayfish data:', error));

function calculateCapacity(fishType) {
    var damSize = parseFloat(document.getElementById('damSize').value);
    var depth = parseFloat(document.getElementById('depth').value);

    var fishTypeData = fishData[fishType];

    if (fishTypeData) {
        var spacePerUnit = fishTypeData.spacePerUnit;
        var depthFactor = fishTypeData.depthFactor;
        var biologicalName = fishTypeData.biologicalName;
        var averageSize = fishTypeData.averageSize;
        var temperatureRange = fishTypeData.temperatureRange;
        var waterpHRange = fishTypeData.waterpHRange;

        var totalSpace = damSize * depth * depthFactor;
        var capacity = Math.floor(totalSpace / spacePerUnit);

        var resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            <p>Estimated ${biologicalName} Capacity: ${capacity} crayfish</p>
            <p>Average Size: ${averageSize}</p>
            <p>Temperature Range: ${temperatureRange}</p>
            <p>Water pH Range: ${waterpHRange}</p>
        `;
    } else {
        console.error(`Fish type "${fishType}" not found in the data.`);
    }
}

