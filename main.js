const LinksSocialMedia = {
  github: 'PPedroSouza',
  youtube: 'jakelinygracielly',
  facebook: 'pedrinho.olegario',
  instagram: 'olegariopredo',
  twitter: 'pepesouzz'
}

function changeSocialMedia() {
  /* DOM & textContent*/
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

// // ARROW FUNCTIONS
// function nomeFuncao(argumentos) {
//   //code
// }

// //elimina a função; é anônima; n é possível chamar como uma function
// argumentos => {

// }
// //mais de um argumento syntax
// (argumento, argumento2) => {
//
// }
