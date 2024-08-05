const fnameInput = document.getElementById("fname");
const fnameError = document.getElementById("fname_error");
const dobInput = document.getElementById("dob");
const dobError = document.getElementById("dob_error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email_error");
const contactInput = document.getElementById("contact");
const contactError = document.getElementById("contact_error");
const citizenshipInput = document.getElementById("citizenship");
const citizenshipError = document.getElementById("citizenship_error");
const genderInput = document.querySelectorAll('input[name="gender"]');
const genderError = document.getElementById("gender_error");
const jobForm = document.getElementById("jobForm");
const save = document.getElementById("save");
const radioButtons = document.querySelectorAll('input[type="radio"][name="gender"]');

const savedFormData = localStorage.getItem("formData");

if (savedFormData) {
	const formData = JSON.parse(savedFormData);
	console.log(localStorage.getItem("formData"));

	jobForm.name.value = formData.name || "";
	jobForm.email.value = formData.email || "";
	jobForm.message.value = formData.message || "";
}

document.getElementById("menuBtn").addEventListener("click", function () {
	const mobileMenu = document.getElementById("mobileMenu");
	mobileMenu.classList.toggle("hidden");
});

function toggleSubmitButton() {
	const checkbox = document.getElementById("agree");
	const submitButton = document.getElementById("submit");

	if (fnameInput.value === "" && emailInput.value === "" && contactInput.value === "") {
		submitButton.disabled = true;
	} else if (!checkbox.checked) {
		submitButton.disabled = true;
	} else {
		submitButton.disabled = false;
	}
}

function countCharacters() {
	const textarea = document.getElementById("message");
	const charCount = document.getElementById("charCount");
	const message = textarea.value;
	if (message === "") {
		charCount.textContent = "500 characters remaining";
	} else {
		charCount.textContent = 500 - message.length + "/500 characters remaining";
	}
}

document.getElementById("fname").addEventListener("focusout", function (event) {
	let valid = true;
	if (fnameInput.value.trim() === "") {
		fnameError.querySelector("span").textContent = "First name is required";
		valid = false;
	} else {
		valid = true;
	}
});

document.getElementById("contact").addEventListener("focusout", function (event) {
	let valid = true;
	if (contactInput.value.trim() === "") {
			contactError.querySelector("span").textContent = "Contact number should contain only numbers";

		valid = false;
	} else {
		contactError.querySelector("span").textContent = "";
		valid = true;
	}
});

document.getElementById("email").addEventListener("focusout", function (event) {
	let valid = true;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (!emailRegex.test(emailInput.value)) {
		valid = false;
		emailError.querySelector("span").textContent = "Valid email id is required";
	}
});

document.getElementById("male").addEventListener("focusout", function () {
	// Check if at least one radio button is selected
	const isSelected = Array.from(radioButtons).some((radio) => radio.checked);

	// Display an error message if no radio button is selected
	if (!isSelected) {
		genderError.style.display = "block";
		genderError.querySelector("span").textContent = "Please select a gender.";
	} else {
		genderError.style.display = "none";
		genderError.querySelector("span").textContent = "";
	}
});
document.getElementById("female").addEventListener("focusout", function () {
	// Check if at least one radio button is selected
	const isSelected = Array.from(radioButtons).some((radio) => radio.checked);

	// Display an error message if no radio button is selected
	if (!isSelected) {
		genderError.style.display = "block";
		genderError.querySelector("span").textContent = "Please select a gender.";
	} else {
		genderError.style.display = "none";
		genderError.querySelector("span").textContent = "";
	}
});
document.getElementById("other").addEventListener("focusout", function () {
	// Check if at least one radio button is selected
	const isSelected = Array.from(radioButtons).some((radio) => radio.checked);

	// Display an error message if no radio button is selected
	if (!isSelected) {
		genderError.style.display = "block";
		genderError.querySelector("span").textContent = "Please select a gender.";
	} else {
		genderError.style.display = "none";
		genderError.querySelector("span").textContent = "";
	}
});

document.getElementById("day").addEventListener("focusout", function () {
	// Check if at least one radio button is selected
	const isSelected = Array.from(radioButtons).some((radio) => radio.checked);

	// Display an error message if no radio button is selected
	if (!isSelected) {
		genderError.style.display = "block";
		genderError.querySelector("span").textContent = "Please select a gender.";
	} else {
		genderError.style.display = "none";
		genderError.querySelector("span").textContent = "";
	}
});

document.getElementById("file").addEventListener("focusout", function (event) {
	let valid = true;

	if (!fileInput.value.match(/\.(pdf)$/i)) {
		valid = false;
		fileError.querySelector("span").textContent = "Invalid file type. Only PDF file is allowed.";
	}
});

document.getElementById("dob").addEventListener("focusout", function (event) {
	let valid = true;
	if (dobInput.value === "") {
		dobError.querySelector("span").textContent = "Date is required";
		valid = false;
	} else {
		dobError.querySelector("span").textContent = "";
		valid = true;
	}
});
