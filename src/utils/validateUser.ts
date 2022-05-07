export const validateUser = (userName: string) => {
    const hasInvalidCharacters = /[^ A-Za-zÀ-Úà-ú]+/.test(userName)
    const isFullName = userName.trim().split(" ").length > 1;
    const isUserValid = !hasInvalidCharacters && isFullName

    return isUserValid
}