var _a;
// listning element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilepicture');
    // type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // **
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquepath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // profile element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // creat resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n        // ".concat(profilePictureURL ? "<img src=\"$(profilePictureURL)\" alt='profilePicture' class='profilePicture'>" : "", "\n            ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" style=\"width: 150px; height: 150px; object-fit: cover;\">") : "", "\n\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Phone number:</strong> ").concat(phone, " </p>\n    \n\n        <h3>education</h3>\n        <p>").concat(education, "</p>\n\n\n        <h3>experience</h3>\n        <p>").concat(experience, "</p>\n\n\n\n        <h3>skills</h3>\n        <p>").concat(skills, "</p>\n\n\n");
        var downloadlink = document.createElement('a');
        downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadlink.download = uniquepath;
        downloadlink.textContent = 'download your 2024 resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadlink);
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
