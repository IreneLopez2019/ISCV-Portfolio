import { categories } from "./constants/categories.js";

const modalWrapper = document.querySelector(".modal-wrapper");
const modalImg = document.querySelector("#modal-img");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");

function setMenu() {
    const navMenu = document.querySelector("#nav-menu");
    const navMenuItems = document.createElement("ul");

    navMenuItems.classList.add("menu-items");

    for (let category of categories) {
        let li = document.createElement("li");
        let link = document.createElement("a");

        link.href = `#${category.id}`;
        link.innerHTML = category.title;

        li.appendChild(link);
        navMenuItems.appendChild(li);
    }

    navMenu.appendChild(navMenuItems);
}

function setCategories() {
    const contentSection = document.querySelector(".content-section");

    for (let category of categories) {
        let section = document.createElement("div");
        let sectionTitle = document.createElement("h1");

        sectionTitle.innerText = category.title;
        sectionTitle.classList.add("category-name");
        section.classList.add("projects-section");
        section.appendChild(sectionTitle);
        section.id = category.id;

        setProjects(section, category.projects);
        setProjectsNavigation(category);

        contentSection.appendChild(section);
    }
}

function setProjects(section, projects) {
    for (let project of projects) {
        let projectWrapper = document.createElement("div");
        let projectImageWrapper = document.createElement("div");
        let projectImage = document.createElement("div");
        let projectTextContainer = document.createElement("div");
        let projectTitle = document.createElement("h2");
        let projectDescription = document.createElement("p");

        projectImageWrapper.classList.add("project-image-wrapper");
        projectWrapper.classList.add("project-wrapper");
        projectImage.classList.add("project-thumb");
        projectTextContainer.classList.add("project-text");

        projectTitle.innerText = project.name;
        projectDescription.innerText = project.description;

        if (project.image) {
            projectImage.classList.add("has-image");
            projectImage.style.backgroundImage = `url(${project.image})`;
            projectImage.addEventListener("click", () =>
                toggleModal(true, project)
            );
        }

        projectWrapper.id = replaceTextSpaces(project.name);

        projectImageWrapper.appendChild(projectImage);
        projectTextContainer.append(projectTitle, projectDescription);
        projectWrapper.append(projectImageWrapper, projectTextContainer);
        section.appendChild(projectWrapper);
    }
}

function setProjectsNavigation(category) {
    const contentNavigation = document.querySelector(".content-section-nav");
    let categoryButton = document.createElement("button");
    let projectsList = document.createElement("ul");

    categoryButton.innerText = category.title;

    for (let project of category.projects) {
        let projectItem = document.createElement("li");
        let projectItemLink = document.createElement("a");
        projectItemLink.href = `#${replaceTextSpaces(project.name)}`;
        projectItemLink.innerText = project.name;
        projectItem.appendChild(projectItemLink);
        projectsList.appendChild(projectItem);
    }

    contentNavigation.append(categoryButton, projectsList);
}

function toggleModal(boolean, project) {
    if (boolean) {
        modalWrapper.style.display = "flex";
        modalImg.alt = project.name;
        modalImg.src = project.image;
    } else {
        modalWrapper.style.display = "none";
        modalImg.alt = "";
        modalImg.src = "";
    }
}

function replaceTextSpaces(word) {
    return word.replace(/ /g, "_").toLowerCase();
}

modalOverlay.addEventListener("click", () => toggleModal(false, null));
modalCloseBtn.addEventListener("click", () => toggleModal(false, null));

setMenu();
setCategories();
