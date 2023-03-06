import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('<GifItem /> testing', () => {

    const title = 'title test';
    const category = 'category';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QzBgef9jsgl7F0xzkx5S1e3g6mys77Bk&q=${category}&limit=10`;

    test('should match snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();

    });

    test('should display img with url and specified alt', () => {

        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');

        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('should display component title', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })

})