export default function FullUser (props){
    const {item}=props;
    return (
        <div>
            {item &&
            <div>
                <p><b>id: </b>{item.id}</p>
                <p><b>name: </b>{item.name}</p>
                <p><b>username: </b>{item.username}</p>
                <p><b>email: </b>{item.email}</p>
                <p><b>street: </b>{item.address.street}</p>
                <p><b>suite: </b>{item.address.suite}</p>
                <p><b>city: </b>{item.address.city}</p>
                <p><b>zipcode: </b>{item.address.zipcode}</p>
                <p><b>geo-lat: </b>{item.address.geo.lat}</p>
                <p><b>geo-lng: </b>{item.address.geo.lng}</p>

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