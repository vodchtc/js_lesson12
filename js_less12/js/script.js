//1)
async function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}


loadJson('no-such-user.json')
    .catch(alert);

try {
    const response = await loadJson('no-such-user.json');
} catch (e) {
    alert(e);
}

//2)

async function load(url) {
    try {
        const response = await fetch(url);

        if (response.status === 200) {
            const data = response.json();
            console.log(data);
        } else {
            throw new Error(response.status);
        }
    } catch (e) {
        console.log(e)
    }
}