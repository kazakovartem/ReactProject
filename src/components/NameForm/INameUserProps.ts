export interface INameUserProps {
    onAddNameUser(title: string): void;
    active: boolean;
    onSetActive: React.Dispatch<React.SetStateAction<boolean>>;
}
