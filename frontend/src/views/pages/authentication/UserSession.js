var UserSession = (() => {

    const to = (user) => {
        return {
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            password: user.passord,
            phone: user.phone,
            age: user.age,
            prefession: user.prefession,
            niveau: user.niveau,
            role: user.role,
            tests: user.tests,
            listVocabulaires: user.listVocabulaires
        }
    }

    var getUser = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user)
            return to(user)
    };

    var setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
    };

    var removeUser = () => {
        localStorage.removeItem('user')
    }

    return {
        getUser,
        setUser,
        removeUser
    }

})();

export default UserSession;