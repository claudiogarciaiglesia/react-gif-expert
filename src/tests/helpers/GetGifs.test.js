import { getGifs } from "../../helpers/getGifs"

describe('GetGifs testing', () => {

    test('should return a gif array', async () => {

        const gifs = await getGifs('One Punch');
        // console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})