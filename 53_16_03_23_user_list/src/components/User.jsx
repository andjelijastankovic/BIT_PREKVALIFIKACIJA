import { useEffect, useState } from "react";
import { hideMail } from "../utilites/hideEmail";
import { formatDate } from "../utilites/formatDate";
export function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('usersdata.json')
            .then(response => { return response.json() })
            .then((response) => setUsers(response));
    }, [])

    return (
        <div className="row row-cols-3 g-2 mt-5 pb-5">
            {
                users.map((user, i) =>
                    <div className="col-12 col-xs-12 col-sm-6 col-md-4">
                        <div key={i} className="card border-danger p-0 m-2 position-relative">
                            <img className="card-img-top" src={user.picture.large} alt={user.picture.large} />

                            <div className="card-body">
                                <p className="text-light fw-bold m-0 position-absolute top-50 pt-5 mt-3">{user.name.first}</p>
                                <p className="m-0">Email: {hideMail(user.email)}</p>
                                <p className="m-0">Date: {formatDate(user.dob.date)}</p>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
}