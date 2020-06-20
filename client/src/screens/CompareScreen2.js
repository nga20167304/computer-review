import React, { Component } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Table, Image} from "react-bootstrap";

class CompareScreen2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            product1: {},
            product2: {},
        }
    }

    componentDidMount() {
        const productId1 = this.props.match.params.id1;
        const productId2 = this.props.match.params.id2;
        axios.get(`http://localhost:5000/products/${productId1}`, null)
            .then(res => {
                this.setState({
                    product1 : res.data
                })
            })
            .catch(err => console.log(err))
        axios.get(`http://localhost:5000/products/${productId2}`, null)
            .then(res => {
                this.setState({
                    product2 : res.data
                })
            })
            .catch(err => console.log(err))

    }

    render(){
        console.log(this.state.product1)
        return (
            <Table striped bordered hover style={{marginTop : '5rem'}}>
                <thead>
                <tr>
                    <th style={{textAlign : 'center'}}>So sánh</th>
                    <th style={{textAlign : 'center'}}>{this.state.product1.name}</th>
                    <th style={{textAlign : 'center'}}>{this.state.product2.name}</th>
                </tr>
                {/*<tr>*/}
                {/*    <td style={{textAlign : 'center'}}>Image</td>*/}
                {/*    <td style={{textAlign : 'center'}}><Image style={{ width: '400px', height: '280px'}} src={this.state.image1}/></td>*/}
                {/*    <td style = {{textAlign : "center"}}><Image style={{ width: '400px', height: '280px'}} src={this.state.image2}/></td>*/}
                {/*</tr>*/}
                </thead>
                <tbody>
                <tr>
                    <td style={{textAlign : 'center'}}>Image</td>
                    <td style={{textAlign : 'center'}}><Image style={{ width: '400px', height: '280px'}} src={this.state.product1.image}/></td>
                    <td style={{textAlign : "center"}}><Image style={{ width: '400px', height: '280px'}} src={this.state.product2.image}/></td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Rating</td>
                    <td> {this.state.product1.rating}  <FontAwesomeIcon icon={faStar} size="1x" color="orange"  /></td>
                    <td> {this.state.product2.rating}  <FontAwesomeIcon icon={faStar} size="1x" color="orange"  /></td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Description</td>
                    <td>{this.state.product1.description}</td>
                    <td>{this.state.product2.description}</td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Price</td>
                    <td> {this.state.product1.price}</td>
                    <td> {this.state.product2.price}</td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Board</td>
                    <td> {this.state.product1.board ?
                        (<ul>
                            <li>Chip: {this.state.product1.board.chip}</li>
                            <li>Bus: {this.state.product1.board.bus}</li>
                            <li>Ram: {this.state.product1.board.ram}</li>
                        </ul>) : ''
                    }</td>
                    <td> {this.state.product2.board ?
                        (<ul>
                            <li>Chip: {this.state.product2.board.chip}</li>
                            <li>Bus: {this.state.product2.board.bus}</li>
                            <li>Ram: {this.state.product2.board.ram}</li>
                        </ul>) : ''
                    }</td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Available Program</td>
                    <td> {this.state.product1.availableProgram ?
                        (<ul>
                            <li>OS: {this.state.product1.availableProgram.operatingSystem}</li>
                            <li>Used By Software: {this.state.product1.availableProgram.usedBySoftware}</li>
                        </ul>) : ''
                    }</td>
                    <td> {this.state.product2.availableProgram ?
                        (<ul>
                            <li>OS: {this.state.product2.availableProgram.operatingSystem}</li>
                            <li>Used By Software: {this.state.product2.availableProgram.usedBySoftware}</li>
                        </ul>) : ''
                    }</td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Battery</td>
                    <td>  {this.state.product1.battery ?
                        (<ul>
                            <li>Species: {this.state.product1.battery.species}</li>
                            <li>Type: {this.state.product1.battery.type}</li>
                        </ul>) : ''
                    }</td>
                    <td>  {this.state.product2.battery ?
                        (<ul>
                            <li>Species: {this.state.product2.battery.species}</li>
                            <li>Type: {this.state.product2.battery.type}</li>
                        </ul>) : ''
                    }</td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Brand</td>
                    <td>  {this.state.product1.brand ?
                        (<ul>
                            <li>{this.state.product1.brand.name}</li>
                        </ul>) : ''
                    }</td>
                    <td>  {this.state.product2.brand ?
                        (<ul>
                            <li>{this.state.product2.brand.name}</li>
                        </ul>) : ''
                    }</td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>CPU</td>
                    <td> {this.state.product1.cpu ?
                        (<ul>
                            <li>Brand: {this.state.product1.cpu.brand}</li>
                            <li>Technology: {this.state.product1.cpu.technology}</li>
                            <li>Type: {this.state.product1.cpu.type}</li>
                            <li>Speed: {this.state.product1.cpu.speed}</li>
                            <li>Cache: {this.state.product1.cpu.cache}</li>
                            <li>Max Speed: {this.state.product1.cpu.maxSpeed}</li>
                        </ul>) : ''
                    }
                    </td>
                    <td> {this.state.product2.cpu ?
                        (<ul>
                            <li>Brand: {this.state.product2.cpu.brand}</li>
                            <li>Technology: {this.state.product2.cpu.technology}</li>
                            <li>Type: {this.state.product2.cpu.type}</li>
                            <li>Speed: {this.state.product2.cpu.speed}</li>
                            <li>Cache: {this.state.product2.cpu.cache}</li>
                            <li>Max Speed: {this.state.product2.cpu.maxSpeed}</li>
                        </ul>) : ''
                    }
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Graphic</td>
                    <td> {this.state.product1.graphic ?
                        (<ul>
                            <li>Chipset: {this.state.product1.graphic.chipset}</li>
                            <li>Memory: {this.state.product1.graphic.memory}</li>
                            <li>Design style: {this.state.product1.graphic.designStyle}</li>
                        </ul>) : ''
                    }
                    </td>
                    <td> {this.state.product2.graphic ?
                        (<ul>
                            <li>Chipset: {this.state.product2.graphic.chipset}</li>
                            <li>Memory: {this.state.product2.graphic.memory}</li>
                            <li>Design style: {this.state.product2.graphic.designStyle}</li>
                        </ul>) : ''
                    }
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Hard Disk</td>
                    <td> {this.state.product1.harddisk ?
                        (<ul>
                            <li>Capacity: {this.state.product1.harddisk.capacity}</li>
                            <li>Type: {this.state.product1.harddisk.type}</li>
                        </ul>) : ''
                    }
                    </td>
                    <td> {this.state.product2.harddisk ?
                        (<ul>
                            <li>Capacity: {this.state.product2.harddisk.capacity}</li>
                            <li>Type: {this.state.product2.harddisk.type}</li>
                        </ul>) : ''
                    }
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>RAM</td>
                    <td> {this.state.product1.ram ?
                        (<ul>
                            <li>Capacity: {this.state.product1.ram.capacity}</li>
                            <li>Type: {this.state.product1.ram.type}</li>
                            <li>Bus speed: {this.state.product1.ram.busSpeed}</li>
                            <li>Slots: {this.state.product1.ram.slots}</li>
                        </ul>) : ''
                    }
                    </td>
                    <td> {this.state.product2.ram ?
                        (<ul>
                            <li>Capacity: {this.state.product2.ram.capacity}</li>
                            <li>Type: {this.state.product2.ram.type}</li>
                            <li>Bus speed: {this.state.product2.ram.busSpeed}</li>
                            <li>Slots: {this.state.product2.ram.slots}</li>
                        </ul>) : ''
                    }
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Screen</td>
                    <td> {this.state.product1.screen ?
                        (<ul>
                            <li>Size: {this.state.product1.screen.size}</li>
                            <li>Resolution: {this.state.product1.screen.resolution}</li>
                            <li>Technology: {this.state.product1.screen.technology}</li>
                            <li>Sensor: {this.state.product1.screen.sensor}</li>
                        </ul>) : ''
                    }
                    </td>
                    <td> {this.state.product2.screen ?
                        (<ul>
                            <li>Size: {this.state.product2.screen.size}</li>
                            <li>Resolution: {this.state.product2.screen.resolution}</li>
                            <li>Technology: {this.state.product2.screen.technology}</li>
                            <li>Sensor: {this.state.product2.screen.sensor}</li>
                        </ul>) : ''
                    }
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Web Sell</td>
                    <td> {this.state.product1.web ?
                        (<ul>
                            <li>Name: {this.state.product1.web.name}</li>
                            <li>Link: <Link>{this.state.product1.web.link}</Link></li>
                        </ul>) : ''
                    }
                    </td>
                    <td> {this.state.product2.web ?
                        (<ul>
                            <li>Name: {this.state.product2.web.name}</li>
                            <li>Link: <Link>{this.state.product2.web.link}</Link></li>
                        </ul>) : ''
                    }
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign : 'center'}}>Size & Weight</td>
                    <td> {this.state.product1.sizeAndWeight ?
                        (<ul>
                            <li>Size: {this.state.product1.sizeAndWeight.size}</li>
                            <li>Weight: {this.state.product1.sizeAndWeight.weight}</li>
                            <li>Material: {this.state.product1.sizeAndWeight.material}</li>
                        </ul>) : ''
                    }
                    </td>
                    <td> {this.state.product2.sizeAndWeight ?
                        (<ul>
                            <li>Size: {this.state.product2.sizeAndWeight.size}</li>
                            <li>Weight: {this.state.product2.sizeAndWeight.weight}</li>
                            <li>Material: {this.state.product2.sizeAndWeight.material}</li>
                        </ul>) : ''
                    }
                    </td>
                </tr>
                </tbody>
            </Table>


        //
        //                 <li>
        //                     {this.state.product2.web ?
        //                         (<ul>
        //                             <li>Sell Web</li>
        //                             <li>Name: {this.state.product2.web.name}</li>
        //                             <li>Link: <Link>{this.state.product2.web.link}</Link></li>
        //                         </ul>) : ''
        //                     }
        //                 </li>
        //                 <li>
        //                     {this.state.product2.sizeAndWeight ?
        //                         (<ul>
        //                             <li>Size & Weight</li>
        //                             <li>Size: {this.state.product2.sizeAndWeight.size}</li>
        //                             <li>Weight: {this.state.product2.sizeAndWeight.weight}</li>
        //                             <li>Material: {this.state.product2.sizeAndWeight.material}</li>
        //                         </ul>) : ''
        //                     }
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        )
    }

}

export default CompareScreen2;
