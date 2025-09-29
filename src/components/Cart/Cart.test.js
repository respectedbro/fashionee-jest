import {Cart} from './index';
import {render, screen, fireEvent} from '@testing-library/react';


describe('render Cart', () => {
    test('Рендер текста в промокоде', () => {
        render(<Cart/>)

        expect(screen.getByText('You have a promo code?')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter promo code')).toBeInTheDocument();
        expect(screen.getByText('Применить')).toBeInTheDocument();
    })

    test('применяет скидку при введении правильного промо-кода', () => {
        render(<Cart />);

        const promoInput = screen.getByPlaceholderText('Enter promo code');
        const applyButton = screen.getByText('Применить');


        fireEvent.change(promoInput, { target: { value: 'ilovereact' } });
        fireEvent.click(applyButton);


        expect(screen.getByText('10%')).toBeInTheDocument();
    });

    test('Промо-код не введён', () => {
        render(<Cart />);

        const promoInput = screen.getByPlaceholderText('Enter promo code');
        const applyButton = screen.getByText('Применить');

        fireEvent.change(promoInput, { target: { value: 'nocode' } });
        fireEvent.click(applyButton);

        expect(screen.getByText('No')).toBeInTheDocument();
    });
})
