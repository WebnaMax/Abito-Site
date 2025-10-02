import { useOutletContext, useParams } from "react-router-dom"

export const Product = () => {
    const { id } = useParams();
    const { products } = useOutletContext();

    const findProduct = products.find((p) => p.id == id);

    return (

        <>

            <section className="content">
                <div className="container">
                    {findProduct ?
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product__left">
                                    <h2 className="content-product__title">{findProduct.title}</h2>
                                    <img className="content-product__img" src={findProduct.img} alt="product" />
                                    <p className="content-product__text">
                                        {/* Продаю не спеша самокат в хорошем состоянии. <br />
                                        Торг возможен. <br />
                                        За период эксплуатации не выявлено ни одной проблемы. <br />
                                        Из минусов — нужно прокачать задний тормоз. <br />
                                        Установлен отсекатель сзади. <br />
                                        Покрышки CST внедорожные. <br />
                                        Все на подшипниках, болты протянуты. <br />
                                        Пробег 881км , это немного для такого зверя. */}
                                        {findProduct.description}
                                    </p>
                                </div>

                                <div className="content-product__right">
                                    <h2 className="content-product__price">{findProduct.price}</h2>
                                    <button className="btn btn-primary btn-large">Показать телефон</button>
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>
                                <div className="content-side__box">

                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/images/truck.svg" alt="delivery" />
                                            <h5 className="content-side__list-item--title">Доставка</h5>
                                            <p className="content-side__list-item--text">Проверка при получении и возможность
                                                бесплатно вернуть товар</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/images/car.svg" alt="service" />
                                            <h5 className="content-side__list-item--title">Автотека</h5>
                                            <p className="content-side__list-item--text">Отчет с историей авто: пробег, владельцы,
                                                сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/images/home.svg" alt="home" />
                                            <h5 className="content-side__list-item--title">Онлайн-бронирование жилья</h5>
                                            <p className="content-side__list-item--text">Посуточная аренда квартир и домов: большой
                                                выбор вариантов для поездок по России</p>
                                        </div>
                                    </div>

                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">
                                            © ООО «Абито», 2011–2021
                                        </p>
                                        <a href="#" className="content-side__footer--item">
                                            Политика конфиденциальности
                                        </a>
                                        <a href="#" className="content-side__footer--item">
                                            Обработка данных
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <h2>Такого товара не существует!</h2>
                    }


                </div>
            </section>
        </>
    )
}