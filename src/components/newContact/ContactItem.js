export const ContactItem = ({ item, onDelete }) => {
    return (
        <>
            <p>{item.name}: {item.number}</p>
            
                <button onClick={() => onDelete(item.id)}>Delete</button>
            
        </>
    );
};