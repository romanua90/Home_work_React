export default function User (props){
    const {item}=props;
    return (
        <div>
            {item &&
            <div>
                {item.id} - {item.name} - {item.username}

            </div>
            }
            {!item &&
            <div>
                No data for view!!!
            </div>
            }

        </div>
    );
}