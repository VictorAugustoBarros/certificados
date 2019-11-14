const baseURL = 'http://localhost:4001';

function getHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...token && {
            'Authorization': `Bearer ${token}`
        }
    };
}

async function request(method, url, body) {
    const options = {
        method,
        headers: getHeaders(),
        ...(method !== 'GET') && {
            body: JSON.stringify(body)
        }
    };
    return await fetch(baseURL + url, options)
        .then(res => {
            if (res){
                return res.json();
            }
            return res

        }).catch(err => {
            // eslint-disable-next-line no-console
            console.log(err);
            return err
        });
}

export {request as default, request, getHeaders};