import {Cart} from './index';
import {render, screen} from '@testing-library/react';



test('render', () => {
    render(<Cart/>)
    const promoInput = screen.getByAltText()

})