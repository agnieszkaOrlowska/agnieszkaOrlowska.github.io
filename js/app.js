//initialize serviceworker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
    }
  
//vue stuff
const mainapp = Vue.createApp({
      data() {
        return {
          authenticated: false,
          userLogin: '',
          location: '',
          provider: '',
          service: '',
          cart: [],
        }
      },
      methods: {
        userNotLoggedInError(authenticated) {
          //wyswietla error o tym ze user nie jest zalogowany
          //mozna dodac przycisk ktory przekieruje do logowania i rejestracji
        },
        renderProviders (location) {
          //clearuje liste do ktorej jest przypisany
          //fetchuje dane z firebase
          //tworzy HTMLowa liste za kazdy istniejacy rekord w bazie danych
          //kazdy element ma swoje id (provider)
          //na szczycie listy jest tez przycisk od znajdowania lokacji
          //jesli podano lokacje to przy okazji liczy jak daleko od usera jest dany provider
        },
        checkLocation(){
          //pyta o pozwolenie na uzycie GPS a potem znajduje lokacje usera
          //ALBO renderuje osobny ekran gdzie mozna pinezka zaznaczyc na mapie (ale to trudniejsze)
          //nie wiem czy da sie zrobic to ta biblioteka z wczesniej ale oby bylo simple
        },
        renderServices(provider) {
          //jak wyzej tylko renderuje liste uslug dla danego providera
          //przy okazji pokazuje zdjecie w tle, nazwe, ilosc gwiazdek jaka srednio ma ten provider
          //kazdy element ma swoje id (service)
        },
        renderSingleService(provider, service) {
          //renderuje pojedyncza wybrana usluge
          //mozna tam ustawic date na ktora sie by chcialo zarezerwowac i dodac do koszyka
          //mozna tez wejsc w ekran z recenzjami
        },
        renderReviews(provider, service) { 
          //renderuje liste recenzji dla danej uslugi
          //mozna dodac wlasna recenzje przyciskiem na dole
        },
        renderAddReviewScreen(provider, service){
          //renderuje ekren do wprowadzenia recenzji
          //mozna nacisnac aby otworzyc aparat (za pozwoleniem) i zrobic zdjecie do uploadu
          //mozna zaznaczyc od 1 do 5 gwiazdek
          //mozna wpisac tresc w polu tekstowym
          //potem wysyla dane do bazy danych i wraca do ekranu z recenzjami
        },
        renderCheckout(cart){
          //sczytuje dane z koszyka przechowywanego jako obiekt
          //renderuje liste uslug + info o nich i liczy sume do zaplaty
          //po nacisnieciu reserve daje znac i wraca do ekranu glownego
        },
        renderLogin(authenticated) {
          //jesli authenticated = false, renderuje ekran logowania
          //wysyla zapytanie do Firebase Auth czy user dobrze wpisal a jak nie to opierdala
      },
        renderSignup(authenticated) {
          //jesli authenticated = false, renderuje ekran rejestracji
          //nie wydaje mi sie ze to wazne zeby dokonywala walidacji wiec po prostu przepuszcza co jest do Firebase Auth
    }}})