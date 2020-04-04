import React, {Component} from 'react';
import PostData from './postfree.json';
import * as ReactBootstrap from "react-bootstrap";
import './Tiles.css';


class Postlistfree extends Component {
    render() {
        return (
           <div className="Free">
           <ReactBootstrap.Container>

<ReactBootstrap.Row>
<ReactBootstrap.Col >{PostData.map((postDetail, index) => {
              return <div className="Slide"> <ReactBootstrap.Card style={{ width: '18rem',minHeight:'35rem',maxHeight:'35rem' }}>
              <ReactBootstrap.Card.Img  style={{ width: '17.9rem',minHeight:'18rem',maxHeight:'18rem' }} variant="top" src={postDetail.imageURL}  alt="Conference 2020{No Poster}" />
                  <ReactBootstrap.Card.Body>
                      <ReactBootstrap.Card.Title>{postDetail.confName}</ReactBootstrap.Card.Title>
                      <ReactBootstrap.Card.Text>
                      <h6>{postDetail.city}</h6>
                       <h6> {postDetail.confStartDate}</h6>
                                <h5>{postDetail.entryType}</h5>
                        <a href={postDetail.confUrl}>{postDetail.confUrl}</a>
                      </ReactBootstrap.Card.Text>
                      
                  </ReactBootstrap.Card.Body>
                  </ReactBootstrap.Card></div>
             })}

</ReactBootstrap.Col>

</ReactBootstrap.Row>
</ReactBootstrap.Container>
           </div>
        )
    }

   
}

export default Postlistfree