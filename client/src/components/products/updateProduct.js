import React, { Component } from 'react'
import axios from 'axios'

class updateProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            price: '',
            rating: 0,
            availableProgram: {},
            battery: {},
            board: {},
            brand: {},
            cpu: {},
            graphic: {},
            harddisk: {},
            ram: {},
            screen: {},
            web: {},
            sizeAndWeight: {},
            alert:'',
            status: 0
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        const productId = this.props.match.params.id;
        axios.get(`http://localhost:5000/products/${productId}`, null)
            .then(res => {
              this.setState({...res.data});
              console.log('res data: ', this.state.product);
            })
            .catch(err => console.log(err))
      }

    onChange(e, parent) {
        if(!parent){
            console.log(`[${e.target.name}]: ${e.target.value}`);
            this.setState({ [e.target.name]: e.target.value });
        }
        else{
            console.log(`[${parent}[${e.target.name}]]: ${e.target.value}`);
            this.setState({ [parent] : {...this.state[parent], [e.target.name]: e.target.value}});
        }
    }
    onSubmit(e) {
        const productId = this.props.match.params.id;
        e.preventDefault()
               if(this.state.name==='' || this.state.brand==='' || this.state.description===''
            || this.state.price===''||this.state.rating===0){
            this.setState({alert:"There is an empty attribute!"})
            return false;
        }
        let form_data = new FormData();
        form_data.append('name', this.state.name);
        form_data.append('description', this.state.description);
        form_data.append('price', this.state.price);
        form_data.append('rating', this.state.rating);
        form_data.append('availableProgram', this.state.availableProgram ? JSON.stringify(this.state.availableProgram) : null);
        form_data.append('battery', this.state.battery ? JSON.stringify(this.state.battery) : null);
        form_data.append('board', this.state.board ? JSON.stringify(this.state.board) : null);
        form_data.append('brand', this.state.brand ? JSON.stringify(this.state.brand) : null);
        form_data.append('cpu', this.state.cpu ? JSON.stringify(this.state.cpu) : null);
        form_data.append('graphic', this.state.graphic ? JSON.stringify(this.state.graphic) : null);
        form_data.append('harddisk', this.state.harddisk ? JSON.stringify(this.state.harddisk ): null);
        form_data.append('ram', this.state.ram ? JSON.stringify(this.state.ram) : null);
        form_data.append('screen', this.state.screen ? JSON.stringify(this.state.screen) : null);
        form_data.append('web', this.state.web ? JSON.stringify(this.state.web) : null);
        form_data.append('sizeAndWeight', this.state.sizeAndWeight ? JSON.stringify(this.state.sizeAndWeight) : null);

        axios.put(`http://localhost:5000/products/${productId}`, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(res => {
            console.log("res = " +res);
            console.log(res.data);
            alert(`Update product ${res.data.name} successful!`);
            this.props.history.push(`/manage2`);
        })
            .catch(err => {
                console.log(err);
                this.setState({alert: err})
                return false;
            });
        this.setState({
            name: '',
            description: '',
            price: '',
            image: '',
            imagePreviewUrl: '',
            rating: 0,
            availableProgram: {},
            battery: {},
            board: {},
            brand: {},
            cpu: {},
            graphic: {},
            harddisk: {},
            ram: {},
            screen: {},
            web: {},
            sizeAndWeight: {},
            alert:'',
            status: 0
        })
    }


    render() {

        let alerts =this.state.alert===''?<div></div> : this.state.status===1?
            (<div className="alert alert-success alert-dismissible fade show" role="alert">
                {this.state.alert}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>):
            (<div className="alert alert-danger alert-dismissible fade show" role="alert">
                {this.state.alert}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>)
        ;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        {alerts}
                        <form noValidate onSubmit={this.onSubmit} className="create-product">
                            <h1 style={{textAlign:"center"}}>Update product</h1>
                            <div className="form-group">
                                <label htmlFor="name"><h3>Name</h3></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter product's name"
                                    value={this.state.name}
                                    onChange={(e) => {this.onChange(e, '')}}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description"><h3>Description</h3></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={(e) => {this.onChange(e, '')}}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price"><h3>Price</h3></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    placeholder="price"
                                    value={this.state.price}
                                    onChange={(e) => {this.onChange(e, '')}}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating"><h3>Rating</h3></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="rating"
                                    placeholder="rating"
                                    value={this.state.rating}
                                    onChange={(e) => {this.onChange(e, '')}}
                                    required
                                />
                            </div>
                            <div className="my-5">
                                <div><h2>Available Program</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label htmlFor="operatingSystem">Operating system</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="operatingSystem"
                                        value={this.state.availableProgram.operatingSystem}
                                        onChange={(e) => {this.onChange(e, 'availableProgram')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usedBySoftware">Used By Software</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="usedBySoftware"
                                        value={this.state.availableProgram.usedBySoftware}
                                        onChange={(e) => {this.onChange(e, 'availableProgram')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Battery</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Species</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="species"
                                        value={this.state.battery.species}
                                        onChange={(e) => {this.onChange(e, 'battery')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="type"
                                        value={this.state.battery.type}
                                        onChange={(e) => {this.onChange(e, 'battery')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Board</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Chip</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="chip"
                                        value={this.state.board.chip}
                                        onChange={(e) => {this.onChange(e, 'board')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Bus</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="bus"
                                        value={this.state.board.bus}
                                        onChange={(e) => {this.onChange(e, 'board')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ram</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ram"
                                        value={this.state.board.ram}
                                        onChange={(e) => {this.onChange(e, 'board')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Brand</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={this.state.brand.name}
                                        onChange={(e) => {this.onChange(e, 'brand')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="image"
                                        value={this.state.brand.image}
                                        onChange={(e) => {this.onChange(e, 'brand')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Cpu</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Brand</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="brand"
                                        value={this.state.cpu.brand}
                                        onChange={(e) => {this.onChange(e, 'cpu')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Technology</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="technology"
                                        value={this.state.cpu.technology}
                                        onChange={(e) => {this.onChange(e, 'cpu')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="type"
                                        value={this.state.cpu.type}
                                        onChange={(e) => {this.onChange(e, 'cpu')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Speed</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="speed"
                                        value={this.state.cpu.speed}
                                        onChange={(e) => {this.onChange(e, 'cpu')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Cache</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cache"
                                        value={this.state.cpu.cache}
                                        onChange={(e) => {this.onChange(e, 'cpu')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Max Speed</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="maxSpeed"
                                        value={this.state.cpu.maxSpeed}
                                        onChange={(e) => {this.onChange(e, 'cpu')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Graphic</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Chipset</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="chipset"
                                        value={this.state.graphic.chipset}
                                        onChange={(e) => {this.onChange(e, 'graphic')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Memory</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="memory"
                                        value={this.state.graphic.memory}
                                        onChange={(e) => {this.onChange(e, 'graphic')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Design style</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="designStyle"
                                        value={this.state.graphic.designStyle}
                                        onChange={(e) => {this.onChange(e, 'graphic')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Hard disk</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Capacity</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="capacity"
                                        value={this.state.harddisk.capacity}
                                        onChange={(e) => {this.onChange(e, 'harddisk')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="type"
                                        value={this.state.harddisk.type}
                                        onChange={(e) => {this.onChange(e, 'harddisk')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Ram</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Capacity</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="capacity"
                                        value={this.state.ram.capacity}
                                        onChange={(e) => {this.onChange(e, 'ram')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="type"
                                        value={this.state.ram.type}
                                        onChange={(e) => {this.onChange(e, 'ram')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Bus Speed</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="busSpeed"
                                        value={this.state.ram.busSpeed}
                                        onChange={(e) => {this.onChange(e, 'ram')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Slots</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="slots"
                                        value={this.state.ram.slots}
                                        onChange={(e) => {this.onChange(e, 'ram')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Screen</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Size</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="size"
                                        value={this.state.screen.size}
                                        onChange={(e) => {this.onChange(e, 'screen')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Resolution</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="resolution"
                                        value={this.state.screen.resolution}
                                        onChange={(e) => {this.onChange(e, 'screen')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Technology</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="technology"
                                        value={this.state.screen.technology}
                                        onChange={(e) => {this.onChange(e, 'screen')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Sensor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="sensor"
                                        value={this.state.screen.sensor}
                                        onChange={(e) => {this.onChange(e, 'screen')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Sell Web</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={this.state.web.name}
                                        onChange={(e) => {this.onChange(e, 'web')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="image"
                                        value={this.state.web.image}
                                        onChange={(e) => {this.onChange(e, 'web')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="link"
                                        value={this.state.web.link}
                                        onChange={(e) => {this.onChange(e, 'web')}}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <div><h2>Size & Weight</h2></div>
                                <hr/>
                                <div className="form-group">
                                    <label>Size</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="size"
                                        value={this.state.sizeAndWeight.size}
                                        onChange={(e) => {this.onChange(e, 'sizeAndWeight')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Weight</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="weight"
                                        value={this.state.sizeAndWeight.weight}
                                        onChange={(e) => {this.onChange(e, 'sizeAndWeight')}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Material</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="material"
                                        value={this.state.sizeAndWeight.material}
                                        onChange={(e) => {this.onChange(e, 'sizeAndWeight')}}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default updateProduct;
