const users = [{
    id: 0,
    name: 'Tom'
},{
    id: 2,
    name: 'Carry'
},{
    id: 3,
    name: 'Bob'
}];


export const getUsers = (req, res, next) => {
    res.status(200).json(users);
};

