import React from "react";

const UserList = ({listOfUSer}) => {
 
    return (
        <div>
            {listOfUSer.map(el => (
                <div style={{color:"gray"}}>
                    <h4>name: {el.name}</h4>
                    <h4>username: {el.username}</h4>
                    <h4>email: {el.email}</h4>
                    {/* <h4>address: {el.address}</h4>
                    <h4>street: {el.address.street}</h4>
                    <h4>suite: {el.address.suite}</h4>
                    <h4>city: {el.address.city}</h4>
                    <h4>zipcode: {el.address.zipcode}</h4>
                    <h4>geo: {el.address.geo}</h4>
                    <h4>lat: {el.address.geo.lat}</h4>
                    <h4>lng: {el.address.geo.lng}</h4>
                    <h4>phone: {el.phone}</h4>
                    <h4>website: {el.website}</h4>
                    <h4>company: {el.company}</h4>
                    <h4>name: {el.company.name}</h4>
                    <h4>catchPhrase: {el.catchPhrase}</h4>
                    <h4>bs: {el.company.bs}</h4> */}
                </div>
            ))}

        </div>
    );
};

export default UserList;
