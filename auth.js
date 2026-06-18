let users = JSON.parse(localStorage.getItem("users")) || [];

function registerUser(username, password) {
    const exists = users.find(u => u.username === username);

    if (exists) {
        alert("Utilizador já existe!");
        return false;
    }

    const newUser = {
        username: username,
        password: password,
        role: "user" // default
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registo feito com sucesso!");
    return true;
}


function loginUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        alert("Login inválido!");
        return false;
    }

    localStorage.setItem("userLogado", JSON.stringify(user));

    alert("Login efetuado!");
    return true;
}


function logout() {
    localStorage.removeItem("userLogado");
    window.location.href = "login.html";
}


function getUser() {
    return JSON.parse(localStorage.getItem("userLogado"));
}