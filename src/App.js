import "./App.css";
import "./components/elements/card.css";
import Card from "./components/elements/card.js";

function App() {
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1>наша продукция</h1>
          <div className="header__block">
            <div className="header__busket">
              <p className="header__title-busket">3 товара</p>
              <p className="header__subtitle-busket">на сумму 3 500 ₽</p>
            </div>
            <img className="header__icon-busket" src="images/busket.svg" alt="icon"/>
          </div>
        </header>

        <div className="menu">
          <Card
            url={"images/1.png"}
            title={"Устрицы по рокфеллеровски"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
            }
            price={"2 700 ₽"}
            weight={"/500 г."}
            icon={"images/icon.svg"}
          />
          <Card
            url={"images/2.png"}
            title={"Свиные ребрышки на гриле с зеленью"}
            description={
              "Не следует, однако забывать, что реализация намеченных плановых"
            }
            price={"1 600 ₽"}
            weight={"/750 г."}
            icon={"images/icon.svg"}
          />
          <Card
            url={"images/3.png"}
            title={"Креветки по-королевски в лимонном соке"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            }
            price={"1 820 ₽"}
            weight={"/7шт."}
            icon={"images/icon.svg"}
          />
          <Card
            url={"images/4.png"}
            title={"Устрицы по рокфеллеровски"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            }
            price={"2 700 ₽"}
            weight={"/500 г."}
            icon={"images/icon.svg"}
          />
          <Card
            url={"images/1.png"}
            title={"Устрицы по рокфеллеровски"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
            }
            price={"2 700 ₽"}
            weight={"/500 г."}
            icon={"images/icon.svg"}
          />
          <Card
            url={"images/2.png"}
            title={"Свиные ребрышки на гриле с зеленью"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
            }
            price={"1 600 ₽"}
            weight={"/750 г."}
            icon={"images/icon.svg"}
          />
          <Card
            url={"images/3.png"}
            title={"Креветки по-королевски в лимонном соке"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            }
            price={"1 820 ₽"}
            weight={"/7шт."}
            icon={"images/icon.svg"}
          />
          <Card
            url={"images/4.png"}
            title={"Устрицы по рокфеллеровски"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            }
            price={"2 700 ₽"}
            weight={"/500 г."}
            icon={"images/icon.svg"}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
