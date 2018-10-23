const todoCreator = (value) => {
    return {
        id: new Date().getMilliseconds(),
        task: value,
        completed: false,
        createdDate: ` ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    };
}

export default todoCreator;