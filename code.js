// // Задача написать код с наследованием с тремя классами. 

// Код от 12 июля 2023 
// Добавлен формат входа через модальное окно, а именно ввод логина или пароля.
// Чекает пароль и логин в одной проверке через логическое (И) - &
// Создал экземплр класса ClassTeacher в виде объектов: teacher, parent, kid 
// Понял, что делать через класс не правильное решение, нужно делать через экзэмпляр класса в виде объекта. Это правильная тема.
// Дальше фронтенд html css нужно сделать подобие личного кабинета либо что-то другое.

let check_login = prompt("Введите логин: ");
let check_password = prompt("Введите пароль: ");

class ClassTeacher
{

    constructor(name_teacher, user_login, pass_teacher, tscore_object){

        this.t_username = name_teacher; 
        this.t_login = user_login;
        this.t_pass = pass_teacher;
        this.t_score = tscore_object;
    }

    CheckLoginTeacher()
    {
        alert("Введённый логин найден! Авторизация в качестве Учителя."); 
    }

}

class ClassParent
{
    constructor(kidname_parent, name_parent, user_login, pass_parent, pscore_object){
        
        this.p_username = name_parent; 
        this.p_login = user_login;
        this.p_pass = pass_parent;
        this.p_kidname = kidname_parent;
        this.p_score = pscore_object;
        
    }

    CheckLoginParent()
    {
        alert("Введённый логин найден! Авторизация в качестве Родителя."); 
    }
    
}

class ClassKid
{
    constructor(kidname, user_login, pass_kid, kclass_kid, age_kid, score_kid){
        
        this.k_username = kidname; 
        this.k_login = user_login;
        this.k_pass = pass_kid;
        this.k_class = kclass_kid;
        this.k_age = age_kid;
        this.k_score = score_kid;
    }

    CheckLoginKid()
    {
        alert("Введённый логин найден! Авторизация в качестве Ученика."); 
    }

}

// Создаём объект для каждого имеющегося класса 

let teacher = new ClassTeacher("Алексей", "teach_petrov", "petrov1987", {}); // имя, логин, пароль, оценка
let parent = new ClassParent("Иван", "par_ivanov", "parent111", {});
let kid = new ClassKid("Серёжа", "kid_krilov", "sereja2007", {});

// Логины

let username_teach = "teach_petrov"
let username_parent = "par_ivanov"
let username_kid = "kid_krilov"

// Пароли

let password_teach = "petrov1987"
let password_parent = "parent111"
let password_kid = "sereja2007"

if(check_login === username_teach & check_password === password_teach)
{
    teacher.CheckLoginTeacher();
}
else if(check_login === username_parent & check_password === password_parent)
{
    parent.CheckLoginParent();
}
else if(check_login === username_kid & check_password === password_kid)
{
    kid.CheckLoginKid();
}
else
{
    alert("Такого пользователя не существует или пароль не верный!");
}

