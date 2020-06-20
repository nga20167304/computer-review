import React, { Component } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, Image} from "react-bootstrap";
import ListCommentComponent from "../components/ListCommentComponent";
import BoxCommentComponent from "../components/BoxCommentComponent";

class ProductScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {},

      listComments: [],
    }
  }

  componentDidMount(){
    const productId = this.props.match.params.id;
    axios.get(`http://localhost:5000/products/${productId}`, null)
      .then(res => {
        this.setState({
          product: res.data
        })
        console.log('res data: ', this.state.product);
      })
      .catch(err => console.log(err))
  }

  handleAddToDo = (item) => {
    this.state.listComments.push(item);
    this.setState({ listComments: this.state.listComments });
  };

  handleDeleteToDo = (index) => {
    this.state.listComments.splice(index, 1);
    this.setState({ listComments: this.state.listComments });
  };

  render(){
    console.log("params: ", this.props.match.params.id);
    console.log('product', this.state.product);

    return (<div>
      <div className = "back">
        <Link to = "/" > Back </Link>
      </div>

      <div className = "details">
        <div>
          <div className = "details-image">
            <Image style={{width:'640px',height:'480px'}} className="product-image" src={this.state.product.image} alt="product"/>
          </div>
          <li>
            Description:
            <div className="product-description">
              {this.state.product.description}
            </div>
          </li>
        </div>
        <div className="details-info" style={{marginLeft : '40px'}}>
          <ul>
            <li>
              <h2>{this.state.product.name}</h2>
            </li>
            <li className="star">
              {this.state.product.rating}  <FontAwesomeIcon icon={faStar} size="1x" color="orange"  />

            </li>
            <li>
              Price: <b>${this.state.product.price}</b>
            </li>
            <li>
              {this.state.product.board ?
                (<ul>
                  <li>Board</li>
                  <li>Chip: {this.state.product.board.chip}</li>
                  <li>Bus: {this.state.product.board.bus}</li>
                  <li>Ram: {this.state.product.board.ram}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.availableProgram ?
                (<ul>
                  <li>Available Program</li>
                  <li>OS: {this.state.product.availableProgram.operatingSystem}</li>
                  <li>Used By Software: {this.state.product.availableProgram.usedBySoftware}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.battery ?
                (<ul>
                  <li>Battery</li>
                  <li>Species: {this.state.product.battery.species}</li>
                  <li>Type: {this.state.product.battery.type}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.brand ?
                (<ul>
                  <li>Brand</li>
                  <li>Name: {this.state.product.brand.name}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.cpu ?
                (<ul>
                  <li>CPU</li>
                  <li>Brand: {this.state.product.cpu.brand}</li>
                  <li>Technology: {this.state.product.cpu.technology}</li>
                  <li>Type: {this.state.product.cpu.type}</li>
                  <li>Speed: {this.state.product.cpu.speed}</li>
                  <li>Cache: {this.state.product.cpu.cache}</li>
                  <li>Max Speed: {this.state.product.cpu.maxSpeed}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.graphic ?
                (<ul>
                  <li>Graphic</li>
                  <li>Chipset: {this.state.product.graphic.chipset}</li>
                  <li>Memory: {this.state.product.graphic.memory}</li>
                  <li>Design style: {this.state.product.graphic.designStyle}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.harddisk ?
                (<ul>
                  <li>Hard disk</li>
                  <li>Capacity: {this.state.product.harddisk.capacity}</li>
                  <li>Type: {this.state.product.harddisk.type}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.ram ?
                (<ul>
                  <li>Ram</li>
                  <li>Capacity: {this.state.product.ram.capacity}</li>
                  <li>Type: {this.state.product.ram.type}</li>
                  <li>Bus speed: {this.state.product.ram.busSpeed}</li>
                  <li>Slots: {this.state.product.ram.slots}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.screen ?
                (<ul>
                  <li>Screen</li>
                  <li>Size: {this.state.product.screen.size}</li>
                  <li>Resolution: {this.state.product.screen.resolution}</li>
                  <li>Technology: {this.state.product.screen.technology}</li>
                  <li>Sensor: {this.state.product.screen.sensor}</li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.web ?
                (<ul>
                  <li>Sell Web</li>
                  <li>Name: {this.state.product.web.name}</li>
                  <li>Link: <Link>{this.state.product.web.link}</Link></li>
                </ul>) : ''
              }
            </li>
            <li>
              {this.state.product.sizeAndWeight ?
                (<ul>
                  <li>Size & Weight</li>
                  <li>Size: {this.state.product.sizeAndWeight.size}</li>
                  <li>Weight: {this.state.product.sizeAndWeight.weight}</li>
                  <li>Material: {this.state.product.sizeAndWeight.material}</li>
                </ul>) : ''
              }
            </li>

            <Button style={{width: '50%'}} className="button compare-button btn-info" >
              <Link to={'/compare/' + this.state.product.id}> Compare</Link>
            </Button>
          </ul>
        </div>
      </div>
      <BoxCommentComponent onAddToDo={this.handleAddToDo} />
      <div>
        {this.state.listComments.map((item, index) => {
          return (
              <ListCommentComponent
                  key={index}
                  comment={item.comment}
                  onToDoDelete={() => this.handleDeleteToDo(index)}/>

          );
        })}
      </div>
    </div>)
  }

}

export default ProductScreen;
