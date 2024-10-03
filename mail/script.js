const email_list = ['exmpl@mail.com', 'exmpl2@mail.com', 'exmpl3@gmail.com']

let user_email = prompt('Typre your email')

if (email_list.includes(user_email)) {
    alert('email accepted')
} else {
    alert('email not accepted')
}