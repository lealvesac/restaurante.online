export default interface iFilter {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}