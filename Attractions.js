function showDetails(attraction) {
    let detailsText = document.getElementById('details-text');

    if (attraction === 'elephants') {
        detailsText.innerHTML = "Amboseli is known for its large herds of elephants, which roam freely across the park. The elephants here are famous for their impressive size and the breathtaking backdrop of Mount Kilimanjaro.";
    } else if (attraction === 'mount-kilimanjaro') {
        detailsText.innerHTML = "One of the main attractions of Amboseli is the stunning view of Mount Kilimanjaro, the highest peak in Africa. The park offers incredible opportunities to see the mountain from various viewpoints, especially at sunrise or sunset.";
    } else if (attraction === 'birdwatching') {
        detailsText.innerHTML = "Amboseli is a birdwatcher's paradise, with over 400 species of birds recorded in the park. The wetlands, savannah, and open plains offer diverse habitats for both migratory and resident birds.";
    }
}
