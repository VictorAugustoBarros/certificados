import request from './request';

export async function signIn(carteira, password) {
    localStorage.removeItem('token');

    const token = await request('POST', '/login_user', {
        carteira,
        password
    });

    if (token["values"]["_id"]){
        localStorage.setItem('token', token["values"]["_id"]);
        return token["values"]["_id"]
    }
    return false
}

export function signOut() {
    localStorage.removeItem('token');
}

export function isSignedIn() {
    let token = localStorage.getItem('token');
    if (token){
        return true;
    }
    return null
}