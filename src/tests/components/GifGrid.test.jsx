import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid /> testing', () => {

    const category = 'One Punch';

    test('should display loading at init', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        // screen.debug();

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category));
    });

    test('should display items when images are loaded from useFetchGifs', () => {

        const gifs = [
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

})