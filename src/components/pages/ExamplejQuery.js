import React from 'react';

class ExamplejQuery extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isClicked: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({ isClicked: !this.state.isClicked });
	}

	render(){
		const someElementClass = this.state.isClicked ? 'clicked' : '';
		return(
			<div className="container">
				<div id="someElement" className={someElementClass} style={{fontFamily: 'sans-seirf', fontSize: '25px', padding: '10px'}}>
				 I am an element
				</div>
				<div className="form-group">
				<form>
					<label className="control-label">Name: </label>
					<div className="form-inline mb-3">
				  	<input type="text" name="name"  className="form-control"/>
				  	</div>
					<input
						 type="submit"
						 className="btn btn-dark"
						 value="Submit"
						 id="someButton"
						 onClick={this.handleClick}
					/>
				</form>
				</div>

			</div>
		);
	}
}

export default ExamplejQuery;