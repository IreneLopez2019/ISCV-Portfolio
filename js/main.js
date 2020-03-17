// import { categories } from "./constants/categories.js";

// const infoWrapper = document.querySelector(".information-wrapper");
// const modalWrapper = document.querySelector(".modal-wrapper");
// const modalImg = document.querySelector("#modal-img");
// const modalOverlay = document.querySelector(".modal-overlay");
// const modalCloseBtn = document.querySelector(".modal-close-btn");
// const contentNavigation = document.querySelector(".content-section-nav");

// document.addEventListener("scroll", () => {
// 	let infoWrapperBottom = infoWrapper.getBoundingClientRect().bottom;

// 	if (infoWrapperBottom <= -15) {
// 		contentNavigation.classList.add("is-visible");
// 	} else {
// 		contentNavigation.classList.remove("is-visible");
// 	}
// });

// function setMenu() {
// 	const navMenu = document.querySelector("#nav-menu");
// 	const navMenuItems = navMenu.querySelector("ul");
// 	const contactNavLink = navMenu.querySelector("#contact-nav-link");

// 	navMenuItems.classList.add("menu-items");

// 	for (let category of categories) {
// 		let li = document.createElement("li");
// 		let link = document.createElement("a");

// 		link.href = `#${category.id}`;
// 		link.innerText = category.title;

// 		li.appendChild(link);
// 		navMenuItems.insertBefore(li, contactNavLink);
// 	}
// }

// function setCategories() {
// 	const contentSection = document.querySelector(".content-section");

// 	for (let category of categories) {
// 		let section = document.createElement("div");
// 		let sectionLogo = document.createElement("div");

// 		section.id = category.id;
// 		section.classList.add("section-wrapper");
// 		sectionLogo.innerHTML = category.logo;
// 		sectionLogo.classList.add("section-logo");
// 		section.appendChild(sectionLogo);

// 		setProjects(section, category.projects);
// 		setProjectsNavigation(category);

// 		contentSection.appendChild(section);
// 	}
// }

// function setProjects(section, projects) {
// 	for (let project of projects) {
// 		let projectWrapper = document.createElement("div");
// 		let projectImageWrapper = document.createElement("div");
// 		let projectTextContainer = document.createElement("div");
// 		let projectTitle = document.createElement("h2");
// 		let projectDescription = document.createElement("p");
// 		let projectImage = document.createElement("img");
// 		let projectOtherImages = document.createElement("div");
// 		let projectOtherOtherImages = document.createElement("div");

// 		projectWrapper.classList.add("project-wrapper");
// 		projectTextContainer.classList.add("project-text");
// 		projectImageWrapper.classList.add("project-image-wrapper");
// 		projectImage.classList.add("project-image");
// 		projectOtherImages.classList.add("project-other-images");
// 		projectOtherOtherImages.classList.add("project-other-other-images");

// 		projectTitle.innerText = project.name;
// 		projectDescription.innerText = project.description;

// 		if (project.mainImage) {
// 			projectImage.src = project.mainImage;
// 			projectImage.addEventListener("click", ({ target }) =>
// 				toggleModal(true, project, target)
// 			);
// 		}

// 		if (project.otherImages) {
// 			for (let image of project.otherImages) {
// 				let projectImage = document.createElement("img");
// 				projectImage.src = image;
// 				projectOtherImages.appendChild(projectImage);
// 				projectImage.addEventListener("click", ({ target }) =>
// 					toggleModal(true, project, target)
// 				);
// 			}
// 		}

// 		if (project.otherOtherImages) {
// 			for (let image of project.otherOtherImages) {
// 				let projectImage = document.createElement("img");
// 				projectImage.src = image;
// 				projectOtherOtherImages.appendChild(projectImage);
// 				projectImage.addEventListener("click", ({ target }) =>
// 					toggleModal(true, project, target)
// 				);
// 			}
// 		}

// 		projectWrapper.id = replaceTextSpaces(project.name);
// 		projectTextContainer.append(projectTitle, projectDescription);
// 		projectImageWrapper.appendChild(projectImage);
// 		projectWrapper.append(
// 			projectTextContainer,
// 			projectImageWrapper,
// 			projectOtherImages,
// 			projectOtherOtherImages
// 		);
// 		section.appendChild(projectWrapper);
// 	}
// }

// function setProjectsNavigation(category) {
// 	let projectsList = document.createElement("ul");
// 	let categoryLink = document.createElement("a");

// 	categoryLink.classList.add("category-link");
// 	categoryLink.href = `#${category.id}`;
// 	categoryLink.innerText = category.title;

// 	for (let project of category.projects) {
// 		let projectItem = document.createElement("li");
// 		let projectItemLink = document.createElement("a");
// 		projectItemLink.href = `#${replaceTextSpaces(project.name)}`;
// 		projectItemLink.innerText = project.name;
// 		projectItem.appendChild(projectItemLink);
// 		projectsList.appendChild(projectItem);
// 	}

// 	contentNavigation.append(categoryLink, projectsList);
// }

// function toggleModal(boolean, project, target) {
// 	if (boolean) {
// 		modalWrapper.style.display = "flex";
// 		modalImg.alt = project.name;
// 		modalImg.src = target.src;
// 	} else {
// 		modalWrapper.style.display = "none";
// 		modalImg.alt = "";
// 		modalImg.src = "";
// 	}
// }

// function replaceTextSpaces(word) {
// 	return word.replace(/ /g, "_").toLowerCase();
// }

// modalOverlay.addEventListener("click", () => toggleModal(false, null));
// modalCloseBtn.addEventListener("click", () => toggleModal(false, null));

// setMenu();
// setCategories();
