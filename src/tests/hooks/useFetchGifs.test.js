import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('useFetchGifs testing', () => {

    test('should return initial state', () => {

        const { result } = renderHook(() => useFetchGifs('OnePunch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return images array and isLoading should be false', async () => {

        const { result } = renderHook(() => useFetchGifs('OnePunch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0), { timeout: 5000 }
        );

        const { images, isLoading } = result.current;

        expect(images.length).not.toBe(0);
        expect(isLoading).toBeFalsy();
    });
})