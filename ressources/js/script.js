const projectOneName = document.getElementById('overlay-text-project-one');
const projectOneImage = document.getElementById('project-one-img');
const projectOneContainer = document.getElementById('image-container-one');
const projectTwoName = document.getElementById('overlay-text-project-two');
const projectTwoImage = document.getElementById('project-two-img');
const projectTwoContainer = document.getElementById('image-container-two');
const projectThreeName = document.getElementById('overlay-text-project-three');
const projectThreeImage = document.getElementById('project-three-img');
const projectThreeContainer = document.getElementById('image-container-three');
const projectFourName = document.getElementById('overlay-text-project-four');
const projectFourImage = document.getElementById('project-four-img');
const projectFourContainer = document.getElementById('image-container-four');
const projectFiveName = document.getElementById('overlay-text-project-five');
const projectFiveImage = document.getElementById('project-five-img');
const projectFiveContainer = document.getElementById('image-container-five');
const projectSixName = document.getElementById('overlay-text-project-six');
const projectSixImage = document.getElementById('project-six-img');
const projectSixContainer = document.getElementById('image-container-six');

/* this is for future use to make the function more readable and maintainable
const projectNames = [
    document.getElementById('overlay-text-project-one'),
    document.getElementById('overlay-text-project-two'),
    document.getElementById('overlay-text-project-three'),
    document.getElementById('overlay-text-project-four'),
    document.getElementById('overlay-text-project-five'),
    document.getElementById('overlay-text-project-six')
]

const projectImages = [
    document.getElementById('project-one-img'),
    document.getElementById('project-two-img'),
    document.getElementById('project-three-img'),
    document.getElementById('project-four-img'),
    document.getElementById('project-five-img'),
    document.getElementById('project-six-img')
]

const projectContainers = [
    document.getElementById('image-container-one'),
    document.getElementById('image-container-two'),
    document.getElementById('image-container-three'),
    document.getElementById('image-container-four'),
    document.getElementById('image-container-five'),
    document.getElementById('image-container-six')
]
*/

// function to show and hide text overlay on project image when mouse hovering on the image
const imageOverlay = (projectName, projectImage, projectContainer) => {

    console.log('imageOverlay Function is running');
    // show project name and change overlay opacity
    function showProjectName() {
        projectName.style.display = 'block';
        projectImage.style.opacity = '0.5';
    };

    // hide project name
    function hideProjectName() {
        projectName.style.display = 'none';
        projectImage.style.opacity = '1';
    };

    projectContainer.addEventListener('mouseover', showProjectName);
    projectContainer.addEventListener('mouseout', hideProjectName);
}

imageOverlay(projectOneName, projectOneImage, projectOneContainer);
imageOverlay(projectTwoName, projectTwoImage, projectTwoContainer);
imageOverlay(projectThreeName, projectThreeImage, projectThreeContainer);
imageOverlay(projectFourName, projectFourImage, projectFourContainer);
imageOverlay(projectFiveName, projectFiveImage, projectFiveContainer);
imageOverlay(projectSixName, projectSixImage, projectSixContainer);