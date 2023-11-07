// form data validation ....................
function validateName(name) {
    if (!name) {
        return 'Name is required*';
    }
    return /^[A-Za-z\s]{1,30}$/.test(name)
        ? ''
        : 'Name should only contain alphabets and not exceed 30 characters.';
}

function validateEmail(email) {
    if (!email) {
        return 'Email is required*';
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ''
        : 'Invalid email format.';
}

function validateCollege(college) {
    if (!college) {
        return 'College is required*';
    }
    return /^[A-Za-z\s]{1,50}$/.test(college)
        ? ''
        : 'College name should only contain alphabets and not exceed 50 characters.';
}

function validateIndianNumber(phoneNumber) {
    if (!phoneNumber) {
        return 'Phone Number is required*';
    }
    return /^[789]\d{9}$/.test(phoneNumber)
        ? ''
        : 'Invalid number.';
}

function validatePassingYear(passingYear) {
    if (!passingYear) {
        return 'Passing Year is required*';
    }
    return '';
}

function validateAboutOpportunity(aboutOpportunity) {
    if (!aboutOpportunity) {
        return 'This is required field*';
    }
    return '';
}

function validateResume(resumeFile) {
    if (resumeFile) {
        if (resumeFile.size > 150 * 1024) {
            return 'Resume file size should be less than 150KB.';
        }
    }
    return '';
}

function showLoadingOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
}
function hideLoadingOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
}
// submit for apply page....................
submit.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;
    const phoneNumber = document.getElementById('phone').value;
    const passingYear = document.getElementById('year').value;
    const aboutOpportunity = document.getElementById('about-opportunity').value;
    const resumeFile = document.getElementById("resume").files[0];

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const collegeError = document.getElementById('collegeError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const passingYearError = document.getElementById('yearError');
    const opportunityError = document.getElementById('opportunityError');
    const resumeError = document.getElementById('resumeError');

    nameError.textContent = '';
    emailError.textContent = '';
    collegeError.textContent = '';
    phoneNumberError.textContent = '';
    passingYearError.textContent = '';
    opportunityError.textContent = ' ';
    resumeError.textContent = '';

    const nameErrorMessage = validateName(name);
    const emailErrorMessage = validateEmail(email);
    const collegeErrorMessage = validateCollege(college);
    const numberErrorMessage = validateIndianNumber(phoneNumber);
    const yearErrorMessage = validatePassingYear(passingYear);
    const opportunityErrorMessage = validateAboutOpportunity(aboutOpportunity);
    const resumeErrorMessage = validateResume(resumeFile);

    if (nameErrorMessage) {
        nameError.textContent = nameErrorMessage;
        event.preventDefault();
        return;
    }

    if (emailErrorMessage) {
        emailError.textContent = emailErrorMessage;
        event.preventDefault();
        return;
    }

    if (collegeErrorMessage) {
        collegeError.textContent = collegeErrorMessage;
        event.preventDefault();
        return;
    }

    if (yearErrorMessage) {
        passingYearError.textContent = yearErrorMessage;
        event.preventDefault();
        return;
    }

    if (opportunityErrorMessage) {
        opportunityError.textContent = opportunityErrorMessage;
        event.preventDefault();
        return;
    }

    if (numberErrorMessage) {
        phoneNumberError.textContent = numberErrorMessage;
        event.preventDefault();
        return;
    }

    if (resumeErrorMessage) {
        resumeError.textContent = resumeErrorMessage;
        event.preventDefault();
        return;
    }

    const videoFile = videoInput.files[0];
    if (videoFile) {
        if (videoFile.size > 100 * 1024 * 1024) {
            alert("Video file size should be less than 100MB.");
            videoInput.value = "";
            event.preventDefault();
        }
    };
    