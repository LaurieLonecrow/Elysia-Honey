import React, { useState, useEffect } from "react";
// const Card = styled.img`
//   justify-self: center;
//   width: 300px;
//   height: 300px;
//   background-position: center;
//   background-repeat: no-repeat;
// `
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-gap: 10px;
// `

  const Insta = () => {
  const [insta, setInsta] = useState([]);

  useEffect(() => {
      async function postData() {
        const url =
        'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":40346689,"first":6}';
      
        await fetch({
            url: url,
            method: 'GET', 
            mode: 'cors', 
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          })
              .then((data) => console.log(data))
              .then((data) => {
                const photosArray = data.data.user.edge_owner_to_timeline_media.edges;
                setInsta(photosArray);
              })
              .catch(error => {
                console.log(error);
              });
      }
    postData();
  }, []);

  console.log(insta)
  return (
    <div>
      {insta.map((photo) => (
        <a src={photo.node.display_url} key={photo.node.id} />
      ))}
    </div>
  );
};
export default Insta