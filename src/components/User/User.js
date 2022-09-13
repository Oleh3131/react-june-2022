import React from 'react';

const User = ({
                  user:
                      {
                          id,
                          name,
                          username,
                          email,
                          address.street,
                          address.suite,
                          address.city,
                          address.zipcode,
                          address.geo.lat,
                          address.geo.lng,
                          phone,
                          website,
                          company.name,
                          company.catchPhrase,
                          company.bs
                      }
              }) => {
        return (
            <div>
                <h1>{id}</h1>
                <h2>{name}</h2>
            </div>
        );
    }

export default User;