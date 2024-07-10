// console.log("hello");
// Custom Utility function
const createAnElement = (element) => {
	return document.createElement(element);
};

const addText = (element, text) => {
	return (element.innerText = text);
};
const appendChild = (child, parent) => {
	return parent.appendChild(child);
};

const select = (selector) => {
	return document.querySelector(selector);
};

const listen = (element, event, callback) => {
	return element.addEventListener(event, callback);
};
const addAttribute = (element, attribute, content) => {
	return element.setAttribute(attribute, content);
};
const shoppingList = ["milk", "Tea"];

const ol = select("ol");

const displayItems = () => {
	shoppingList.forEach(createAListItem);
};

const createAListItem = (item) => {
	const li = createAnElement("li");
	addText(li, item);
	appendChild(li, ol);
};

listen(document, "DOMContentLoaded", displayItems);
