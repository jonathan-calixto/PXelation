export const login = user => {
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data: {user}
    });
};

export const signup = user => {
    return $.ajax({
        method: 'post',
        url: 'api/users',
        data: {user}
    });
};

export const logout = () => {
    return $.ajax({
        method: 'delete',
        url: '/api/session'
    });
};

export const demoUser = () => {
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data:{
            user: {
                username: 'nathan0922',
                password: '123456'
            }
        }
    });
};