const firstPart = () => {
    const user = {
        first: 'first',
        last: 'last',
        preference: 'red'
    };
    
    // const first = user.first;
    // const last = user.last;
    //const { first: f, last: l } = user;
    
    let { first: f, preference: pref = 'black'} = user;
    if (!preference) {
        preference = 'black';
    }
    console.log(`${f} ${pref}`);
}

const secondPart = () => {
    
}

