// listning element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault()



    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement


    // type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    // **
    const usernameElement = document.getElementById(
        "username"
    ) as  HTMLInputElement;



if(profilePictureInput  && nameElement && emailElement  && phoneElement  && educationElement && experienceElement && skillsElement && usernameElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    const username =  usernameElement.value;
    const uniquepath =`resumes/${username.replace(/\s+/g, '_')}_cv.html`







// profile element
const profilePictureFile =  profilePictureInput.files?.[0]
const profilePictureURL =profilePictureFile ? URL.createObjectURL(profilePictureFile):"";





    
    // creat resume output
    const resumeOutput =`
    <h2>Resume</h2>
        // ${profilePictureURL ?`<img src="$(profilePictureURL)" alt='profilePicture' class='profilePicture'>`:""}
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" style="width: 150px; height: 150px; object-fit: cover;">` : ""}

    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone number:</strong> ${phone} </p>
    

        <h3>education</h3>
        <p>${education}</p>


        <h3>experience</h3>
        <p>${experience}</p>



        <h3>skills</h3>
        <p>${skills}</p>


`;

const downloadlink =document.createElement('a')
downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadlink.download = uniquepath;
downloadlink.textContent = 'download your 2024 resume'

const resumeOutputElement = document.getElementById('resumeOutput')

if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;

    resumeOutputElement.appendChild(downloadlink)
}else{
    console.error('the resume output element are missing')
}



   
}else{
    console.error('one or more output element are missing')
}

})