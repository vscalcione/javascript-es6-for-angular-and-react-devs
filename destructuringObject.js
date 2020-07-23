const first = () => {
    const user = {
        first: 'first',
        last: 'last',
        preference: 'red'
    };
    
    // const first = user.first;
    // const last = user.last;
    //const { first: f, last: l } = user;

    let { first: f, preference: pref = 'black'} = user;
    if (!pref) {
        pref = 'black';
    }
    console.log(`${f} ${pref}`);
}

const second = () => {
    const user2 = {
        name: 'name',
        surname: 'surname',
        profile: {
            color: 'red',
            location: {
                lat: 15, lng: 12
            },
        }
    };
    
    const { profile: { location: { lat, lng, zoom = 5 } } } = user2;
    console.log(lat, lng, zoom);
}

const third = () => {
    const user3 = {
        name: 'name', 
        surname: 'surname',
        profile: {
            color: 'red',
            location: { lat: 15, lng: 12 },
        }
    };
    
    const {
        profile: {
            location: {
                lat: lt, lng: lg, zoom1 = 5
            }
        }
    } = user3;
    
    const params = { lt, lg, zoom1 };
    console.log(params);
    
}

first();
second();
third();