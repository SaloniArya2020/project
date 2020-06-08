const searchUser = document.getElementById('searchUser');

const gitHub = new GitHub;

const ui = new UI;

searchUser.addEventListener('keyup',(e)=>{
    const searchInp= e.target.value;

    if(searchInp!==''){
        gitHub.getUser(searchInp)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User Not Found','alert alert-danger')
            }else{
                ui.showProfile(data.profile);
                ui.showRepo(data.repos);
            }
        })
    }else{
        ui.hideProfile();
    }
   
        
});
