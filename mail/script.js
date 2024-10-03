const email_list = []

let user_email = prompt('Typre your email')

if (email_list.includes(user_email)) {
    alert('email accepted')
} else {
    alert('email not accepted')
}