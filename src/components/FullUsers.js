export default function FullUsers (props){
    const {items}=props;
    return (
        <div>
            {
                items.map(value=> (<div>{value.id} - {value.username}</div>))
            }
        </div>
    );
}