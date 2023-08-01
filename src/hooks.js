
export function useValue(initialValue) {
    const [inpvalue, setInpValue] = useState(initialValue);

    return {
        inpvalue,
        onChange: (e) => setInpValue(e.target.value),
        resetValue: () => setInpValue(""),
    };
}
