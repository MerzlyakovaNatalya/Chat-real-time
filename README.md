Результат работы приложения можно посмотреть на хостинге https://myapp-seven-tau.vercel.app/

React-приложение использует встроенный набор инструментов.

1. Установлен npm пакет create-react-app.

2. Стилизация: CSS Modules, styled-components.

3. Роутинг - React Router v6
   Выполнена маршрутизация приложения, с помощью npm пакета react-router-dom.

4. Использована библиотека Redux.

5. Для работы с Middleware установлена библиотека Redux-thunk.

6. Redux Persist берет объект состояния Redux и сохраняет его в постоянное хранилище.  
   
7. Настроена светлая и тёмная тема приложения.

8. Добавлены пакеты Bootstrap и Material UI.

9. Приложение подключено к сервису Firebase 

10. Для работы с запросами использован Fetch API.

На странице **HOME** показана работа запросов данных к API (API тестовое из jsonplaceholder). Для реализации запросов, идёт обращение к фабрике - компонент createApiReducer. Данная фабрика даёт нам возможность сократить написание кода, в ней уже прописаны actions, reducer, selectors. 

На странице **CHAT_REAL_TIME** с помощью сервиса Firebase реализована авторизация пользователей и работа чата в реальном времени Realtime database. Авторизация выполнена через Google, т. е. пользователь авторизуется под своим Google аккаунтом и попадает в чат. С помощью хука сервиса Firebase - useAuthState, получена информация зарегистрирован пользователь или нет. Если пользователь зарегистрирован - вернётся объект с данными, если не нет - вернётся null. Для получения сообщения использован хук сервиса Firebase - useCollectionData. В параметре хука указан запрос по коллекциям firestore.collection("messages") и добавлена сортировка по полю создания сообщения .orderBy("createdAt"). Для отправки сообщения, так же идёт обращение к коллекции firestore.collection("messages") и добавляется метод .add с объектом.

На странице **CHAT_REDUX** продемонстрирована работа Redux и Middleware. При нажатии на "Create chat" в стор попадает объект с полем id и name. При нажатии на выбранный чат, откроется компонент с сообщениями, где можно написать сообщение и отправить. В ответ приходит сообщение от бота. Реализацию, ответа от бота, осуществляет мидлвар sendMessageWithThunk. 

На странице **PROFILE** реализована Аутентификация Firebase (это функция аутентификации пользователей, предоставляемая Firebase в качестве ее серверных служб). Компонент Profile использует библиотеку Redux и сервис Firebase. Компонент Profile даёт возможность пользователю пройти регистрацию или авторизацию для доступа к странице с профилем.

