
import React, { useEffect, useState } from 'react';
import './App.css';
import wave from './img/wave.png';
import Lottie from 'lottie-react';
import travelAnimation from './lottie/travel.json';
import AviasalesWidget from './AviasalesWidget';
import SletayRuWidget from './SletayRuWidget';
import BolshayaStranaWidget from './BolshayaStranaWidget';
import TravelataWidget from './TravelataWidget';
import YandexWidget from './YandexWidget';
import HotellookWidget from './HotellookWidget';
import OtelloWidget from './OtelloWidget';
import CompensairWidget from './CompensairWidget';
import OstrovokWidget from './OstrovokWidget';
import SanatoriumWidget from './SanatoriumWidget';
import CruisesWidget from './CruisesWidget'
import WorldCruisesWidget from './WorldCruisesWidget';
import EcoWidget from './EcoWidget';
import SutochnoWidget from './SutochnoWidget';
import RentalWidget from './RentalWidget';




const menuItems = [
  {
    icon: 'icons/suitcase.png',
    label: 'Турпакеты',
    hint: 'Готовые туры с перелётом и проживанием по выгодной цене.'
  },
  {
    icon: 'icons/airplane.png',
    label: 'Авиаперелёты',
    hint: 'Поиск и бронирование авиабилетов по лучшим тарифам.'
  },
  {
    icon: 'icons/hotel.png',
    label: 'Отели',
    hint: 'Бронирование отелей по всему миру с отзывами и рейтингами.'
  },
  {
    icon: 'icons/home.png',
    label: 'Санатории',
    hint: 'Уютные апартаменты на любой вкус.'
  },
  {
    icon: 'icons/cruise.png',
    label: 'Морские круизы',
    hint: 'Путешествия по морям и океанам на комфортабельных лайнерах.'
  },
  {
    icon: 'icons/travel.png',
    label: 'Полезные мелочи',
    hint: 'Аксессуары и советы для комфортного путешествия.'
  }
];

