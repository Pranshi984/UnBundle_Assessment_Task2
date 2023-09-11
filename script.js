document.addEventListener('DOMContentLoaded', function () {
    // Mock data (replace with real data and logic)
    const carsData = [
        { id: 1, name: 'Car Model 1', image: 'car1.jpg' },
        { id: 2, name: 'Car Model 2', image: 'car2.jpg' },
        { id: 3, name: 'Car Model 3', image: 'car3.jpg' }
    ];

    // Function to update the list of featured cars (for demonstration)
    function updateFeaturedCars() {
        const carList = document.querySelector('.car-list');
        carList.innerHTML = '';

        carsData.forEach(car => {
            const carItem = document.createElement('div');
            carItem.classList.add('car');
            carItem.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
            `;
            carList.appendChild(carItem);
        });
    }

    // Button click event listeners for demonstration
    const updateButton = document.getElementById('update-button');
    updateButton.addEventListener('click', function () {
        // Mock update logic here (e.g., fetching data from a server)
        alert('Content updated (demo)');
        // Update the list of featured cars (demo)
        updateFeaturedCars();
    });

    const deleteButton = document.getElementById('delete-button');
    deleteButton.addEventListener('click', function () {
        // Mock delete logic here (e.g., sending a request to delete content)
        alert('Content deleted (demo)');
        // Update the list of featured cars (demo)
        updateFeaturedCars();
    });

    // Initialize the list of featured cars
    updateFeaturedCars();
});
