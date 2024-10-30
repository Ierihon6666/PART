
import React from 'react';
import './App.css'; // Импорт стилей

const Resume = () => {
    return (
        <div className="resume-container">
            <img src="https://avatars.mds.yandex.net/i?id=7a44607fb145548d167fa2530d6aaaaf_l-4881086-images-thumbs&n=13" alt="Photo" className="profile-photo"/>
            <div className="contacts">
            <h2 className="section-title"><span role="img" aria-label="name">☎ </span>Контакты</h2>
                <p>Email: example@mail.com</p>
                <p>Телефон: +123456789</p>
            </div>
            <div className="section">
                <h2 className="section-title"><span role="img" aria-label="name">👤</span> ФИО и дата рождения</h2>
                <p>Иванов Иван Иванович</p>
                <p>Дата рождения: 01.01.1990</p>
            </div>
            <div className="section">
                <h2 className="section-title"><span role="img" aria-label="education">🎓</span> Образование</h2>
                <p>Бакалавр прикладной математики, МГУ, 2012</p>
            </div>
            <div className="section"> 
                <h2 className="section-title"><span role="img" aria-label="skills">🛠️</span> Навыки</h2> 
                <ul> 
                    <li>JavaScript</li> 
                    <li>React</li> 
                    <li>HTML/CSS</li> 
                    <li>Node.js</li> 
                    <li>Git</li> 
                </ul> 
            </div>
            <div className="section">
                <h2 className="section-title"><span role="img" aria-label="experience">💼</span> Опыт работы</h2>
                <p>Frontend-разработчик в XYZ Company (2015 - 2020)</p>
                <p>Веб-разработчик в ABC Inc. (2020 - настоящее время)</p>
            </div>

            <div className="section">
                <h2 className="section-title"><span role="img" aria-label="about">ℹ️</span> О себе</h2>
                <p>Командами, работаю над интересными проектами, стремлюсь к саморазвитию и освоению новых технологий.</p>
            </div>
        </div>
    );
};

export default Resume;