function App() {
  const [page, setPage] = useState("menu");

 useEffect(() => {
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand(); // не обязательно
  }
}, []);

  return (
      <div className="app">
        {page === 'menu' && (
            <>
              <h1 className="gradient-title">Путешествуй<br/>налегке</h1>
              <p>Выберите нужный раздел</p>
              <div className="menu">
                {menuItems.map((item, index) => (
                    <div className="menu-item" key={index}>
                      <div className="menu-item-left">
                        <img src={item.icon} alt=""/>
                        <div className="menu-item-text">
                          <span>{item.label}</span>
                          <small className="hint">{item.hint}</small>
                        </div>
                      </div>
                      <div
                          className="gradient-text"
                          onClick={() => {
                            switch (item.label) {
                              case 'Турпакеты':
                                setPage("loading");
                                setTimeout(() => setPage("tour"), 1600);
                                break;
                              case 'Авиаперелёты':
                                setPage("loading");
                                setTimeout(() => setPage("flights"), 1600);
                                break;
                              case 'Отели':
                                setPage("loading");
                                setTimeout(() => setPage("hotels"), 1600);
                                break;
                              case 'Санатории':
                                setPage("loading");
                                setTimeout(() => setPage("apartments"), 1600);
                                break;
                              case 'Морские круизы':
                                setPage("loading");
                                setTimeout(() => setPage("cruises"), 1600);
                                break;
                              case 'Полезные мелочи':
                              case 'Авиаперелёты':
                                setPage("loading");
                                setTimeout(() => setPage("tips"), 1600);
                                break;
                              default:
                                break;
                            }
                          }}
                      >
                        Открыть
                      </div>
                    </div>
                ))}
              </div>
            </>
        )}

        {page === 'loading' && (
            <div className="lottie-container">
              <Lottie animationData={travelAnimation} loop={true}/>
            </div>
        )}

        {page === 'tour' && (
            <div className="tour-page">
              <h1 className="gradient-title">Турпакеты</h1>
              <p className="tour-subtitle">Готовые туры с перелётом и проживанием по выгодной цене</p>

                <div className="menu">
                    <div className="menu-item">
                        <div className="menu-item-left">
                            <img src="icons/slet.png" alt=""/>
                            <div className="menu-item-text">
                                <span>Слетать.ru</span>
                            </div>
                        </div>
                        <div className="gradient-text" onClick={() => setPage('sle')}>
                            Открыть
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-left">
                            <img src="icons/big.png" alt=""/>
                            <div className="menu-item-text">
                                <span>Большая Страна</span>
                            </div>
                        </div>
                        <div className="gradient-text" onClick={() => setPage('big')}>
                            Открыть
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-left">
                            <img src="icons/trevel.png" alt=""/>
                            <div className="menu-item-text">
                                <span>Level.Travel</span>
                            </div>
                        </div>
                        <div className="gradient-text" onClick={() => setPage('Level')}>
                            Открыть
                        </div>
                    </div>

                    <div className="menu-item">
                        <div className="menu-item-left">
                            <img src="icons/Travelata.png" alt=""/>
                            <div className="menu-item-text">
                                <span>Travelata</span>
                            </div>
                        </div>
                        <div className="gradient-text" onClick={() => setPage('Travelata')}>
                            Открыть
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-left">
                            <img src="icons/onlinetours.png" alt=""/>
                            <div className="menu-item-text">
                                <span>Onlinetours</span>
                            </div>
                        </div>
                        <div className="gradient-text" onClick={() => setPage('online')}>
                            Открыть
                        </div>
                    </div>
                    {page === "flights" && (
                        <div className="tour-page">
                            <h1 className="gradient-title">Авиаперелёты</h1>
                            <p className="tour-subtitle">Поиск и бронирование авиабилетов по лучшим тарифам</p>

                            <div className="menu">
                                <div className="menu-item">
                                    <div className="menu-item-left">
                                        <img src="icons/airplane.png" alt=""/>
                                        <div className="menu-item-text">
                                            <span>Aviasales</span>
                                        </div>
                                    </div>
                                    <div className="gradient-text">Открыть</div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-item-left">
                                        <img src="icons/airplane.png" alt=""/>
                                        <div className="menu-item-text">
                                            <span>Туту.ру</span>
                                        </div>
                                    </div>
                                    <div className="gradient-text">Открыть</div>
                                </div>
                            </div>

                            <div className="back-button" onClick={() => setPage("menu")}>
                                ← Вернуться в главное меню
                            </div>
                        </div>
                    )}


                </div>

                <div className="back-button" onClick={() => setPage("menu")}>
                    ← Вернуться в главное меню
                </div>
            </div>
        )}
          {page === "flights" && (
              <div className="tour-page">
                  <h1 className="gradient-title">Авиаперелёты</h1>
                  <p className="tour-subtitle">Поиск и бронирование авиабилетов по лучшим тарифам</p>

                  <div className="menu">
                  <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/aviaselc.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Авиасейлс</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('aviasales')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/aviaselc.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Авиасейлс. Бизнес.</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('aviabiz')}>
                    Открыть
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/tyty.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Туту.ру</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('tyty')}>
                    Открыть
                  </div>
                </div>
                <p className="tour-subtitle">Помощь авиапассажирам для получения компенсации</p>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/Compensair.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Compensair</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('com')}>
                    Открыть
                  </div>
                </div>
              </div>

              <div className="back-button" onClick={() => setPage("menu")}>
                ← Вернуться в главное меню
              </div>
            </div>
        )}

        {page === 'hotels' && (
            <div className="tour-page">
              <h1 className="gradient-title">Отели </h1>
              <p className="tour-subtitle">Бронирование отелей с отзывами</p>

              <div className="menu">
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/air.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Яндекс Путешествия</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('ya')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/hot.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Hotellook</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('hot')}>
                    Открыть
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/otello.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Отелло</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('ott')}>
                    Открыть
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/ostrov.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Островок!</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('ostr')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/sut.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Суточно.ру</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('sut')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/tvil.png" alt=""/>
                    <div className="menu-item-text">
                      <span>ТВИЛ</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('tvil')}>
                    Открыть
                  </div>
                </div>
              </div>


              <div className="back-button" onClick={() => setPage('menu')}>
                ← Вернуться в главное меню
              </div>
            </div>
        )}
        {page === 'apartments' && (
            <div className="tour-page">
              <h1 className="gradient-title">Санатории</h1>
              <p className="tour-subtitle">Уютные санатории на любой вкус </p>
              <div className="menu">
              <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/avito.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Санаторий.ру</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('avito')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/put.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Путёвка</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('sanat')}>
                    Открыть
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/del.png" alt=""/>
                    <div className="menu-item-text">
                      <span>«Дельфин»</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('del')}>
                    Открыть
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/baza.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Мир Турбаз</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('baza')}>
                    Открыть
                  </div>
                </div>


              </div>

              <div className="back-button" onClick={() => setPage('menu')}>
                ← Вернуться в главное меню
              </div>
            </div>
        )}

        {page === 'cruises' && (
            <div className="tour-page">
              <h1 className="gradient-title">Морские круизы</h1>
              <p className="tour-subtitle">Путешествия по морям и океанам </p>
              <p className="gradient-subtitle">
                Круиз.онлайн — сервис бронирования комфортабельных круизов.
              </p>

              <div className="menu">
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/kruiz1.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Реки России</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('more')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/kruiz1.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Морские круизы</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('more2')}>
                    Открыть
                  </div>
                </div>
                <p className="gradient-subtitle">
                  Компания "ЛаВояж–круизы&путешествия" сервис морских круизов всему миру.
                </p>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/lavo.png" alt=""/>
                    <div className="menu-item-text">
                    <span>ЛаВояж–круизы
                    </span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('lavo')}>
                    Открыть
                  </div>
                </div>
              </div>

              <div className="back-button" onClick={() => setPage('menu')}>
                ← Вернуться в главное меню
              </div>
            </div>
        )}

        {page === 'tips' && (
            <div className="tour-page">
              <h1 className="gradient-title">Полезные мелочи</h1>
              <p className="tour-subtitle">Экскурсии, страховка, прокат</p>

              <div className="menu">
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/Tripster.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Tripster.ru</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('trip')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/sput.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Sputnik8</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('sput')}>
                    Открыть
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/str.png" alt=""/>
                    <div className="menu-item-text">
                    <span>Сравни.ру
                    </span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('str')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/Econom.png" alt=""/>
                    <div className="menu-item-text">
                      <span>Economybookings</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('eco')}>
                    Открыть
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/get.png" alt=""/>
                    <div className="menu-item-text">
                      <span>GetRentacar.com</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('get')}>
                    Открыть
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <img src="icons/Kiwi.png" alt=""/>
                    <div className="menu-item-text">
                      <span>BikesBooking.com</span>
                    </div>
                  </div>
                  <div className="gradient-text" onClick={() => setPage('kiwi')}>
                    Открыть
                  </div>
                </div>
              </div>


              <div className="back-button" onClick={() => setPage('menu')}>
                ← Вернуться в главное меню
              </div>
            </div>


        )}
        {page === 'sle' && (
            <div className="tour-page">
              <p className="gradient-subtitle">
                Слетать.ру сервис поиска туров от всех крупных туроператоров.
              </p>
              <SletayRuWidget/>
              <div className="back-button" onClick={() => setPage('tour')}>
                ← Вернуться в меню Турпакеты
              </div>
            </div>


        )}

        {page === 'big' && (
            <div className="tour-page">
              <p className="gradient-subtitle">
                Большая Страна — это сообщество 140+ локальных туроператоров, которые специализируются на путешествиях
                по
                России.
              </p>
              <BolshayaStranaWidget/>
              <div className="back-button" onClick={() => setPage('tour')}>
                ← Вернуться в меню Турпакеты
              </div>
            </div>


        )}

        {page === 'Level' && (
            <div className="tour-page">


              <div className="iframe-container">
                <iframe
                    src="https://level.tpx.gr/gAfoNm65"
                    title="Aviasales"
                    width="90%"
                    height="520px"
                    style={{border: 'none', borderRadius: '12px'}}
                ></iframe>
              </div>


              <div className="back-button" onClick={() => setPage('tour')}>
                ← Вернуться в меню Турпакеты
              </div>
            </div>


        )}

        {page === 'Travelata' && (
            <div className="tour-page">
              <p className="gradient-subtitle">
                Онлайн-сервис Travelata — это поиск туров по 68 направлениям.
              </p>

              <TravelataWidget/>


              <div className="back-button" onClick={() => setPage('tour')}>
                ← Вернуться в меню Турпакеты
              </div>
            </div>


        )}


        {page === 'aviasales' && (
            <div className="tour-page">
              <p className="gradient-subtitle">
                Авиасейлс — сервис для покупки дешёвых авиабилетов.
              </p>
              <AviasalesWidget/>
              <div className="back-button" onClick={() => setPage('flights')}>
                ← Вернуться в меню Авиаперелёты
              </div>
            </div>


        )}
        {page === 'aviabiz' && (
            <div className="tour-page">
              <div className="iframe-container">
                <iframe
                    src="https://aviasales.tpx.gr/WJnajv5y"
                    title="Aviasales"
                    width="90%"
                    height="520px"
                    style={{border: 'none', borderRadius: '12px'}}
                ></iframe>
              </div>


              <div className="back-button" onClick={() => setPage('flights')}>
                ← Вернуться в меню Авиаперелёты
              </div>
            </div>


        )}
        {page === 'tyty' && (
            <div className="tour-page">

              <iframe
                  src="https://tutu.tpx.gr/uTjnPXtz"
                  title="Aviasales"
                  width="90%"
                  height="520px"
                  style={{border: 'none', borderRadius: '12px'}}
              ></iframe>
              <div className="back-button" onClick={() => setPage('flights')}>
                ← Вернуться в меню Авиаперелёты
              </div>
            </div>


        )}
        {page === 'com' && (
            <div className="tour-page">
              <p className="gradient-subtitle">
                Compensair – это онлайн-сервис, который помогает авиапассажирам получить от авиакомпаний компенсацию в
                случае задержки рейса, отмены или отказа в посадке.
              </p>
              <CompensairWidget/>
              <div className="back-button" onClick={() => setPage('flights')}>
                ← Вернуться в меню Авиаперелёты
              </div>
            </div>


        )}

        {page === 'ya' && (
            <div className="tour-page">
              <p className="gradient-subtitle">
                Яндекс Путешествия — сервис по поиску и бронированию отелей.
              </p>
              <YandexWidget/>
              <div className="back-button" onClick={() => setPage('hotels')}>
                ← Вернуться в меню Отели
              </div>
            </div>


        )}

        {page === 'hot' && (
            <div className="tour-page">
              <p className="gradient-subtitle">

                Hotellook лучшие цены на отели по всему миру.
              </p>
              <HotellookWidget/>
              <div className="back-button" onClick={() => setPage('hotels')}>
                ← Вернуться в меню Отели
              </div>
            </div>


        )}
        {page === 'ott' && (
            <div className="tour-page">
              <p className="gradient-subtitle">

                Отелло – сервис бронирования отелей по всему миру.
              </p>
              <OtelloWidget/>
              <div className="back-button" onClick={() => setPage('hotels')}>
                ← Вернуться в меню Отели
              </div>
            </div>


        )}

        {page === 'ostr' && (
            <div className="tour-page">

              <OstrovokWidget/>

              <div className="back-button" onClick={() => setPage('hotels')}>
                ← Вернуться в меню Отели
              </div>
            </div>


        )}

        {page === 'tvil' && (
            <div className="tour-page">
              <iframe
                  src="https://tvil.tpx.gr/EQ5Q8LEj"
                  title="Aviasales"
                  width="90%"
                  height="530px"
                  style={{border: 'none', borderRadius: '12px'}}
              ></iframe>
              <div className="back-button" onClick={() => setPage('hotels')}>
                ← Вернуться в меню Отели
              </div>
            </div>


        )}

        {page === 'avito' && (
            <div className="tour-page">
              <p className="gradient-subtitle">

                Санаторий.ру — онлайн-сервис, через который можно забронировать отдых с лечением в санаториях,
                пансионатах и спа-отелях.
              </p>
              <SanatoriumWidget/>
              <div className="back-button" onClick={() => setPage('apartments')}>
                ← Вернуться в меню Санатории
              </div>
            </div>


        )}

        {page === 'sanat' && (
            <div className="tour-page">
              {/* Масштабируем только iframe, не кнопку */}
              <div
                  style={{
                    transform: 'scale(0.7)',
                    transformOrigin: 'top left',
                    width: '145%',
                    height: 'auto',
                    marginBottom: '-180px' // если нужно подвинуть вверх немного
                  }}
              >
                <iframe
                    src="https://putevka.tpx.gr/3f6wKS4R"
                    style={{width: '100%', height: '730px', border: 'none'}}
                    title="Scaled"
                ></iframe>
              </div>

              {/* Кнопка возвращения вне масштабирования */}
              <div className="back-button" onClick={() => setPage('apartments')} style={{marginTop: '5px'}}>
                ← Вернуться в меню Санатории
              </div>
            </div>


        )}
        {page === 'del' && (
            <div className="tour-page">
              {/* Масштабируем только iframe, не кнопку */}
              <div
                  style={{
                    transform: 'scale(0.7)',
                    transformOrigin: 'top left',
                    width: '143%',
                    height: 'auto',
                    marginBottom: '-180px' // если нужно подвинуть вверх немного
                  }}
              >
                <iframe
                    src="https://delfin-tour.tpx.gr/7fnrFs6b"
                    style={{width: '100%', height: '720px', border: 'none'}}
                    title="Scaled"
                ></iframe>
              </div>

              {/* Кнопка возвращения вне масштабирования */}
              <div className="back-button" onClick={() => setPage('apartments')} style={{marginTop: '5px'}}>
                ← Вернуться в меню Санатории
              </div>
            </div>


        )}
        {page === 'more' && (
            <div className="tour-page">
              <p className="gradient-subtitle">

                Речные круизы по России
              </p>
              <CruisesWidget/>
              <div className="back-button" onClick={() => setPage('cruises')}>
                ← Вернуться в меню Морские круизы
              </div>
            </div>


        )}


        {page === 'more2' && (
            <div className="tour-page">
              <p className="gradient-subtitle">

                Морские круизы по всему миру для всех возрастов и на любой бюджет
              </p>
              <WorldCruisesWidget/>
              <div className="back-button" onClick={() => setPage('cruises')}>
                ← Вернуться в меню Морские круизы
              </div>
            </div>


        )}

        {page === 'lavo' && (
  <div className="tour-page">
    {/* Масштабируем только iframe, не кнопку */}
    <div
      style={{
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
        width: '125%',
        height: 'auto',
        marginBottom: '-60px' // если нужно подвинуть вверх немного
      }}
    >
      <iframe
        src="https://lavoyage.tpx.gr/PJ8tX2Rb"
        style={{ width: '100%', height: '610px', border: 'none' }}
        title="Scaled"
      ></iframe>
    </div>

    {/* Кнопка возвращения вне масштабирования */}
    <div className="back-button" onClick={() => setPage('cruises')} style={{ marginTop: '5px' }}>
      ← Вернуться в меню Морские круизы
    </div>
  </div>
)}
         {page === 'trip' && (
  <div className="tour-page">
    {/* Масштабируем только iframe, не кнопку */}
    <div
      style={{
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
        width: '125%',
        height: 'auto',
        marginBottom: '-80px' // если нужно подвинуть вверх немного
      }}
    >
      <iframe
        src="https://tp.media/r?marker=638200&trs=423937&p=652&u=https%3A%2F%2Fexperience.tripster.ru&campaign_id=11"
        style={{ width: '100%', height: '620px', border: 'none' }}
        title="Scaled"
      ></iframe>
    </div>

    {/* Кнопка возвращения вне масштабирования */}
    <div className="back-button" onClick={() => setPage('tips')} style={{ marginTop: '5px' }}>
      ← Вернуться в Полезные мелочи
    </div>
  </div>
)}

         {page === 'sput' && (
  <div className="tour-page">
    {/* Масштабируем только iframe, не кнопку */}
    <div
      style={{
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
        width: '125%',
        height: 'auto',
        marginBottom: '-80px' // если нужно подвинуть вверх немного
      }}
    >
      <iframe
        src="https://tp.media/r?marker=638200&trs=423937&p=656&u=https%3A%2F%2Fsputnik8.com&campaign_id=21"
        style={{ width: '100%', height: '640px', border: 'none' }}
        title="Scaled"
      ></iframe>
    </div>

    {/* Кнопка возвращения вне масштабирования */}
    <div className="back-button" onClick={() => setPage('tips')} style={{ marginTop: '0px' }}>
      ← Вернуться в Полезные мелочи
    </div>
  </div>
)}

         {page === 'str' && (
  <div className="tour-page">
    {/* Масштабируем только iframe, не кнопку */}
    <div
      style={{
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
        width: '125%',
        height: 'auto',
        marginBottom: '-80px' // если нужно подвинуть вверх немного
      }}
    >
      <iframe
        src="https://tp.media/click?shmarker=638200&promo_id=4305&source_type=link&type=click&campaign_id=49&trs=423937"
        style={{ width: '100%', height: '640px', border: 'none' }}
        title="Scaled"
      ></iframe>
    </div>

    {/* Кнопка возвращения вне масштабирования */}
    <div className="back-button" onClick={() => setPage('tips')} style={{ marginTop: '0px' }}>
      ← Вернуться в Полезные мелочи
    </div>
  </div>
)}

         {page === 'eco' && (
             <div className="tour-page">
               <p className="gradient-subtitle">

                 Economybookings.com сервис бронирования авто
               </p>


               <EcoWidget/>
               {/* Кнопка возвращения вне масштабирования */}
               <div className="back-button" onClick={() => setPage('tips')} style={{marginTop: '0px'}}>
                 ← Вернуться в Полезные мелочи
               </div>
             </div>
         )}
 {page === 'get' && (
       <div className="tour-page">
    {/* Масштабируем только iframe, не кнопку */}
    <div
      style={{
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
        width: '125%',
        height: 'auto',
        marginBottom: '-100px' // если нужно подвинуть вверх немного
      }}
    >
      <iframe
        src="https://tp.media/click?shmarker=638200&promo_id=7747&source_type=link&type=click&campaign_id=222&trs=423937"
        style={{ width: '100%', height: '660px', border: 'none' }}
        title="Scaled"
      ></iframe>
    </div>

    {/* Кнопка возвращения вне масштабирования */}
    <div className="back-button" onClick={() => setPage('tips')} style={{ marginTop: '0px' }}>
      ← Вернуться в Полезные мелочи
    </div>
  </div>
)}

         {page === 'sut' && (
             <div className="tour-page">
               <p className="gradient-subtitle">

                 Суточно.ру — крупнейший российский сервис краткосрочной аренды недвижимости.
                 Суточно.ру — платформа посуточной аренды жилья с честными отзывами от гостей.
               </p>
<SutochnoWidget />

               {/* Кнопка возвращения вне масштабирования */}
               <div className="back-button" onClick={() => setPage('hotels')} style={{marginTop: '0px'}}>
                 ← Вернуться в меню Отели
               </div>
             </div>
         )}

        {page === 'online' && (
                 <div className="tour-page">
                   <p className="gradient-subtitle">

                   </p>
                   <iframe
                       src="https://tp.media/content?promo_id=1194&shmarker=638200&trs=423937&widget=306x488&campaign_id=43"
                       width="306" height="488" frameBorder="0" scrolling="no"></iframe>
                   {/* Кнопка возвращения вне масштабирования */}
                   <div className="back-button" onClick={() => setPage('tour')}>
                     ← Вернуться в меню Турпакеты
                   </div>
                 </div>
             )}

        {page === 'kiwi' && (
            <div className="tour-page">
              <p className="gradient-subtitle">
                Бронирование мотоциклов, скутеров, квадроциклов и велосипедов </p>

              <RentalWidget/>

              <div className="back-button" onClick={() => setPage('tips')} style={{marginTop: '0px'}}>
                ← Вернуться в Полезные мелочи
              </div>
            </div>
        )}

        {page === 'baza' && (
            <div className="tour-page">
              <div
                  style={{
                    transform: 'scale(0.8)',
                    transformOrigin: 'top left',
                    width: '125%',
                    height: 'auto',
                    marginBottom: '-100px' // если нужно подвинуть вверх немного
      }}    >
      <iframe
        src="https://mirturbaz.tpx.gr/0PQ9ihCV"
        style={{ width: '100%', height: '660px', border: 'none' }}
        title="Scaled"
      ></iframe>
    </div>

    <div className="back-button" onClick={() => setPage('apartments')} style={{ marginTop: '0px' }}>
      ← Вернуться в меню Санатории
    </div>
  </div>
)}

        <div className="wave" style={{
          backgroundImage: `url(${wave})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: '40px',
          zIndex: 9999,
          pointerEvents: 'none'
        }}/>
      </div>
  );
}

export default App;
