# Rossmann Test App

Aplikacja testowa do cwiczen z automatyzacji testow E2E.

Symulacja prostego sklepu internetowego z produktami drogeryjnymi, zbudowana w czystym HTML/CSS/JS (bez frameworkow i build toolow).

## Uruchomienie

```bash
git clone https://github.com/patrykomiotek/ross-test-app
cd ross-test-app
npm install
npm run start
```

```bash
npx serve . -l 8080
```

Nastepnie otworz przegladarke pod adresem: http://localhost:8080

## Dane logowania

| Email               | Haslo      | Rola          |
| ------------------- | ---------- | ------------- |
| test@rossmann.pl    | Test1234   | Tester        |
| admin@rossmann.pl   | Admin5678  | Administrator |

## Strony i funkcjonalnosci

### 1. `index.html` - Logowanie
- Formularz logowania (email + haslo)
- Checkbox "Zapamietaj mnie"
- Link "Nie pamietam hasla"
- Walidacja danych i komunikat bledu
- Przekierowanie na dashboard po zalogowaniu

### 2. `dashboard.html` - Lista produktow
- Spersonalizowane powitanie z data
- Sekcja "Polecane dla Ciebie"
- Siatka 15 produktow drogeryjnych
- Filtrowanie po kategoriach (Pielegnacja, Higiena, Makijaz, Zdrowie)
- Wyszukiwarka produktow
- Sortowanie (cena rosnaco/malejaco, nazwa A-Z)
- Dodawanie do koszyka z powiadomieniem toast
- Ikona koszyka z badge'em (liczba produktow)

### 3. `product.html` - Szczegoly produktu
- Pelne informacje o produkcie
- Selektor ilosci
- Opinie klientow z ocenami gwiazdkowymi
- Sekcja "Podobne produkty"
- Nawigacja breadcrumb

### 4. `cart.html` - Koszyk
- Lista produktow w koszyku
- Edycja ilosci (+/-)
- Usuwanie produktow
- Podsumowanie: produkty, dostawa, razem
- Darmowa dostawa powyzej 50 zl
- Przycisk "Przejdz do kasy" (modal z potwierdzeniem)
- Stan pustego koszyka

## Wyzwania testowe (celowe)

Aplikacja zawiera celowo zroznicowane podejscia do selekcji elementow, aby demonstrowac realne wyzwania automatyzacji testow:

1. **Mieszane selektory** - niektorych elementow maja `data-testid`, inne maja tylko dynamicznie wygladajace klasy CSS (np. `btn-primary-x7k2`, `card-wrapper-m3p1`), a jeszcze inne maja generyczne klasy (`form-group`)
2. **Dynamiczna tresc** - spersonalizowane powitanie, rekomendacje, daty
3. **Operacje asynchroniczne** - symulowane opoznienia ladowania (setTimeout)
4. **Zarzadzanie stanem** - dane w localStorage (sesja, koszyk)
5. **Powiadomienia toast** - pojawiaja sie i znikaja automatycznie
6. **Okna modalne** - potwierdzenie zamowienia
7. **Walidacja formularzy** - logowanie z obsluga bledow
8. **Formatowanie cen** - waluta PLN (zl)
9. **Stany puste** - pusty koszyk, brak wynikow wyszukiwania
10. **Filtrowanie i wyszukiwanie** - kombinacja filtrow kategorii i frazy
