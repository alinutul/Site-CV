// Sample data for SWOT analysis
const swotData = {
    strengths: ["Strong brand", "Loyal customers", "High quality"],
    weaknesses: ["High prices", "Limited product range", "Small market share"],
    opportunities: ["Market expansion", "Product line extension", "Technological advancements"],
    threats: ["New competitors", "Economic downturn", "Changing regulations"]
};

// Function to populate SWOT list items
function populateSwot() {
    const strengthsList = document.getElementById('strengths-list');
    const weaknessesList = document.getElementById('weaknesses-list');
    const opportunitiesList = document.getElementById('opportunities-list');
    const threatsList = document.getElementById('threats-list');

    swotData.strengths.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        strengthsList.appendChild(li);
    });

    swotData.weaknesses.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        weaknessesList.appendChild(li);
    });

    swotData.opportunities.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        opportunitiesList.appendChild(li);
    });

    swotData.threats.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        threatsList.appendChild(li);
    });
}

// Call the function to populate SWOT data
populateSwot();
