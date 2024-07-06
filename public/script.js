document.addEventListener('DOMContentLoaded', () => {
    const paintingsList = document.getElementById('paintings-list');

    fetch('http://localhost:3000/paintings')
        .then(response => response.json())
        .then(data => {
            data.forEach(painting => {
                // Create list item (li)
                const listItem = document.createElement('li');
                
                // Create button
                const viewButton = document.createElement('button');
                viewButton.textContent = 'View'; 
                viewButton.classList.add('view-button'); 

                // Set button click event handler
                viewButton.addEventListener('click', () => {
                    // Populate form fields with selected painting's data
                    document.getElementById('_id').value = painting._id;
                    document.getElementById('Title').value = painting.Title;
                    document.getElementById('Artist').value = painting.LastName;
                    document.getElementById('Description').value = painting.Description;
        
                    // Example: Log painting details to console
                    console.log(painting);
                });

                // Add button to list item
                listItem.textContent = painting.Title;
                listItem.appendChild(viewButton);

                // Add list item to paintings list
                paintingsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching paintings:', error));
});

// Update a painting
function savePainting() {
    const _id = document.getElementById('_id').value;
    const updatedPainting = {
        Title: document.getElementById('Title').value,
        Artist: document.getElementById('Artist').value,
        Description: document.getElementById('Description').value
    };

    console.log('Updated painting:', JSON.stringify(updatedPainting));
    console.log(_id);

    fetch(`http://localhost:3000/paintings/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPainting)
    })
    .then(response => console.log('Response:', response))
    .then(data => {
        console.log('Updated painting:', data);
        location.reload();
    })
    .catch(error => console.error('Error updating painting:', error));
}
