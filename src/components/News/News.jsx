import React from 'react';
import s from './News.module.css';

const News = () => {
    return (
        <div>

            {/*<div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Zgd9IlbhDcU" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>*/}
            <div>
                <div><a href='https://www.youtube.com/watch?v=Zgd9IlbhDcU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=1'>01. Уроки, курс, практика "React JS - путь самурая"</a></div>
                <div><a href='https://www.youtube.com/watch?v=WN2LHq3yRwQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=3&t=0s'>02. Уроки React JS (Зачем NodeJS на фронте)</a></div>
                <div><a href='https://www.youtube.com/watch?v=AUi1JT4n8xA&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=4&t=0s'>03. Уроки React JS (Установка NodeJS)</a></div>
                <div><a href='https://www.youtube.com/watch?v=9Jk8SLMl3gI&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=5&t=0s'>04. Уроки React JS (create-react-app)</a></div>
                <div><a href='https://www.youtube.com/watch?v=TPYgQvY9VVQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=6&t=0s'>05. Уроки React JS (SPA: single page application)</a></div>
                <div><a href='https://www.youtube.com/watch?v=CdweQ2F2qBI&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=7&t=0s'>06. Уроки React JS (index.js, App, JSX)</a></div>
                <div><a href='https://www.youtube.com/watch?v=UMw_hbNMIAA&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=8&t=0s'>07. Уроки React JS (что такое Компонента)</a></div>
                <div><a href='https://www.youtube.com/watch?v=lXpPS4wKDfE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=9&t=0s'>08. Уроки React JS (import\export - теория)</a></div>
                <div><a href='https://www.youtube.com/watch?v=VTr3pCutjxg&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=10&t=0s'>09. Уроки React JS (import export наших компонент)</a></div>
                <div><a href='https://www.youtube.com/watch?v=TZUPCqfs8VU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11&t=0s'>10. Уроки React JS (default опасность плагин auto import)</a></div>
                <div><a href='https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=12&t=0s'>11. Уроки React JS (соц. сеть, шаг 1, вёрстка, grid)</a></div>
                <div><a href='https://www.youtube.com/watch?v=00ZNuBIE-pM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=13&t=0s'>12. Уроки React JS (Разбивка на компоненты)</a></div>
                <div><a href='https://www.youtube.com/watch?v=6pAkynDPXEc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=14&t=0s'>13. Уроки React JS (git-репозиторий)</a></div>
                <div><a href='https://www.youtube.com/watch?v=bQ3UPYFHyJ0&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=15&t=0s'>14. Уроки React JS (css-модули, css-modules)</a></div>
                <div><a href='https://www.youtube.com/watch?v=8VOuxijh9_s&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=16&t=0s'>15. Уроки React JS (структура папок, новые компоненты, улучшаем css)</a></div>
                <div><a href='https://www.youtube.com/watch?v=-mDs48HB3II&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=17&t=0s'>16. Уроки React JS (props - важнейшая тема) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=Ps2TiA5dIKc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=18&t=0s'>17. Уроки React JS (остановочка "react за час, часть 1")</a></div>
                <div><a href='https://www.youtube.com/watch?v=AVpodoajaAc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=19&t=0s'>17.x Уроки React JS (инкубатор - теперь и онлайн)</a></div>
                <div><a href='https://www.youtube.com/watch?v=IL1LTYDNAhk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=20&t=0s'>18. Уроки React JS (страница Dialogs) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=5X5ZLWdAnt4&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=21&t=0s'>19. Уроки React JS (route, browser-router, маршрутизация) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=Wm62LRtxomk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=22&t=0s'>20. Уроки React JS (NavLink) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=vcGrFNXy3zk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=23&t=0s'>21. Уроки React JS (Верстаем страницу Диалогов) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=HfGD5xRIiMU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=24&t=0s'>22. Уроки React JS (Route exact) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=DnRvj9A_1ps&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=25&t=0s'>23. Уроки React JS (props для Диалогов) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=M7wWqAsw_iE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=26&t=0s'>24. Уроки React JS (UI - BLL, выносим данные в сторону) - react курсы бесплатно</a></div>
                <div><a href='https://www.youtube.com/watch?v=IG2I3j1vCfQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=27&t=0s'>25. Уроки React JS (метод массива - map) - react курсы бесплатно, 2019</a></div>
                <div><a href='https://www.youtube.com/watch?v=9ic9dq7FLaM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=28&t=0s'>26. Уроки React JS (структура проекта, ещё раз про ui - bll) - react курсы бесплатно, 2019</a></div>
                <div><a href='https://www.youtube.com/watch?v=wNWKFyh34r0&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=29&t=0s'>27. Уроки React JS (component vs render, прокидываем props через Route) react курсы бесплатно, 2019</a></div>
                <div><a href='https://www.youtube.com/watch?v=BygaoztCh94&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=30&t=0s'>28. Уроки React JS (выносим данные в index.js) - react курсы бесплатно, 2019</a></div>
                <div><a href='https://www.youtube.com/watch?v=GW5PwlzXBDc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=31&t=0s'>29. Уроки React JS (упаковываем данные в state) - react курсы бесплатно, 2019</a></div>
                <div><a href='https://www.youtube.com/watch?v=5js6RxcmxOA&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=32&t=0s'>30. Уроки React JS (остановочка "react за час, часть 2")</a></div>
                <div><a href='https://www.youtube.com/watch?v=VkHcOHWSaNQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=33&t=0s'>31. Уроки React JS - onClick, ref, VirtualDOM</a></div>
                <div><a href='https://www.youtube.com/watch?v=OtMEWJ-3d18&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=34&t=0s'>32. Уроки React JS - прокидываем callback через props</a></div>
                <div><a href='https://www.youtube.com/watch?v=H6EEnnLvFYo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=35&t=0s'>33. Уроки React JS - добавление поста на стену (зачатки FLUX-концепции)</a></div>
                <div><a href='https://www.youtube.com/watch?v=H6EEnnLvFYo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=35&t=0s'>34. Уроки React JS - Вынос мозга (FLUX-круговорот на каждый символ)</a></div>
                <div><a href='https://www.youtube.com/watch?v=iN6QXbHedQc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=37&t=0s'>35. Уроки, Курс React JS - callback, subscribe, observer</a></div>
                <div><a href='https://www.youtube.com/watch?v=s1n24A2Xr0M&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=38&t=0s'>36. Уроки, Курс React JS - про ООП поверхностно (зачем нам объекты)</a></div>
                <div><a href='https://www.youtube.com/watch?v=Bq_tmt-hRn0&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=39&t=0s'>37. Уроки, Курс React JS - store, state, ООП, рефакторинг</a></div>
                <div><a href='https://www.youtube.com/watch?v=AyCBG4LcUSA&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=40&t=0s'>38. Уроки, Курс React JS - dispatch и action</a></div>
                <div><a href='https://www.youtube.com/watch?v=EW8cEDyYAYM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=41&t=0s'>39 - Уроки, Курс React JS - action creator, action type</a></div>
                <div><a href='https://www.youtube.com/watch?v=TUcn_vPHfxU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=42&t=0s'>40 - React JS Практика - добавление Сообщения</a></div>
                <div><a href='https://www.youtube.com/watch?v=GPabDsMyceU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=43&t=0s'>41 - React JS Практика - reducer (почти redux)</a></div>
                <div><a href='https://www.youtube.com/watch?v=IUEkRTov_E4&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=44&t=0s'>42 - React JS Практика - Redux</a></div>
                <div><a href='https://www.youtube.com/watch?v=cbnExb3GSFM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=45&t=0s'>43 React JS Практика - container component (контейнерная компонента)</a></div>
                <div><a href='https://www.youtube.com/watch?v=Q_UvAaKSK90&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=46&t=0s'>44 - React JS Практика - Context API</a></div>
                <div><a href='https://www.youtube.com/watch?v=SYaHe-lP7eY&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47&t=0s'>45 - React JS практика - connect, mapStateToProps, mapDispatchTooProps</a></div>
                <div><a href='https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=48&t=0s'>46 - React JS практика - копия глубокая vs поверхностная (deep copy vs shallow copy)</a></div>
                <div><a href='https://www.youtube.com/watch?v=L2SSsOmqiig&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=49&t=0s'>47 - React JS практика - Делаем копию состояния в ProfileReducer</a></div>
                <div><a href='https://www.youtube.com/watch?v=R3ZsEyc4BCo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=50&t=0s'>48 - React JS практика - Делаем копию состояния в DialogReducer</a></div>
                <div><a href='https://www.youtube.com/watch?v=ceSZUZZaW30&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=51&t=0s'>49 - React JS практика - страница пользователей</a></div>
                <div><a href='https://www.youtube.com/watch?v=c34P8-9YVMQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=52&t=0s'>50 - React JS практика - REST API (краткая теория)</a></div>
                <div><a href='https://www.youtube.com/watch?v=n9op6xgJMFo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=53&t=0s'>51 - React JS практика - Users API</a></div>
                <div><a href='https://www.youtube.com/watch?v=O7o89_1sM5Y&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=54&t=0s'>52 - React JS практика - Side Effect</a></div>
                <div><a href='https://www.youtube.com/watch?v=vO63wxg4aKY&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=55&t=0s'>53 - React JS практика - классовый компонент (extends React.Component)</a></div>
                <div><a href='https://www.youtube.com/watch?v=auAtFC5nfTs&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=56&t=0s'>54 - React JS практика - жизненный цикл, life cycle methods, componentDidMount</a></div>
                <div><a href='https://www.youtube.com/watch?v=ap8HxJPwJhY&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=57&t=0s'>55 - React JS практика - pagination, постраничный вывод пользователей</a></div>
                <div><a href='https://www.youtube.com/watch?v=D0kB1IvCKrI&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=58&t=0s'>56 - React JS практика - Презентационная и Контейнерная компоненты</a></div>
                <div><a href='https://www.youtube.com/watch?v=qE8ThPt1EIM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=59&t=0s'>57 - React JS - пример Preloader, loader-gif, isFetching indication</a></div>
                <div><a href='https://www.youtube.com/watch?v=_LZXisuCluw&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=60&t=0s'>58 - React JS - mapDispatchToProps лайф-хак</a></div>
                <div><a href='https://www.youtube.com/watch?v=MM02LsZqssQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=61&t=0s'>59 - React JS - profile page, ajax, api</a></div>
                <div><a href='https://www.youtube.com/watch?v=e6SpHkb0E3I&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=62&t=0s'>60 - React JS - withRouter, props.match.params</a></div>
                <div><a href='https://www.youtube.com/watch?v=b3pU3hsJlNk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=63&t=0s'>61 - React JS - cookie, login в теории, auth/me</a></div>
                <div><a href='https://www.youtube.com/watch?v=oLIrtUrm5us&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=64&t=0s'>62 - React JS - практика, follow-unfollow api</a></div>
                <div><a href='https://www.youtube.com/watch?v=tZahQsOc9Jk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=65&t=0s'>63 - React JS - практика, DAL, axios.create</a></div>
                <div><a href='https://www.youtube.com/watch?v=iobMksCYGHE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=66&t=0s'>64 - React JS - практика, button disabled (follow\unfollow)</a></div>
                <div><a href='https://www.youtube.com/watch?v=eWdnjfRu9Io&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=67&t=0s'>65 - React JS - урок redux-thunk в деталях (теория)</a></div>
                <div><a href='https://www.youtube.com/watch?v=dtKX3JyeVts&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=68&t=0s'>66 - React JS - урок redux-thunk в деталях (практика)</a></div>
                <div><a href='https://www.youtube.com/watch?v=18hAMlMkQks&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=69&t=0s'>67 - React JS - урок redux-thunk 2 в деталях (практика)</a></div>
                <div><a href='https://www.youtube.com/watch?v=_X3dVadZp2U&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=70&t=0s'>68 - React JS - Redirect</a></div>
                <div><a href='https://www.youtube.com/watch?v=7W4PD4BN3eY&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=71&t=0s'>69 - React JS - High Order Component (hoc)</a></div>
                <div><a href='https://www.youtube.com/watch?v=tf4E6tw8ZVw&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=72&t=0s'>70 - React JS - функция compose</a></div>
                <div><a href='https://www.youtube.com/watch?v=78ak5Jqmh9g&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=73&t=0s'>71 - React JS - setState, local state</a></div>
                <div><a href='https://www.youtube.com/watch?v=lrP3mV9cNF4&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=74&t=0s'>72 - React JS - обновляем create-react-app</a></div>
                <div><a href='https://www.youtube.com/watch?v=1faxVHNBnsU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=75&t=0s'>73 - React JS - http put, local state</a></div>
                <div><a href='https://www.youtube.com/watch?v=wcwG-pofoZk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=76&t=0s'>74 - React JS - componentDidUpdate</a></div>
                <div><a href='https://www.youtube.com/watch?v=yhBYEM3VDTk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=77&t=0s'>75 - React JS - redux-form введение (login)</a></div>
                <div><a href='https://www.youtube.com/watch?v=FCvOFaqvYPQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=78&t=0s'>76 - React JS - redux-form опять про базовые вещи</a></div>
                <div><a href='https://www.youtube.com/watch?v=WCNuRH66lEQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=79&t=0s'>77 - React JS - redux-form field validation (валидация, ошибки). Осторожно Замыкание!</a></div>
                <div><a href='https://www.youtube.com/watch?v=oWeSh6-Mrvg&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=80&t=1s'>78 - React JS - login и logout api</a></div>
                <div><a href='https://www.youtube.com/watch?v=nvhFGeSrWx0&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=81&t=0s'>79 - React JS - stopSubmit (redux-form)</a></div>
                <div><a href='https://www.youtube.com/watch?v=GFN1D81sBEw&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=82&t=0s'>80 - React JS - инициализация приложения</a></div>
                <div><a href='https://www.youtube.com/watch?v=qzxL8qdPMgU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=83&t=0s'>81 - React JS - селекторы (reselect part 1)</a></div>
                <div><a href='https://www.youtube.com/watch?v=_jyrQh0ZdTA&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=84&t=0s'>82 - React JS - mapStateToProps (reselect часть 2)</a></div>
                <div><a href='https://www.youtube.com/watch?v=nDh92Vnf3_k&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=85&t=0s'>83 - React JS - подключаем reselect (reselect часть 3)</a></div>
                <div><a href='https://www.youtube.com/watch?v=EbqQg0K4wbo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=86&t=0s'>84 - React JS - hook, useState, хуки</a></div>
                <div><a href='https://www.youtube.com/watch?v=P1Y8GFJa_Io&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=87&t=16s'>85 - React JS - hook, useEffect, хуки</a></div>
                <div><a href='https://www.youtube.com/watch?v=rsW9_UtF4jk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=88&t=0s'>86 - Virtual DOM - React JS</a></div>
                <div><a href='https://www.youtube.com/watch?v=YEqCI9NMoLI&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=89&t=0s'>87 - shouldComponentUpdate, PureComponent, memo - React JS</a></div>
                <div><a href='https://www.youtube.com/watch?v=KU81NnNcjmw&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=90&t=0s'>88 - pure function (чистая функция) - React JS</a></div>
                <div><a href='https://www.youtube.com/watch?v=fJlx8B9cU7w&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=91&t=0s'>89 - Тесты, jest, tdd, тестируем reducer - React JS</a></div>
                <div><a href='https://www.youtube.com/watch?v=JtbSOJKRJAI&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=92&t=0s'>90 - redux-ducks рефакторинг - React JS</a></div>
                <div><a href='https://www.youtube.com/watch?v=K2DB3B9PU9Q&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=93&t=0s'>91 - chrome extensions для react и redux - React JS</a></div>
                <div><a href='https://www.youtube.com/watch?v=Kyc_Z_2b2Hc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=94&t=0s'>92 - тестриуем компоненты, react-test-renderer - React JS</a></div>
                <div><a href='https://www.youtube.com/watch?v=heDew37aWb0&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=95&t=0s'>93 - paginator, постраничный вывод - Практика ReactJS</a></div>
                <div><a href='https://www.youtube.com/watch?v=Vok-FQDjoiM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=96&t=0s'>React.lazy и React.Suspense, зачем?94 - ReactJS</a></div>
                <div><a href='https://www.youtube.com/watch?v=weofpA94SP0&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=97&t=0s'>95 - ReactJS + github pages, разворачиваем наш проект deploy</a></div>
                <div><a href='https://www.youtube.com/watch?v=-tDhjScH_0s&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=98&t=0s'>97 - ReactJS - обновление профиля</a></div>
                <div><a href='https://www.youtube.com/watch?v=fnzO0U1mSb8&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=99&t=0s'>96 - ReactJS загрузка изображения, shouldComponentUpdate fix</a></div>
                <div><a href='https://www.youtube.com/watch?v=1hweJPQ8TgE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=100&t=0s'>98 - ReactJS - captcha</a></div>
                <div><a href='https://www.youtube.com/watch?v=BhwoKN1E3C8&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=101&t=0s'>99 - ReactJS - try-catch, router switch, classnames</a></div>
                <div><a href='https://www.youtube.com/watch?v=0AohM_oOjBc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=102&t=0s'>100 - Теория ReactJS + Redux за 90 минут</a></div>
            </div>

        </div>




    );
}

export default News;