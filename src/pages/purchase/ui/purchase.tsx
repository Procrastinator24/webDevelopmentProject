import {Header} from "../../../widgets/header";
import Img from "@/shared/images/marin'sChildhood.jpg";
import React, {useState} from "react";
import "./purshace.scss"
import CN from "classnames";

export type SeatStatus = 'available' | 'occupied' | 'selected';



export const Purchase = () => {
    const [seats, setSeats] = useState<Array<SeatStatus[]>>([
        ['available', 'occupied', "available",'available', 'occupied', "available", 'occupied', "available",'available', 'occupied', "available", 'occupied', "available",'available', 'occupied', "available"],
        ['available', 'occupied', "available",'available', 'occupied', "available", 'occupied', "available",'available', 'occupied', "available", 'occupied', "available",'available', 'occupied', "available", 'occupied', "available"],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied'],
        ['available', "available", 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied','available', 'occupied'],
        ['available','available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied','available', 'occupied'],
        ['occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available'],
        ['occupied','available','occupied','available','occupied','available', 'occupied', "available",'available', 'occupied','available', 'occupied', "available",'available'],
    ])
    const [cart, setCart] = useState<any[]>([])
    const handleSeatClick = (row: number, col: number) => {
        const currentStatus = seats[row][col];

        // Занятые места нельзя выбрать
        if (currentStatus === 'occupied') {
            return;
        }

        // Создаем новую копию матрицы
        const newSeats = seats.map(r => [...r]);

        // Определяем новое состояние
        const newStatus = currentStatus === 'available' ? 'selected' : 'available';
        newSeats[row][col] = newStatus;

        // Обновляем матрицу мест
        setSeats(newSeats);

        // Обновляем корзину
        setCart(prev => {
            if (newStatus === 'selected') {
                // Добавляем место
                return [...prev, { row, col, id: `${row}-${col}` }];
            } else {
                // Удаляем место
                return prev.filter(item => !(item.row === row && item.col === col));
            }
        });
    };

    // const addToCart = () => {
    //     let rowcount = 0
    //     for(const row of seats ){
    //         let colcount= 0
    //         for(const col of row){
    //             if(col==='selected') {}
    //         }
    //     }
    // }
    return(
        <>
            <Header/>
            <div className="img-container">
                <img className="img" src={Img} />
            </div>

            <div className="buy-container">
                <div className="somediv"><h1>Покупка билета</h1></div>
                <div className="cost-container">650 рублей</div>
            </div>

            {/* Новый блок с выбором даты и схемой зала */}
            <div className="selection-container">
                {/* Левая часть - выбор даты и оплата */}
                <div className="selection-left">
                    <div className="date-selection">
                        <h3>Выберите дату спектакля:</h3>
                        <div className="date-buttons">
                            <button className="date-btn date-btn-active">15 дек, 19:00</button>
                            <button className="date-btn">20 дек, 18:00</button>
                        </div>
                        <p className="date-info">Выбранное время: 15 декабря, 19:00 (осталось 24 места)</p>
                    </div>

                    <div className="payment-section">
                        {/*<div className="selected-info">*/}
                        {/*    <div className="selected-item">*/}
                        {/*        <span>Спектакль:</span>*/}
                        {/*        <strong>Иваново детство</strong>*/}
                        {/*    </div>*/}
                        {/*    <div className="selected-item">*/}
                        {/*        <span>Дата:</span>*/}
                        {/*        <strong>15 декабря, 19:00</strong>*/}
                        {/*    </div>*/}
                        {/*    <div className="selected-item">*/}
                        {/*        <span>Выбрано мест:</span>*/}
                        {/*        <strong>0</strong>*/}
                        {/*    </div>*/}
                        {/*    <div className="selected-item total">*/}
                        {/*        <span>Итого:</span>*/}
                        {/*        <strong>0 рублей</strong>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="payment-buttons">
                            <button className="pay-btn">Оплатить билет</button>
                            <button className="cancel-btn">Отменить</button>
                        </div>
                    </div>
                </div>

                {/* Правая часть - схема зала */}
                <div className="selection-right">
                    <h3>Схема зала</h3>
                    <div className="hall-container">
                        {/* Сцена */}
                        <div className="stage">СЦЕНА</div>

                        {/* Зал - 14 рядов */}
                        <div className="hall">
                            {/*{Array.from({ length: 14 }).map((_, rowIndex) => (*/}
                            {/*    <div key={`row-${rowIndex}`} className="seat-row">*/}
                            {/*        <span className="row-label">{rowIndex + 1} ряд</span>*/}
                            {/*        <div className="seats-container">*/}
                            {/*        <div className="seats">*/}
                            {/*            /!* Места в ряду (от 6 до 12 мест в зависимости от ряда) *!/*/}
                            {/*            {Array.from({ length: rowIndex < 5 ? 12 : rowIndex < 10 ? 10 : 8 }).map((_, seatIndex) => (*/}
                            {/*                <div*/}
                            {/*                    key={`seat-${rowIndex}-${seatIndex}`}*/}
                            {/*                    className="seat"*/}
                            {/*                    onClick={() => console.log(`Ряд ${rowIndex + 1}, Место ${seatIndex + 1}`)}*/}
                            {/*                >*/}
                            {/*                    /!*{seatIndex + 1}*!/*/}
                            {/*                </div>*/}
                            {/*            ))}*/}
                            {seats.map((row, rowindex) => (
                                <div key={`row-${rowindex}`} className="seat-row">
                                    <span className="row-label">{rowindex + 1} ряд</span>
                                    <div className="seats-container">
                                        <div className="seats">
                                            {row.map((cell, colindex) => (
                                                <div
                                                    key={`cell-${rowindex}-${colindex}`}
                                                    className={CN("seat",{
                                                    "seat available":cell==='available',
                                                    "seat occupied":cell==='occupied',
                                                    "seat selected":cell==='selected'
                                                    })}
                                                    onClick={() =>
                                                        handleSeatClick(rowindex, colindex)}
                                                        // console.log(`Ряд ${rowindex + 1}, Место ${colindex + 1}`)}
                                                >
                                                    {/*{cell}*/}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/*    </div>*/}
                            {/*    </div>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                        </div>

                        {/* Легенда */}
                        <div className="legend">
                            <div className="legend-item">
                                <div className="seat available"></div>
                                <span>Свободно</span>
                            </div>
                            <div className="legend-item">
                                <div className="seat selected"></div>
                                <span>Выбрано</span>
                            </div>
                            <div className="legend-item">
                                <div className="seat occupied"></div>
                                <span>Занято</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}