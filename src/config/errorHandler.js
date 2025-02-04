export const errorHandler = (error) => {
    if (error?.response) {
        if (error?.response?.status === 401) {
            // setTimeout(() => {
            //     localStorage.clear()
            //     window.location.replace('/login')
            // }, 1000);
        }
        return error?.response?.data?.message;
    } else if (error?.request) {
        return error?.message;
    } else {
        return 'Something went wrong';
    }
};
