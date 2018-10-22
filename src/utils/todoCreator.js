const todoCreator = (value) => {
    return {
        id: new Date().getMilliseconds(),
        task: value,
        completed: false,
    };
}

export default todoCreator;