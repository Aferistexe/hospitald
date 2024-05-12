import React from 'react';
import { render, screen } from '@testing-library/react';
import HealthPackagesBlock from './HealthPackagesBlock'; // Импорт вашего компонента

describe('HealthPackagesBlock', () => {
  test('отображает заголовок и пакеты услуг', () => {
    render(<HealthPackagesBlock />);
    expect(screen.getByText('Пакеты здоровья')).toBeInTheDocument();

    // Проверка наличия заголовков пакетов
    expect(screen.getByText('Базовое благополучие Помощи.net')).toBeInTheDocument();
    expect(screen.getByText('Золотое благополучие Помощи.net')).toBeInTheDocument();
    expect(screen.getByText('Счастливое благополучие Помощи.net')).toBeInTheDocument();
    expect(screen.getByText('Платиновое благополучие Помощи.net')).toBeInTheDocument();

    // Проверка отображения цен
    expect(screen.getByText('Цена: $1500')).toBeInTheDocument();
    expect(screen.getByText('Цена: $3000')).toBeInTheDocument();
    expect(screen.getByText('Цена: $4500')).toBeInTheDocument();
    expect(screen.getByText('Цена: $8000')).toBeInTheDocument();

    // Проверка наличия кнопок бронирования
    const buttons = screen.getAllByText('Забронировать');
    expect(buttons.length).toBe(4); // Убедимся, что для каждого пакета есть кнопка

    // Проверка наличия ссылок "Подробнее"
    const links = screen.getAllByText('Подробнее');
    expect(links.length).toBe(4); // Должна быть ссылка для каждого пакета
  });
});
