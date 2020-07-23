const user = {
    id: 123,
    name: 'name',
    surname: 'surname',
    profile: {
        color: 'black',
        location: 'myLocation'
    }
};

const id = user.id;
const color = user.profile.color;

const params = { id, color }

// ajax
console.log(params);